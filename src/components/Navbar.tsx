import logoImage from '@/assets/images/logosaas.png'
import Menu from '@/assets/icons/menu.svg'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='containe px-4'>
        <div className='py-4 flex items-center justify-between'>
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md opacity-60'></div>
            <Image src={logoImage} alt='logo' className='h-12 w-12 relative' />
          </div>
          <div className='border border-white/30 size-10 flex justify-center items-center rounded-lg sm:hidden'>
            <Menu className='text-white' />
          </div>
          <nav className='hidden sm:flex gap-6 items-center '>
            <a
              href='#'
              className='text-white/60 hover:text-white/100 transition-all'
            >
              About
            </a>
            <a
              href='#'
              className='text-white/60 hover:text-white/100 transition-all'
            >
              Features
            </a>
            <a
              href='#'
              className='text-white/60 hover:text-white/100 transition-all'
            >
              Updates
            </a>
            <a
              href='#'
              className='text-white/60 hover:text-white/100 transition-all'
            >
              Help
            </a>
            <a
              href='#'
              className='text-white/60 hover:text-white/100 transition-all'
            >
              Customers
            </a>
            <button className='bg-white px-4 py-2 rounded-lg'>
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
