export interface Media {
  id?: number | string
  alt?: string
  url?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
}

export interface Technology {
  id?: number | string
  name: string
  logo?: Media | null
}

export interface SingleLink {
  id?: string
  title: string
  url: string
}

export type Links = SingleLink[]

export interface NavigationLink {
  id?: string
  title: string
  url: string
}

export interface ProjectDetail {
  'project-name': string
  image?: Media | null
  description: any
  technologies: Technology[]
  'github-link': string
  'preview-link': string
}

export interface SectionComponent {
  id?: string
  blockName?: string
  blockType?: string
  Components?: any[]
  [key: string]: any
}

