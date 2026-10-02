import { Links } from '@/types'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({ socialLinks }: { socialLinks: Links }) {
  return (
    <footer className="text-primary-50 py-6 px-5">
      <div className="w-full h-px bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5"></div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:justify-between px-5 sm:px-10 md:px-16 lg:px-24 xl:px-48">
        <p className="text-xs md:text-sm font-semibold text-center md:text-left">
          © {new Date().getFullYear()} Anakin Skywalker Pactores
        </p>
        <div className="flex items-center justify-center space-x-6 md:space-x-5">
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
                <FontAwesomeIcon className="w-6 h-6 sm:w-7 sm:h-7" icon={icon} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
