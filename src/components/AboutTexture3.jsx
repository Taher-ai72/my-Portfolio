import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const AboutTexture3 = () => {
    const tex = useTexture("/assets/taher-8.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.5, 2.5, 0.3]} ref={cyl}>
         <boxGeometry args={[10,10,10 ,2, 2,2]} />
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default AboutTexture3