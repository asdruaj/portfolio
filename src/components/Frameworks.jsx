import { OrbitingCircles } from './OrbitingCircles'

export function Frameworks () {
  const skills = [
    'css3',
    'git',
    'github',
    'react',
    'nodejs',
    'javascript',
    'tailwindcss',
    'vitejs',
    'mongodb',
    'azure',
    'html5',
    'microsoft',
    'expo',
    'supabase'
  ]

  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center '>
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, i) => (
          <Icon key={i} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={3}>
        {skills.toReversed().map((skill, i) => (
          <Icon key={i} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({ src, }) => (
  <img src={src} alt='Framework Icon' className='size-full rounded-sm hover:scale-110 duration-200 select-none' draggable={false} />)
