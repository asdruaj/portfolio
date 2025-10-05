import { useState } from 'react'
import Project from '../components/Project'
import { myProjects } from '../constants/index'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 10, stiffness: 50 })
  const springY = useSpring(y, { damping: 10, stiffness: 50 })

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20)
    y.set(e.clientY + 20)
  }

  const [preview, setPreview] = useState(null)

  return (
    <section onMouseMove={handleMouseMove} className='relative c-space mt-20 md:mt:30' id='work'>
      <h2 className='text-heading'>Some Projects</h2>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full' />

      {
        myProjects.map(project => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))

      }
      {
        preview && !isMobile &&
          <motion.img
            className='fixed top-0 left-0 z-50 object-cover h-44 rounded-lg shadow-lg pointer-events-none w-80 ring-1 ring-white'
            style={{ x: springX, y: springY }}
            src={preview}
          />
      }
    </section>
  )
}

export default Projects
