import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
        name: 'First Name',
        type: 'text',
        required: true,
    },
    {
        name: 'Last Name',
        type: 'text',
        required: true,
    },
    
  ],
}
