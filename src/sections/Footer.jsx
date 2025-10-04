import { mySocials } from '../constants/index'

const Footer = () => {
  return (
    <section className='flex flex-wrap items-center justify-center gap-5 pb-3 text-sm text-neutral-400 c-space'>
      <div className='mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />

      {mySocials.map((social, index) => (
        <a target='_blank' rel='noopener noreferrer' href={social.href} key={index} className='p-2'>
          <img src={social.icon} className='w-5 h-5 ' alt={social.name} />
        </a>
      ))}

    </section>
  )
}

export default Footer
