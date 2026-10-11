import type { Block } from 'payload'

export const Photo: Block = {
  slug: 'photo',
  labels: {
    singular: 'Photo',
    plural: 'Photos',
  },
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Full Image',
          value: 'image',
        },
        {
          label: 'Logo',
          value: 'logo',
        },
      ],
    },
    {
      name: 'photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.['type'] === 'image',
      },
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'logo',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.['type'] === 'logo',
      },
    },
  ],
}
