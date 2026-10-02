import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anakinpactores.me'

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anakin Skywalker Pactores | Full-stack Developer & Data Engineer',
    template: '%s | Anakin Skywalker Pactores',
  },
  description:
    'Personal portfolio of Anakin Skywalker Pactores — Full-stack Developer and Data Engineer. Specializing in modern web applications, scalable data pipelines, Next.js, React, TypeScript, and Python.',
  applicationName: 'Anakin Skywalker Pactores Portfolio',
  authors: [{ name: 'Anakin Skywalker Pactores', url: siteUrl }],
  creator: 'Anakin Skywalker Pactores',
  publisher: 'Anakin Skywalker Pactores',
  generator: 'Next.js',
  keywords: [
    'Anakin Skywalker Pactores',
    'Anakin Pactores',
    'Full-stack Developer',
    'Data Engineer',
    'Software Engineer',
    'Web Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Python',
    'PostgreSQL',
    'Tailwind CSS',
    'Data Pipelines',
    'Apache Airflow',
    'Davao City',
    'Philippines Developer',
    'Portfolio',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Anakin Skywalker Pactores',
    title: 'Anakin Skywalker Pactores | Full-stack Developer & Data Engineer',
    description:
      'Personal portfolio of Anakin Skywalker Pactores — Full-stack Developer and Data Engineer. Specializing in modern web applications, scalable data pipelines, Next.js, React, TypeScript, and Python.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Anakin Skywalker Pactores - Full-stack Developer & Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anakin Skywalker Pactores | Full-stack Developer & Data Engineer',
    description:
      'Personal portfolio of Anakin Skywalker Pactores — Full-stack Developer and Data Engineer. Specializing in modern web applications, scalable data pipelines, Next.js, React, TypeScript, and Python.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Anakin Skywalker Pactores',
      alternateName: ['Anakin Pactores', 'Sky Pactores'],
      jobTitle: 'Full-stack Developer & Data Engineer',
      description:
        'Full-stack Developer and Data Engineer specializing in modern web applications, Next.js, React, TypeScript, Python, and scalable data pipelines.',
      url: siteUrl,
      image: `${siteUrl}/logo.webp`,
      sameAs: [
        'https://github.com/ASPactores',
        'https://www.linkedin.com/in/anakin-skywalker-pactores-474070200/',
        'https://www.facebook.com/Anakin.Skywalker.Pactores',
      ],
      knowsAbout: [
        'Full-stack Web Development',
        'Data Engineering',
        'Next.js',
        'React',
        'TypeScript',
        'Python',
        'PostgreSQL',
        'Apache Airflow',
        'REST APIs',
        'GraphQL',
        'Tailwind CSS',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Anakin Skywalker Pactores Portfolio',
      description: 'Personal Portfolio of Anakin Skywalker Pactores',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: 'Anakin Skywalker Pactores | Full-stack Developer & Data Engineer',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      mainEntity: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-primary-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-700 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-400"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
