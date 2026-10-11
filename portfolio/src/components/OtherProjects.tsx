import type { Media, Technology } from '@/types'
import { RevealOnScroll } from '@/components/Animations'
import InfoCard from '@/components/InfoCard'

interface OtherProjectsProps {
  'project-name': string
  image?: Media
  description: any
  technologies: Technology[]
  'github-link': string
  'preview-link': string
  className?: string
}

export default function OtherProjects({ component }: any) {
  const projects = (component?.Components?.[0]?.component || []) as OtherProjectsProps[]

  return (
    <section
      id="other-projects"
      className="flex flex-col items-center justify-center w-full h-full py-24 sm:py-36 px-4"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-primary-50 mb-11">Other Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl items-stretch">
        {projects.map((project, index) => {
          const {
            ['project-name']: projectName,
            image,
            description,
            technologies,
            ['github-link']: githubLink,
            ['preview-link']: previewLink,
          } = project
          return (
            <RevealOnScroll
              key={index}
              delay={(index % 2) * 0.08}
              direction="bottom"
              className="h-full w-full flex flex-col"
            >
              <InfoCard
                projectName={projectName}
                image={image}
                description={description}
                technologies={technologies || []}
                githubLink={githubLink}
                previewLink={previewLink}
                className="w-full h-full"
              />
            </RevealOnScroll>
          )
        })}
      </div>
    </section>
  )
}

