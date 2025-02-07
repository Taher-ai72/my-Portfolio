import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';


const AboutTexture5 = () => {
    const tex = useTexture("/assets/taher-20.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.2, 2, 0.1]} ref={cyl}>
         <planeGeometry args={[25,20,1,1]}/>
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default AboutTexture5