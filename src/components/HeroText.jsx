import { mySocials } from '../constants'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
  const words = ['Engineer', 'Architect', 'Develop', 'Deploy']
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className='z-10 mt-20 text-center md:mt-52  lg:text-left h-full bg-clip-text w-screen relative'>
      {/* DeskptopView */}

      <div className='flex-col hidden lg:flex c-space space-y-4'>
        <motion.h1
          className='text-4xl font-medium'
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1 }}
        > I'm Asdrubal. I
        </motion.h1>
        <div className='flex flex-col items-start space-y-4'>
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className='font-black text-8xl text-white' />
          </motion.div>
          <motion.p
            className='text-4xl font-medium text-neutral-300'
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.8 }}
          >
            Modern Web & Mobile Products
          </motion.p>
        </div>
      </div>

      {/* MobileView */}

      <div className='block w-fit space-y-4 lg:hidden text-center mx-auto'>
        <motion.h1
          className='text-4xl font-medium'
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1 }}
        >I'm Asdrubal. I
        </motion.h1>

        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1.5 }}
        >
          <FlipWords words={words} className='font-black text-white text-7xl text-center' />
        </motion.div>

        <motion.p
          className='text-4xl font-medium text-neutral-300'
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1.8 }}
        >
          Modern Web & Mobile Products
        </motion.p>
      </div>
      <motion.div
        className='flex justify-center mt-2 lg:justify-start lg:ml-14 md:mt-12 md:gap-4'
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 2 }}
      >
        {mySocials.map((social, index) => (
          <a target='_blank' rel='noopener noreferrer' href={social.href} key={index} className='p-2 hover-animation'>
            <img src={social.icon} className='w-5 h-5 md:w-8 md:h-8 ' alt={social.name} />
          </a>
        ))}
      </motion.div>

    </div>
  )
}

export default HeroText
