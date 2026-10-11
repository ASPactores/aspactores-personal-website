import type { CollectionConfig } from 'payload'
import { authenticatedUser } from '@/payload/access/authenticatedUser'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticatedUser,
    read: () => true,
    update: authenticatedUser,
    delete: authenticatedUser,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
