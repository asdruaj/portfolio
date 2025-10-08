import { mySocials } from '../constants'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
  const words = ['Immersive', 'Modern', 'Engaging']
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className='z-10 mt-20 text-center md:mt-40 lg:text-left h-full bg-clip-text w-screen relative'>
      {/* DeskptopView */}

      <div className='flex-col hidden lg:flex c-space space-y-4'>
        <motion.h1
          className='text-4xl font-medium'
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1 }}
        >Hello traveller! <br /><br /> I'm Asdrubal
        </motion.h1>
        <div className='flex flex-col items-start space-y-4'>
          <motion.p
            className='text-4xl font-medium text-neutral-300'
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.2 }}
          >
            An aspiring developer <br /> eager to learn and build.
          </motion.p>

          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className='font-black text-8xl text-white' duration={2000} />
          </motion.div>
          <motion.p
            className='text-4xl font-medium text-neutral-300'
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.8 }}
          >
            Web Experiences
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
        >Hi I'm Asdrubal
        </motion.h1>

        <motion.p
          className='text-5xl font-medium text-neutral-300'
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1.2 }}
        >A guy that Builds
        </motion.p>

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
          Web Experiences
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
