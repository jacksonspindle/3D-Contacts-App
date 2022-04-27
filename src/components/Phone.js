

import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import ContactList from './ContactList'
import data from '../data'
import App from '../App'

export default function Phone({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/phone.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.02, .51, 0]} scale={[1.03 * 1.3, 2.09 * 1.3, -0.1 * 1.3]}>
        <mesh  position={[0.02, -.16, 0]} geometry={nodes.Cube_1.geometry} material={materials.body} />
        <mesh  position={[0.02, -.16, 0]} geometry={nodes.Cube_2.geometry} material={materials.screen} />
        <mesh  position={[0.02, -.16, 0]} geometry={nodes.Cube_3.geometry} material={materials.lock}>
          <Html className="content"  position={[-.009, .001, -1]} transform occlude>
            <div className='phoneScreenContent'>
              <ContactList />
            </div>
          </Html>
        </mesh>
       
      </group>
    </group>
  )
}

useGLTF.preload('/phone.glb')
