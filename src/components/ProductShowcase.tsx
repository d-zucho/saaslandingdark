'use client'
import Image from 'next/image'
import appScreen from '../assets/images/app-screen.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <section className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          Intuitive interface
        </h2>
        <p className='text-xl text-center text-white/70 mt-5 max-w-xl mx-auto'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: 200,
          }}
        >
          <Image
            ref={appImage}
            src={appScreen}
            alt='App screen'
            className='mt-14 mx-auto'
          />
        </motion.div>
      </div>
    </section>
  )
}
