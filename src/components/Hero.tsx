'use client'
import ArrowWIcon from '@/assets/icons/arrow-w.svg'
import CursorImage from '@/assets/images/cursor.png'
import MessageImage from '@/assets/images/message.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
export const Hero = () => {
  return (
    <section className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4D21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip z-0'>
      <div className='container relative'>
        <div className='flex items-center justify-center'>
          <a
            href='#'
            className='border py-1 px-2 rounded-lg border-white/30 flex gap-3'
          >
            <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2fD8FE)] text-transparent bg-clip-text'>
              Version 2.0 is here
            </span>
            <span className='inline-flex items-center gap-1'>
              <span>Read More</span>
              <ArrowWIcon className='w-4 h-4 hover:translate-x-1 transition-all duration-500' />
            </span>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>
              One Task <br />
              at a Time
            </h1>
            <motion.div
              className='absolute right-[476px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt=' '
                height={200}
                width={200}
                className='max-w-none'
                draggable='false'
              />
            </motion.div>
            <motion.div
              className='absolute top-[56px] left-[498px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt=' '
                height={200}
                width={200}
                className='max-w-none'
                draggable='false'
              />
            </motion.div>
          </div>
        </div>
        <p className='text-center text-xl mt-8 max-w-md mx-auto'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>
            Get for free
          </button>
        </div>
      </div>
      <div className='absolute h-[375px] sm:h-[768px] sm:w-[1536px] w-[750px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black top-[calc(100%-96px)] sm:top-[calc(100%-120px)] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] -z-10'></div>
    </section>
  )
}
