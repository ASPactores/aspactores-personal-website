import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { FlipOnReveal, RevealOneByOne, RevealOnLoad } from './Animations'

import { PayloadLexicalReact } from '@zapal/payload-lexical-react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Links } from '@/types'

interface HeroProps {
  component: any
  socialLinks: Links
  resumeLink: string
}

export default function Hero({ component, socialLinks, resumeLink }: HeroProps) {
  const data = component.Components[0].component.find(
    (item: any) => item.blockName === 'introduction-blurb',
  )
  return (
    <section className="relative flex flex-col items-center justify-center min-h-svh w-full px-5 py-24 sm:px-10">
      <div className="flex flex-col items-start md:items-center md:justify-center text-primary-50 md:text-center my-4">
        <RevealOnLoad direction="top" delay={0}>
          <p className="text-sm md:text-base font-semibold underline">Hello, my name is</p>
        </RevealOnLoad>
        <FlipOnReveal delay={0.4}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Anakin Skywalker Pactores
          </h1>
        </FlipOnReveal>
        <RevealOnLoad delay={0.8}>
          <p className="text-left md:text-center text-base sm:text-lg md:text-xl font-semibold text-accent-400 mt-2">
            Full-stack Developer | Data Engineer
          </p>
          <div className="text-left md:text-center text-base max-w-2xl mt-8 md:mt-10">
            <PayloadLexicalReact
              content={data.content}
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
        </RevealOnLoad>
      </div>
      <div className="flex flex-col items-start md:items-center mt-6 md:space-y-8 md:mt-10 w-full max-w-2xl">
        <div className="hidden md:flex items-center justify-center space-x-10">
          <RevealOneByOne delay={1.1} direction="bottom">
            {socialLinks.map((data) => {
              let icon: IconProp
              switch (data.title) {
                case 'linkedin':
                  icon = faLinkedin
                  break
                case 'facebook':
                  icon = faFacebook
                  break
                case 'github':
                  icon = faGithub
                  break
                default:
                  icon = faLinkedin
              }
              return (
                <a
                  key={data.id}
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Anakin's ${data.title} profile`}
                  className="p-2 text-primary-50 hover:text-accent-400 hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-md"
                >
                  <FontAwesomeIcon className="w-8 h-8" icon={icon} aria-hidden="true" />
                </a>
              )
            })}
          </RevealOneByOne>
        </div>
        <RevealOnLoad delay={1.3} className="w-full flex justify-start md:justify-center">
          <Button
            asChild
            className="bg-accent-900 px-6 py-5 text-base border border-accent-700/50 shadow-md shadow-accent-950/50 hover:bg-accent-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-500/20 active:translate-y-0 active:scale-[0.98] transition-all duration-150 ease-out focus-visible:ring-2 focus-visible:ring-accent-400"
          >
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" aria-label="View Anakin's Resume">
              View Resume
            </a>
          </Button>
        </RevealOnLoad>
      </div>
      <div className="animate-bounce absolute bottom-6 md:bottom-10" aria-hidden="true">
        <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6 md:w-8 md:h-8 text-primary-50 opacity-50" aria-hidden="true" />
      </div>
    </section>
  )
}
