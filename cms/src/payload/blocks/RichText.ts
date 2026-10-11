import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichText: Block = {
  slug: 'rich-text',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text',
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}
