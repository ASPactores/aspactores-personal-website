'use client'

import { motion } from 'motion/react'
import React from 'react'

interface AnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  margin?: string
}

const SMOOTH_EASE = [0.25, 0.8, 0.25, 1] as const

export function FlipOnReveal({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, rotateX: 25 },
        visible: { opacity: 1, y: 0, rotateX: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1.2,
        ease: SMOOTH_EASE,
        delay,
      }}
      style={{
        transformOrigin: 'bottom center',
        display: 'inline-block',
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealOnLoad({ children, direction, delay = 0, className }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: direction === 'top' ? -24 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.1, delay, ease: SMOOTH_EASE }}
      style={{
        transformOrigin: 'top',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealOneByOne({ children, direction = 'top', delay = 0 }: AnimationProps) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: direction === 'top' ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + index * 0.16, ease: SMOOTH_EASE }}
          style={{
            transformOrigin: direction,
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  )
}

export function FadeOnLoad({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.0, delay, ease: SMOOTH_EASE }}
    >
      {children}
    </motion.div>
  )
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = 'top',
  className = '',
  margin = '0px 0px -30% 0px',
}: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: direction === 'top' ? -20 : 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: SMOOTH_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FlipOnScroll({
  children,
  delay = 0,
  className,
  margin = '0px 0px -30% 0px',
}: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { rotateX: 90, rotateZ: 3, rotateY: -10, opacity: 0 },
        visible: { rotateX: 0, rotateZ: 0, rotateY: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      transition={{
        duration: 1,
        ease: [0.5, 1.5, 0.7, 1],
        delay,
      }}
      style={{
        transformOrigin: 'bottom',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
