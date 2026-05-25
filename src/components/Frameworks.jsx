import { useState, useEffect } from 'react'
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
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.toReversed().map((skill, i) => (
          <Icon key={i} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

function Icon ({ src }) {
  const [svg, setSvg] = useState(null)

  useEffect(() => {
    let cancelled = false
    setSvg(null)
    fetch(src)
      .then(res => res.text())
      .then(content => {
        if (!cancelled) setSvg(content)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [src])

  if (!svg) {
    return <div className='size-full rounded-sm' />
  }

  return (
    <div
      className='[&>svg]:size-full size-full rounded-sm hover:scale-110 duration-200'
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
