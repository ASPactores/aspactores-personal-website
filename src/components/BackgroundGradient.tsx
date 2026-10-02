'use client'

import { motion } from 'motion/react'

export default function BackgroundGradient({
  className,
  pulse = false,
}: {
  className?: string
  pulse?: boolean
}) {
  return (
    <div
      className={`flex justify-center items-center w-64 md:w-[35vw] max-w-[550px] aspect-square pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {pulse ? (
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.22, 0.42, 0.22],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full rounded-full bg-gradient-to-r from-accent-600 via-accent-700 to-secondary-800 blur-[130px] md:blur-[160px]"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gradient-to-r from-accent-700 to-secondary-800 opacity-25 blur-[150px]" />
      )}
    </div>
  )
}
