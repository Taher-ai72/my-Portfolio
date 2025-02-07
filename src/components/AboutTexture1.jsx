import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const AboutTexture1 = () => {
    const tex = useTexture("/assets/taher-10.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.2, 2, 0.1]} ref={cyl}>
         <circleGeometry args={[12, 80, 0, 6.28318]}/>
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default AboutTexture1