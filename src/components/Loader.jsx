import { Html, useProgress } from '@react-three/drei'
import { motion } from 'motion/react'

const Loader = () => {
  const { progress } = useProgress()
  const transition = (x) => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop',
      delay: x * 0.2,
      ease: 'easeInOut',
    }
  }

  return (
    <Html className='flex flex-col gap-4 justify-center items-center text-center'>
      <div className='flex items-center gap-2'>

        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={transition(0)}
          className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
        />
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={transition(1)}
          className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
        />
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={transition(2)}
          className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
        />
      </div>

      <span>{Math.floor(progress)}% loaded</span>
    </Html>
  )
}

export default Loader
