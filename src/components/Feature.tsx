'use client'
import React, { useEffect, useRef } from 'react'
import EcosystemIcon from '@/assets/icons/ecosystem.svg'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

interface FeatureProps {
  title: string
  description: string
}

const Feature = ({ title, description }: FeatureProps) => {
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
  const border = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // event.x and event.y are the mouse coordinates
      if (!border.current) return
      const borderRect = border.current?.getBoundingClientRect()

      offsetX.set(event.x - borderRect?.x)
      offsetY.set(event.y - borderRect?.y)
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <article className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
      <motion.div
        className='absolute inset-0 border-2 border-purple-400 rounded-xl'
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className='inline-flex size-14 bg-white text-black justify-center items-center rounded-lg'>
        <EcosystemIcon className='' />
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>

      <p className='mt-2 text-white/70 max-w-sm mx-auto'>{description}</p>
    </article>
  )
}

export default Feature
