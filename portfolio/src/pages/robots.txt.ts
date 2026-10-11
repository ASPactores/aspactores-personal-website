import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (
    import.meta.env?.SITE_URL ||
    import.meta.env?.PUBLIC_SITE_URL ||
    import.meta.env?.SITE ||
    site?.toString() ||
    (typeof process !== 'undefined' ? process.env?.SITE_URL || '' : '')
  ).replace(/\/$/, '')
  const sitemapUrl = siteUrl ? `${siteUrl}/sitemap.xml` : '/sitemap.xml'

  const content = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
  ].join('\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

