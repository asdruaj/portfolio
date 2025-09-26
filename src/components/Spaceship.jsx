import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring } from 'motion/react'
import { useFrame } from '@react-three/fiber'

export function Spaceship (props) {
  const group = useRef()
  const { nodes, animations } = useGLTF('/models/spaceship.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  const yPosition = useMotionValue(10)
  const ySpring = useSpring(yPosition, { damping: 30 })

  useEffect(() => {
    ySpring.set(-0.8)
  }, [ySpring])

  useFrame(() => {
    group.current.position.y = ySpring.get()
  })

  return (
    <group
      ref={group} {...props} dispose={null} rotation={[-Math.PI / 0.29, -0.2, 2.2]} scale={props.scale || 0.0016} position={props.position || [1, 100, -2]}
    >
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='696729a048454f61a4438ed9262cac38fbx'

          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group
                  name='Radial_Empty'
                  position={[-2701.9419, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name='Armature001'
                  position={[-2053.3245, -763.7665, -298.6227]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name='Object_6'>
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
                <group name='Radial_Empty004' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/spaceship.glb')
