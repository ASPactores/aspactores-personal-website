import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (
    import.meta.env?.SITE_URL ||
    import.meta.env?.PUBLIC_SITE_URL ||
    import.meta.env?.SITE ||
    site?.toString() ||
    (typeof process !== 'undefined' ? process.env?.SITE_URL || '' : '')
  ).replace(/\/$/, '')
  const loc = siteUrl ? `${siteUrl}/` : '/'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}

