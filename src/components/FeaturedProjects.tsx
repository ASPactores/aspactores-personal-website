'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { RevealOnScroll } from './Animations'
import { Technology, Media } from '@/payload-types'
import { PayloadLexicalReact } from '@zapal/payload-lexical-react'

import InfoCard from './InfoCard'

interface ProjectDetails {
  'project-name': string
  image: Media
  description: any
  technologies: Technology[]
  'github-link': string
  'preview-link': string
}

interface ProjectDetailsProps extends ProjectDetails {
  className?: string
}

export function RightAligned({
  ['project-name']: projectName,
  image,
  description,
  technologies,
  ['github-link']: githubLink,
  ['preview-link']: previewLink,
  className,
}: ProjectDetailsProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div className="w-[420px] lg:w-[480px] h-[260px] lg:h-[300px] relative z-0 translate-x-8 xl:translate-x-14 rounded-8 overflow-hidden shadow-2xl shadow-primary-950/80 border border-secondary-800/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-accent-500/20 group">
        <div className="absolute inset-0 bg-accent-950/40 opacity-50 z-10 group-hover:opacity-0 transition-opacity duration-300 ease-out pointer-events-none"></div>
        <Image
          src={image.url!}
          alt={`${projectName} preview`}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          fill
          priority={true}
        />
      </div>
      <div className="flex flex-col items-end justify-center relative z-10 -translate-x-8 xl:-translate-x-14 space-y-3">
        <h3 className="text-xl font-semibold text-accent-50">{projectName}</h3>
        <div className="bg-secondary-950/85 backdrop-blur-sm border border-secondary-800/60 p-5 rounded-8 w-[33rem] text-accent-50 text-sm flex flex-col items-end transition-colors duration-200 hover:border-accent-500/40">
          <div className="text-left text-sm">
            <PayloadLexicalReact
              content={description!}
              mark={(mark) => {
                if (mark.bold) {
                  return <span className="font-semibold text-accent-400">{mark.text}</span>
                }

                if (mark.italic) {
                  return <span className="italic">{mark.text}</span>
                }

                return <>{mark.text}</>
              }}
            />
          </div>
          <div className="flex flex-wrap justify-end gap-2 mt-4 w-3/4">
            {technologies.map((tech) => (
              <Badge
                variant="secondary"
                className="bg-accent-800 border-accent-800 text-secondary-200 hover:bg-accent-700 transition-colors duration-150"
                key={tech.id}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 text-sm text-primary-50 underline italic">
          {githubLink && (
            <p>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${projectName}`}
                className="hover:text-accent-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm"
              >
                Github Repo
              </a>
            </p>
          )}
          {previewLink && (
            <p>
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live preview of ${projectName}`}
                className="hover:text-accent-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm"
              >
                Preview
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function LeftAligned({
  ['project-name']: projectName,
  image,
  description,
  technologies,
  ['github-link']: githubLink,
  ['preview-link']: previewLink,
  className,
}: ProjectDetailsProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-start justify-center relative z-10 translate-x-8 xl:translate-x-14 space-y-3">
        <h3 className="text-xl font-semibold text-accent-50">{projectName}</h3>
        <div className="bg-secondary-950/85 backdrop-blur-sm border border-secondary-800/60 p-5 rounded-8 w-[33rem] text-accent-50 text-sm flex flex-col items-start transition-colors duration-200 hover:border-accent-500/40">
          <div className="text-left text-sm">
            <PayloadLexicalReact
              content={description!}
              mark={(mark) => {
                if (mark.bold) {
                  return <span className="font-semibold text-accent-400">{mark.text}</span>
                }

                if (mark.italic) {
                  return <span className="italic">{mark.text}</span>
                }

                return <>{mark.text}</>
              }}
            />
          </div>
          <div className="flex flex-wrap justify-start gap-2 mt-4 w-3/4">
            {technologies.map((tech) => (
              <Badge
                variant="secondary"
                className="bg-accent-800 border-accent-800 text-secondary-200 hover:bg-accent-700 transition-colors duration-150"
                key={tech.id}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 text-sm text-primary-50 underline italic">
          {githubLink && (
            <p>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${projectName}`}
                className="hover:text-accent-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm"
              >
                Github Repo
              </a>
            </p>
          )}
          {previewLink && (
            <p>
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live preview of ${projectName}`}
                className="hover:text-accent-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm"
              >
                Preview
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="w-[420px] lg:w-[480px] h-[260px] lg:h-[300px] relative z-0 -translate-x-8 xl:-translate-x-14 rounded-8 overflow-hidden shadow-2xl shadow-primary-950/80 border border-secondary-800/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-accent-500/20 group">
        <div className="absolute inset-0 bg-accent-950/40 opacity-50 z-10 group-hover:opacity-0 transition-opacity duration-300 ease-out pointer-events-none"></div>
        <Image
          src={image.url!}
          alt={`${projectName} preview`}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          fill
          priority={true}
        />
      </div>
    </div>
  )
}

export function MobileView({
  ['project-name']: projectName,
  image,
  description,
  technologies,
  ['github-link']: githubLink,
  ['preview-link']: previewLink,
  className,
}: ProjectDetailsProps) {
  return (
    <InfoCard
      projectName={projectName}
      image={image}
      description={description}
      technologies={technologies}
      githubLink={githubLink}
      previewLink={previewLink}
      className={className}
    />
  )
}

export default function FeaturedProjects({ component }: any) {
  const projects = component.Components[0].component as ProjectDetails[]

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full h-full py-24 sm:py-36 px-4"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-primary-50 mb-11">Featured Projects</h2>
      
      {/* Desktop view */}
      <div className="hidden lg:block space-y-28 w-full max-w-5xl">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={index}
            direction="bottom"
            className="flex flex-col items-center justify-center w-full"
          >
            <div>
              {index % 2 === 0 ? <RightAligned {...project} /> : <LeftAligned {...project} />}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Mobile/Tablet view */}
      <div className="lg:hidden space-y-10 flex flex-col items-center justify-center w-full max-w-lg">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={index}
            direction="bottom"
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="w-full">
              <MobileView {...project} />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
