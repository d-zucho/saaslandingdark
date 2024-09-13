import Helix2Image from '@/assets/images/helix2.png'
import emojiStarImage from '@/assets/images/emojistar.png'
import Image from 'next/image'

export const CallToAction = () => {
  return (
    <section className='bg-black text-white py-[72px] sm:py-24 text-center'>
      <div className='container max-w-xl relative'>
        <Image
          src={Helix2Image}
          alt='Helix 2'
          className='absolute top-6 left-[calc(100%+36px)]'
        />
        <Image
          src={emojiStarImage}
          alt='Emoji Star'
          className='absolute -top-[120px] right-[calc(100%+24px)]'
        />

        <h2 className='text-5xl sm:text-6xl tracking-tighter'>
          Get instant access
        </h2>
        <p className='text-white/70 text-xl mt-20'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className='mt-10 flex flex-col sm:flex-row max-w-sm mx-auto gap-2.5'>
          <input
            type='email'
            placeholder='your@email.com '
            className='h-12 bg-white/20 rounded-lg px-5 flex-1 font-medium placeholder:text-[#9CA3AF]'
          />
          <button
            type='submit'
            className='bg-white text-black h-12 rounded-lg px-5'
          >
            Get access
          </button>
        </form>
      </div>
    </section>
  )
}
