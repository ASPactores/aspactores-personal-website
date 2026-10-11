import BackgroundGradient from '@/components/BackgroundGradient'

export default function Background() {
  return (
    <div className="absolute w-full h-full overflow-clip -z-10" aria-hidden="true">
      <BackgroundGradient className="absolute -right-36 md:-right-48 lg:-right-96 -top-4" />
      <BackgroundGradient className="absolute -left-36 md:-left-48 lg:-left-96 top-[80vh]" />
    </div>
  )
}
