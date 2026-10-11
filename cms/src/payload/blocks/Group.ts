import type { Block } from 'payload'
import { RichText } from './RichText'
import { Photo } from './Photo'
import { TechnologyList } from './TechnologiesList'
import { ProjectDetail } from './ProjectDetail'

export const Group: Block = {
  slug: 'section',
  labels: {
    singular: 'Section',
    plural: 'Sections',
  },
  fields: [
    {
      name: 'Components',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'component',
          label: 'Component',
          type: 'blocks',
          blocks: [RichText, Photo, TechnologyList, ProjectDetail],
          required: true,
        },
      ],
    },
  ],
}
