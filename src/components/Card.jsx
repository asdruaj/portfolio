import { motion } from 'motion/react'

const Card = ({ text, style, containerRef }) => {
  return (

    <motion.div
      className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab'
      style={style}
      drag
      whileHover={{ scale: 1.05 }}
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  )
}

export default Card
