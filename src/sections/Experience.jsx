import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <section className='w-full'>
      <Timeline data={experiences} />
    </section>
  )
}

export default Experience
