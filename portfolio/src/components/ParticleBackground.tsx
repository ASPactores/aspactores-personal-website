'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Engine, RecursivePartial, IOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import { useTheme } from '@/components/ThemeProvider'

import particleConfig from '@/config/particles.json'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(() => {
    return {
      ...particleConfig,
      particles: {
        ...particleConfig.particles,
        number: {
          ...particleConfig.particles.number,
          value: isDark ? 85 : 80,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: isDark
            ? ['#ffffff', '#bae6fd', '#91fcdc']
            : ['#0891b2', '#06b6d4', '#0e7490', '#22d3ee'],
        },
        size: particleConfig.particles.size,
        opacity: {
          value: isDark ? { min: 0.35, max: 0.9 } : { min: 0.45, max: 0.85 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        move: {
          ...particleConfig.particles.move,
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
      },
    } as RecursivePartial<IOptions>
  }, [isDark])

  return (
    init && (
      <div aria-hidden="true" className="pointer-events-none">
        <Particles
          id="tsparticles"
          key={theme}
          options={options}
          className="absolute -z-10 w-full h-full top-0 left-0"
        />
      </div>
    )
  )
}
