import type { Block } from 'payload'

export const TechnologyList: Block = {
  slug: 'technologies-list',
  labels: {
    singular: 'Technologies',
    plural: 'Technologies',
  },
  fields: [
    {
      name: 'items',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
      required: true,
    },
  ],
}
