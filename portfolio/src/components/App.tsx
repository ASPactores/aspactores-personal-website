import React from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import Background from '@/components/Background'
import ParticleBackground from '@/components/ParticleBackground'
import NavigationBar from '@/components/NavigationBar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import FeaturedProjects from '@/components/FeaturedProjects'
import OtherProjects from '@/components/OtherProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import type { Links, NavigationLink, SectionComponent } from '@/types'

interface AppProps {
  links: {
    socialLinks: Links
    email: string
    resumeLink: string
  }
  navigationLinks: NavigationLink[]
  homepageLayout: SectionComponent[]
}

export default function App({ links, navigationLinks, homepageLayout }: AppProps) {
  const { socialLinks, email, resumeLink } = links

  return (
    <ThemeProvider>
      <main id="main-content" className="relative overflow-x-clip h-full min-h-screen">
        <Background />
        <ParticleBackground />
        <NavigationBar navigationLinks={navigationLinks} />
        {homepageLayout && homepageLayout.length > 0
          ? homepageLayout.map((section, index) => {
              const key = section.id || section.blockName || index
              switch (section.blockName) {
                case 'introduction':
                  return (
                    <Hero
                      key={key}
                      component={section}
                      socialLinks={socialLinks}
                      resumeLink={resumeLink}
                    />
                  )
                case 'about-me':
                  return <AboutMe key={key} component={section} />
                case 'featured-projects':
                  return <FeaturedProjects key={key} component={section} />
                case 'other-projects':
                  return <OtherProjects key={key} component={section} />
                default:
                  return null
              }
            })
          : null}
        <Contact email={email} />
        <Footer socialLinks={socialLinks} />
      </main>
    </ThemeProvider>
  )
}

