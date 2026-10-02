import Image from 'next/image'
import { Technology, Logo } from '@/payload-types'

export default function FeaturedTechnologies({
  className,
  technologies,
}: {
  className?: string
  technologies: Technology[]
}) {
  return (
    <div className={`${className} flex flex-col justify-center items-center w-full`}>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5" aria-hidden="true"></div>
      <h3 className="text-secondary-50 text-xl font-semibold">Technologies</h3>
      <div className="flex items-center justify-center flex-wrap gap-3 w-full max-w-2xl mt-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.id || index}
            className="inline-flex items-center gap-2.5 rounded-lg border border-secondary-800/80 bg-secondary-950/80 px-4 py-2.5 text-sm font-medium text-secondary-100 shadow-sm transition-all duration-150 ease-out hover:border-accent-500/60 hover:bg-secondary-900/90 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-500/10 cursor-default select-none"
          >
            <Image
              src={`${(tech.logo as Logo).url}`}
              alt={`${tech.name} logo`}
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              priority={index < 4}
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mt-7" aria-hidden="true"></div>
    </div>
  )
}
