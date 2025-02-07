import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const AboutTexture4 = () => {
    const tex = useTexture("/assets/taher-11.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.2, 2, 0.1]} ref={cyl}>
         <icosahedronGeometry args={[9,0]}/>
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default AboutTexture4