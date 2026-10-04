import Image from 'next/image'
import FeaturedTechnologies from './FeaturedTechnologies'
import { RevealOnScroll } from './Animations'
import { defaultElements, PayloadLexicalReact } from '@zapal/payload-lexical-react'

export default function AboutMe({ component }: any) {
  const { content, profile_photo, technologies } = component.Components[0].component.reduce(
    (acc: any, item: any) => {
      switch (item.blockName) {
        case 'content':
          acc.content = item.content
          break
        case 'profile-photo':
          acc.profile_photo = item.photo
          break
        case 'technologies':
          acc.technologies = item.items
          break
      }
      return acc
    },
    { content: null, profile_photo: null, technologies: null },
  )

  return (
    <section id="about" className="flex items-center justify-center h-full w-full py-20">
      <div className="flex flex-col items-center justify-center text-primary-50 text-center my-4 w-full max-w-4xl px-5 sm:px-8 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold md:text-left w-full mb-8 md:mb-6">
          About Me
        </h2>
        <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col-reverse items-center md:grid md:grid-cols-3 md:content-center md:gap-8 md:items-start justify-items-center md:justify-items-end w-full">
            <div className="text-left col-span-2 text-sm mt-8 md:mt-0 leading-relaxed">
              <PayloadLexicalReact
                content={content!}
                mark={(mark) => {
                  if (mark.bold) {
                    return <span className="font-semibold text-accent-400">{mark.text}</span>
                  }

                  if (mark.italic) {
                    return <span className="italic">{mark.text}</span>
                  }

                  return <>{mark.text}</>
                }}
                elements={{
                  ...defaultElements,
                  paragraph: (props) => {
                    return <p className="mb-4 text-left leading-relaxed">{props.children}</p>
                  },
                }}
              />
            </div>
            <div className="relative w-48 sm:w-52 aspect-square group transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10 rounded-8 content-center shadow-lg dark:shadow-none border border-secondary-800/60 dark:border-transparent">
              <div className="absolute inset-0 bg-accent-950/60 opacity-50 rounded-8 z-10 group-hover:opacity-0 transition-opacity duration-200 ease-out pointer-events-none"></div>
              <Image
                src={profile_photo.url!}
                alt="Profile photo of Anakin Skywalker Pactores"
                className="rounded-8 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                fill
                priority={true}
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          direction="bottom"
          delay={0.1}
          className="flex flex-col items-center justify-center w-full"
        >
          <FeaturedTechnologies technologies={technologies!} className="w-full md:w-[90%] mt-12" />
        </RevealOnScroll>
      </div>
    </section>
  )
}
