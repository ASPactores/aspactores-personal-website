import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from '@/payload/collections/Users'
import { Media } from '@/payload/collections/Media'
import { Logo } from '@/payload/collections/Logo'
import { Links } from '@/payload/globals/Links'
import { Pages } from '@/payload/collections/Pages'
import { Technologies } from '@/payload/collections/Technologies'
import { NavigationLinks } from '@/payload/globals/NavigationLinks'
import { ServiceAccount } from '@/payload/collections/ServiceAccount'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Logo, Pages, Technologies, ServiceAccount],
  globals: [Links, NavigationLinks],
  editor: lexicalEditor(),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || process.env.SERVER_URL || '',
  cors: process.env.CORS_ORIGINS === '*'
    ? '*'
    : [
        ...(process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim()) : []),
        process.env.FRONTEND_URL,
        process.env.PORTFOLIO_URL,
        'http://localhost:4321',
        'http://localhost:3000',
      ].filter(Boolean) as string[],
  csrf: [
    ...(process.env.CSRF_ORIGINS ? process.env.CSRF_ORIGINS.split(',').map((o) => o.trim()) : []),
    process.env.SERVER_URL,
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.NEXT_PUBLIC_SERVER_URL,
    'http://localhost:3000',
  ].filter(Boolean) as string[],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
        logo: true,
      },
    }),
  ],
})
