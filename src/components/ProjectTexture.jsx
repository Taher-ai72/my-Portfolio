import React from 'react'
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';


const ProjectTexture = () => {
    const tex = useTexture("/assets/taher-21.png");
      const cyl = useRef(null);
      useFrame((state, delta) => {
          cyl.current.rotation.y += delta;
        });
  return (
   <mesh rotation={[0.2, 2, 0.1]} ref={cyl}>
         <boxGeometry args={[14,10,14 ,2, 2,2]}/>
         <meshStandardMaterial map={tex}  side={THREE.DoubleSide} />
       </mesh>
  )
}

export default ProjectTexture