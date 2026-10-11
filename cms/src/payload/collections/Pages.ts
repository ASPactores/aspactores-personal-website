import { authenticatedUser } from '@/payload/access/authenticatedUser'
import { RichText } from '@/payload/blocks/RichText'
import { Group } from '@/payload/blocks/Group'
import type { CollectionConfig } from 'payload'
import { TechnologyList } from '@/payload/blocks/TechnologiesList'
import { Photo } from '@/payload/blocks/Photo'
import { ProjectDetail } from '@/payload/blocks/ProjectDetail'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'page-name',
  },
  access: {
    create: authenticatedUser,
    read: () => true,
    update: authenticatedUser,
    delete: authenticatedUser,
  },
  fields: [
    {
      name: 'page-name',
      label: 'Page Name',
      type: 'text',
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [RichText, Group, TechnologyList, Photo, ProjectDetail],
    },
  ],
}
