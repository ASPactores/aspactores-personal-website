import { authenticatedUser } from '@/payload/access/authenticatedUser'
import type { CollectionConfig } from 'payload'

export const Logo: CollectionConfig = {
  slug: 'logo',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: authenticatedUser,
    read: () => true,
    update: authenticatedUser,
    delete: authenticatedUser,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
