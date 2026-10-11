import type { Links, NavigationLink, SectionComponent } from '@/types'

const getCmsUrl = (): string => {
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.CMS_URL) return process.env.CMS_URL
    if (process.env.PUBLIC_CMS_URL) return process.env.PUBLIC_CMS_URL
    if (process.env.PAYLOAD_URL) return process.env.PAYLOAD_URL
    if (process.env.NEXT_PUBLIC_CMS_URL) return process.env.NEXT_PUBLIC_CMS_URL
  }
  try {
    const env = (import.meta as any).env
    if (env?.PUBLIC_CMS_URL) return env.PUBLIC_CMS_URL
    if (env?.CMS_URL) return env.CMS_URL
    if (env?.PAYLOAD_URL) return env.PAYLOAD_URL
  } catch {}
  return 'http://localhost:3000'
}

export const CMS_URL: string = getCmsUrl()

export function resolveMediaUrl(url?: string | null): string {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  const cleanBase = CMS_URL.replace(/\/$/, '')
  const cleanPath = url.startsWith('/') ? url : `/${url}`
  return `${cleanBase}${cleanPath}`
}

function normalizeMediaUrls(obj: any): any {
  if (!obj || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    return obj.map(normalizeMediaUrls)
  }

  const result: Record<string, any> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'url' && typeof value === 'string' && value.startsWith('/api/')) {
      result[key] = resolveMediaUrl(value)
    } else {
      result[key] = normalizeMediaUrls(value)
    }
  }
  return result
}

function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  let apiKey = ''
  if (typeof process !== 'undefined' && process.env) {
    apiKey = process.env.PAYLOAD_API_KEY || process.env.CMS_API_KEY || ''
  }
  if (!apiKey) {
    try {
      const env = (import.meta as any).env
      apiKey = env?.PAYLOAD_API_KEY || env?.CMS_API_KEY || ''
    } catch {}
  }

  if (apiKey) {
    const authHeader = apiKey.includes('API-Key')
      ? apiKey
      : `service-accounts API-Key ${apiKey}`
    headers['Authorization'] = authHeader
  }

  return headers
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 2,
  delay = 500,
): Promise<Response> {
  let lastError: unknown
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options)
      if (res.ok) {
        return res
      }
      if (res.status >= 500 && attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delay * (attempt + 1)))
        continue
      }
      return res
    } catch (err) {
      lastError = err
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delay * (attempt + 1)))
        continue
      }
    }
  }
  throw lastError || new Error(`Failed to fetch ${url}`)
}

export interface ExtractedLinks {
  socialLinks: Links
  email: string
  resumeLink: string
}

export async function getLinks(): Promise<ExtractedLinks> {
  const url = `${CMS_URL.replace(/\/$/, '')}/api/globals/links`
  try {
    const res = await fetchWithRetry(url, {
      headers: getAuthHeaders(),
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch links from ${url} (status: ${res.status})`)
    }

    const data = await res.json()
    const links: Array<{ title: string; url: string }> = data?.link || []

    return {
      socialLinks: links.filter((l) => l.title !== 'email' && l.title !== 'resume'),
      email: links.find((l) => l.title === 'email')?.url || 'anakin.pactores@gmail.com',
      resumeLink: links.find((l) => l.title === 'resume')?.url || '#',
    }
  } catch (error) {
    console.warn(`[CMS Warning] Unable to fetch links from ${url}:`, (error as Error).message)
    return {
      socialLinks: [
        { title: 'facebook', url: 'https://www.facebook.com/aspactores/' },
        { title: 'linkedin', url: 'https://www.linkedin.com/in/aspactores/' },
        { title: 'github', url: 'https://github.com/ASPactores' },
      ],
      email: 'anakin.pactores@gmail.com',
      resumeLink: 'https://drive.google.com/file/d/1tTw3AAcOXWKeKrcmqsXWQLi7gy4roOsW/view?usp=sharing',
    }
  }
}

export async function getNavigationLinks(): Promise<NavigationLink[]> {
  const url = `${CMS_URL.replace(/\/$/, '')}/api/globals/navigation-links`
  try {
    const res = await fetchWithRetry(url, {
      headers: getAuthHeaders(),
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch navigation links from ${url} (status: ${res.status})`)
    }

    const data = await res.json()
    return data?.link || []
  } catch (error) {
    console.warn(`[CMS Warning] Unable to fetch navigation-links from ${url}:`, (error as Error).message)
    return [
      { title: 'About', url: '#about' },
      { title: 'Experience', url: '#experience' },
      { title: 'Projects', url: '#projects' },
      { title: 'Contact', url: '#contact' },
    ]
  }
}

export async function getHomePageLayout(): Promise<SectionComponent[]> {
  const url = `${CMS_URL.replace(/\/$/, '')}/api/pages?where[page-name][equals]=Home&depth=2`
  try {
    const res = await fetchWithRetry(url, {
      headers: getAuthHeaders(),
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch page layout from ${url} (status: ${res.status})`)
    }

    const data = await res.json()
    const homePage = data?.docs?.[0]
    if (!homePage || !homePage.layout) {
      throw new Error('Home page document or layout missing in CMS response')
    }

    return normalizeMediaUrls(homePage.layout) as SectionComponent[]
  } catch (error) {
    console.warn(`[CMS Warning] Unable to fetch Home page layout from ${url}:`, (error as Error).message)
    return []
  }
}
