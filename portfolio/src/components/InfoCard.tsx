import Image from '@/components/ui/Image'
import { PayloadLexicalReact } from '@zapal/payload-lexical-react'
import type { Technology, Media } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface InfoCardDetailsProps {
  projectName: string
  image?: Media
  description: any
  technologies: Technology[]
  githubLink: string
  previewLink: string
  className?: string
}

export default function InfoCard({
  projectName,
  image,
  description,
  technologies,
  githubLink,
  previewLink,
  className,
}: InfoCardDetailsProps) {
  return (
    <div
      className={`relative w-full h-full flex flex-col bg-secondary-950 border border-secondary-800/70 rounded-7 mx-auto transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10 shadow-lg dark:shadow-none shadow-stone-900/5 group ${className}`}
    >
      {image && image.url && (
        <div className="w-full h-[200px] sm:h-[250px] relative overflow-hidden rounded-t-7 flex-shrink-0">
          <div className="absolute inset-0 bg-accent-950/50 opacity-60 z-10 group-hover:opacity-0 transition-opacity duration-200 ease-out pointer-events-none"></div>
          <Image
            src={image.url}
            alt={projectName}
            className="rounded-t-7 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            fill
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-3 w-full">
        <h3 className="text-secondary-50 text-lg font-semibold">{projectName}</h3>
        <div className="text-secondary-100 dark:text-secondary-50 text-left text-sm leading-relaxed flex-1">
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
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge
              variant="secondary"
              className="bg-accent-800 dark:bg-secondary-800 border border-secondary-800/60 text-accent-700 dark:text-secondary-200 hover:bg-accent-700/20 dark:hover:bg-secondary-700 transition-colors duration-150 text-xs"
              key={tech.id}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between w-full text-sm text-secondary-50 font-semibold pt-6 mt-auto">
          {previewLink && previewLink !== '' ? (
            <Button asChild className="bg-accent-700 text-white hover:bg-accent-600 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 ease-out w-1/2">
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live preview of ${projectName}`}
              >
                Preview
              </a>
            </Button>
          ) : (
            <div />
          )}
          {githubLink && (
            <p className="underline text-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${projectName}`}
                className="hover:text-accent-300 transition-colors duration-150"
              >
                Github Repository
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

