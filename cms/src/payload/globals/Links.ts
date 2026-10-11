import type { GlobalConfig } from 'payload'
import { authenticatedUser } from '@/payload/access/authenticatedUser'

export const Links: GlobalConfig = {
  slug: 'links',
  access: {
    read: () => true,
    update: authenticatedUser,
  },
  fields: [
    {
      name: 'link',
      label: 'Link',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
