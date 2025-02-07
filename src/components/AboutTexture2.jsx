import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const AboutTexture2 = () => {
    const tex = useTexture("/assets/taher-9.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.5, 2.5, 0.3]} ref={cyl}>
         <cylinderGeometry args={[9, 9, 9, 60, 60, true]}/>
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default AboutTexture2