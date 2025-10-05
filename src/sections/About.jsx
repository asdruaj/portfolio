import { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = () => {
  const secondGridContainer = useRef()

  return (
    <section className='c-space section-spacing'>
      <h2 className='text-heading' id='about-me'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>

        {/* Grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
          <img src='assets/coding-pov.png' className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale[2.5]' alt='coding image' />
          <div className='z-10 md:mb-4'>
            <p className='headtext'>Hi, I'm Asdrubal Aldana</p>
            <p className=' text-neutral-200 text-sm md:text-base text-pretty'>
              A recently graduated informatics engineer, passionate about web development with exposure to both backend and front end enviroments.
            </p>
            <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
          </div>
        </div>

        {/* Grid 2 */}
        <div className='grid-default-color grid-2'>
          <div className=' flex items-center justify-center w-full h-full' ref={secondGridContainer}>
            <p className=' flex items-end text-5xl text-gray-500 select-none'>
              DRAG ME
            </p>
            <Card style={{ rotate: '30deg', top: '65%', left: '20%' }} text='Azure' containerRef={secondGridContainer} />
            <Card style={{ rotate: '-45deg', top: '65%', left: '50%' }} text='Agile' containerRef={secondGridContainer} />
            <Card style={{ rotate: '-55deg', top: '30%', left: '2%' }} text='FP' containerRef={secondGridContainer} />
            <Card style={{ rotate: '90deg', top: '40%', left: '75%' }} text='Front-End' containerRef={secondGridContainer} />
            <Card style={{ rotate: '10deg', top: '10%', left: '42%' }} text='API Rest' containerRef={secondGridContainer} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className='grid-black-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>I'm based in Venezuela, open to remote work worldwide</p>
          </div>

          <figure className='absolute left-[30%] top-[0%]'>
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className='grid-special-color grid-4'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext'>
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 4 */}
        <div className='grid-default-color grid-5'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Tech Stack</p>
            <p className='text-neutral-400 text-[0.7rem]  md:text-base text-pretty'>I'm working hard and getting comfortable with a variety of frameworks, libraries and tools to build reliable, scalable applications. I'm excited by my progress!</p>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 size-full start-[50%] md:scale-125'>
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
