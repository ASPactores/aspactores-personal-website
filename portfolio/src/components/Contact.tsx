import { FlipOnScroll, RevealOnScroll } from '@/components/Animations'
import BackgroundGradient from '@/components/BackgroundGradient'

export default function Contact({ email }: { email: string }) {
  return (
    <section
      id="contact"
      className="relative w-full min-h-svh py-24 px-5 flex flex-col justify-center items-center overflow-clip text-center"
    >
      <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-base font-semibold text-secondary-200">
          Want to collaborate?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-50 mt-1">Get In Touch</h2>
      </RevealOnScroll>
      <FlipOnScroll delay={0.5}>
        <p className="text-base sm:text-xl md:text-2xl font-semibold text-accent-400 underline mt-7 break-all sm:break-normal">
          <a
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
            className="hover:text-accent-300 hover:drop-shadow-[0_0_12px_rgba(8,145,178,0.45)] dark:hover:drop-shadow-[0_0_10px_rgba(32,231,190,0.5)] transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm inline-block"
          >
            {email}
          </a>
        </p>
      </FlipOnScroll>
      <BackgroundGradient className="absolute -z-10" pulse={true} />
    </section>
  )
}
