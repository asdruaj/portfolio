import { motion } from 'motion/react'

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  overflow-scroll backdrop-blur-sm'>
      <motion.div
        className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 mx-2  overflow-scroll no-scrollbar max-h-[calc(100dvh_-_2rem)]'
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
      >
        <button onClick={closeModal} className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
          <img src='assets/close.svg' className='w-3 h-3 md:w-6 md:h-6' alt='Close Icon' />
        </button>
        <img src={image} alt={title} className='w-full rounded-t-2xl' />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
          <p className='mb-3 font-normal text-neutral-400'>{description}</p>
          {
            subDescription.map((subDesc, i) => (
              <p key={i} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
            ))
          }

          <div className='flex items-center justify-between mt-8 gap-12'>
            <div className='flex gap-3 flex-wrap'>
              {tags.map(tag => (
                <img className='rounded-lg size-10 hover-animation w-8 h-8 md:w-12 md:h-12 ' key={tag.id} src={tag.path} alt={tag.name} />
              ))}
            </div>
            <a className='inline-flex items-center gap-4 font-medium hover-animation cursor-pointer hover-animation mr-4 text-sm md:text-base' href={href}>
              View Project
              <img className='w-6 h-6' src='assets/arrow-up.svg' alt='View Project Icon' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
