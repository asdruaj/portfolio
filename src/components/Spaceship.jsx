import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export function Spaceship (props) {
  const group = useRef()
  const { nodes } = useGLTF('/models/spaceship.glb')
  const arrived = useRef(false)
  const arrivedAt = useRef(0)
  const BASE_ROTATION_X = -Math.PI / 0.292
  const { position, scale, ...rest } = props
  const targetY = props.position?.[1] ?? -0.2

  useEffect(() => {
    if (!group.current) return
    group.current.position.set(
      position?.[0] ?? 0.5,
      10, // start off-screen
      position?.[2] ?? -2.5
    )
    group.current.scale.setScalar(scale || 0.00165)
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    const t = state.clock.elapsedTime

    // Entry animation — damp down from off-screen until close enough
    if (!arrived.current) {
      easing.damp(group.current.position, 'y', targetY, 0.4, delta)
      if (Math.abs(group.current.position.y - targetY) < 0.01) {
        arrived.current = true
        arrivedAt.current = t
      }
    } else {
    // Perfectly smooth loop once arrived
      const elapsed = t - arrivedAt.current
      group.current.position.y = targetY + Math.sin(elapsed * 0.8) * 0.3
    }

    group.current.rotation.z = Math.sin(t * 0.5) * 0.1
    group.current.rotation.x = BASE_ROTATION_X + Math.sin(t * 0.4) * 0.05
    group.current.position.z = (position?.[2] ?? -2.5) + Math.sin(t * 0.4) * 0.05
  })

  return (
    <group
      ref={group}
      {...rest}  // no position or scale in here anymore
      dispose={null}
      rotation={[BASE_ROTATION_X, -0.2, 0]}
    >
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, -2.1, 0]}>
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
