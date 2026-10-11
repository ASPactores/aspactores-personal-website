'use client'

import { useState } from 'react'
import { FadeOnLoad, RevealOneByOne } from '@/components/Animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import Link from '@/components/ui/Link'
import Image from '@/components/ui/Image'
import type { NavigationLink } from '@/types'
import ThemeToggle from '@/components/ThemeToggle'

export default function NavigationBar({ navigationLinks }: { navigationLinks: NavigationLink[] }) {
  const [open, setOpen] = useState(false)

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    setOpen(false)

    const hashIndex = url.indexOf('#')
    if (hashIndex !== -1) {
      const hash = url.substring(hashIndex)
      const targetId = hash.replace('#', '')
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', hash)
        }, 300)
      }
    }
  }

  return (
    <nav
      className="z-10 absolute top-0 flex w-full text-primary-50 items-center py-6 sm:py-7 justify-between px-5 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <FadeOnLoad delay={0.1}>
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-md"
          aria-label="Anakin Pactores - Home"
        >
          <Image
            src="/logo.webp"
            alt="Anakin Pactores"
            width={48}
            height={30}
            className="h-8 w-auto rounded-md object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight">Anakin Pactores</span>
        </Link>
      </FadeOnLoad>

      <div className="hidden lg:flex items-center space-x-8 text-sm">
        <RevealOneByOne delay={0.08}>
          {navigationLinks.map((link) => (
            <p key={link.title} className="text-primary-100 hover:text-accent-400 hover:-translate-y-0.5 transition-all duration-150 ease-out">
              <Link href={link.url}>{link.title}</Link>
            </p>
          ))}
        </RevealOneByOne>
        <ThemeToggle />
      </div>

      <div className="lg:hidden flex items-center gap-3">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open navigation menu"
            className="p-2 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 active:scale-95 transition-transform duration-150"
          >
            <FontAwesomeIcon icon={faBars} className="w-7 h-7 text-primary-50" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="flex flex-col h-full items-center justify-center text-2xl font-semibold bg-secondary-950 border-none text-primary-50 space-y-8 overflow-y-auto py-10"
          >
            <SheetHeader className="hidden">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription className="hidden">Main site navigation links</SheetDescription>
            </SheetHeader>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-md"
              aria-label="Anakin Pactores - Home"
            >
              <Image
                src="/logo.webp"
                alt="Anakin Pactores"
                width={64}
                height={40}
                className="h-12 w-auto rounded-md object-contain shadow-md"
              />
              <p className="text-xl font-semibold text-primary-50">Anakin Pactores</p>
            </Link>
            <RevealOneByOne delay={0.15}>
              {navigationLinks.map((link) => (
                <p key={link.title} className="hover:text-accent-400 active:scale-95 transition-all duration-150 ease-out">
                  <Link
                    href={link.url}
                    onClick={(e) => handleNavLinkClick(e, link.url)}
                  >
                    {link.title}
                  </Link>
                </p>
              ))}
            </RevealOneByOne>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

