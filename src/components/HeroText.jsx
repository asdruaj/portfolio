import React from 'react'
import { FlipWords } from './FlipWords'

const words = ['Secure', 'Modern', 'Scalable']

const HeroText = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/* DeskptopView */}

      <div className='flex-col hidden md:flex c-space'>
        <h1 className='text-4xl font-medium'>Hi I'm Asdrubal</h1>
        <div className='flex flex-col items-start'>
          <p className='text-5xl font-medium text-neutral-300'>
            A Developer <br /> Dedicated to Crafting
          </p>
          <div>
            <FlipWords words={words} className='font-black text-8xl text-white' duration={2000} />
          </div>
          <p className='text-4xl font-medium text-neutral-300'>
            Web Solutions
          </p>
        </div>
      </div>

      {/* MobileView */}

      <div className='flex flex-col space-y-4 md:hidden'>
        <p className='text-4xl font-medium'>Hi I'm Asdrubal</p>

        <p className='text-5xl font-black text-neutral-300'>Building</p>

        <div>
          <FlipWords words={words} className='font-black text-white text-7xl' />
        </div>
        <p className='text-4xl font-black text-neutral-300'>
          Web Applications
        </p>
      </div>

    </div>
  )
}

export default HeroText
