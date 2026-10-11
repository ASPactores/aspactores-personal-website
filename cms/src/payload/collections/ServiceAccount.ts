import type { CollectionConfig } from 'payload'
import { authenticatedUser } from '@/payload/access/authenticatedUser'

export const ServiceAccount: CollectionConfig = {
  slug: 'service-accounts',
  labels: {
    singular: 'Service Account',
    plural: 'Service Accounts',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'enableAPIKey', 'createdAt'],
  },
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
    depth: 0,
  },
  access: {
    create: authenticatedUser,
    read: authenticatedUser,
    update: authenticatedUser,
    delete: authenticatedUser,
  },
  fields: [
    {
      name: 'name',
      label: 'Project Name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g., Portfolio Static Site Generator',
        description: 'The service or project where this API key will be used.',
      },
    },
  ],
}
