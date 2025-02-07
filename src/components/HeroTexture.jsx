import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HeroTexture = () => {
  const tex = useTexture("/assets/taher-18.png");
  const cyl = useRef(null);
  const [cylinderSize, setCylinderSize] = useState([1.2, 1.2, 1.2]);

  // Function to update args based on screen size
  const updateCylinderSize = () => {
    if (window.innerWidth >= 1024) {
      // Desktop
      setCylinderSize([8, 8, 8]); // Bigger model
    } else if (window.innerWidth >= 768) {
      // Tablet
      setCylinderSize([6, 6,6]); // Medium model
    } else {
      // Mobile
      setCylinderSize([4.5, 4.5, 4.5]); // Smaller model
    }
  };

  // Detect screen resize
  useEffect(() => {
    updateCylinderSize();
    window.addEventListener("resize", updateCylinderSize);
    return () => window.removeEventListener("resize", updateCylinderSize);
  }, []);

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <mesh rotation={[0, 1.4, 0.2]} ref={cyl}>
      <cylinderGeometry args={[...cylinderSize, 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};

export default HeroTexture;