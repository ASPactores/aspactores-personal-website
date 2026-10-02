'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Engine, RecursivePartial, IOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'

import particleConfig from '@/config/particles.json'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <div aria-hidden="true" className="pointer-events-none">
        <Particles
          id="tsparticles"
          options={particleConfig as RecursivePartial<IOptions>}
          className="absolute -z-10 w-full h-full top-0 left-0"
        />
      </div>
    )
  )
}
