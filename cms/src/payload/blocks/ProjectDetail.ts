import type { Block } from 'payload'

export const ProjectDetail: Block = {
  slug: 'project-detail',
  labels: {
    singular: 'Project Detail',
    plural: 'Project Details',
  },
  fields: [
    {
      name: 'project-name',
      label: 'Project Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'technologies',
      label: 'Technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'github-link',
      label: 'GitHub Link',
      type: 'text',
    },
    {
      name: 'preview-link',
      label: 'Preview Link',
      type: 'text',
    },
  ],
}
