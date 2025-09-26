import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Float } from '@react-three/drei'
import { easing } from 'maath'
import Loader from '../components/Loader'
import { Spaceship } from '../components/Spaceship'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })

  return (
    <section className='flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space md:items-start'>
      <HeroText />
      <ParallaxBackground />
      <figure className='absolute inset-0' style={{ width: '100vw', height: '100vh' }}>

        <Canvas camera={{ position: [1, 2, 3] }}>
          <ambientLight intensity={9} />
          <Suspense fallback={<Loader />}>

            <Float>
              <Spaceship scale={isMobile && 0.0006} position={isMobile && [-0.8, 10, 0]} />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>

      </figure>
    </section>
  )
}

function Rig () {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 5, 1 + state.pointer.y / 5, 3],
      0.5,
      delta
    )
  })
}

export default Hero
