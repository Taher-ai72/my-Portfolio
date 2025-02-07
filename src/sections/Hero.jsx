import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroTexture from '../components/HeroTexture.jsx';
import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the paragraphs to come from the top and bounce
    timeline
      .fromTo(
        ".hero_tag",
        { y: -150, opacity: 2 },
        {
          y: 0,
          opacity: 2,
          duration: 4,
          ease: "bounce.out",
        }
      )
      .fromTo(
        ".hero_para",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 2,
          duration: 4,
          ease: "bounce.out",
        },
        "-=1" // Start the second animation 1.5 seconds before the first ends
      );
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="  w-full mx-auto flex flex-col sm:mt-36  c-space gap-3 ">
        <p className=" relative hero_tag text-[#f5f7f7]  ">
          Let's Connect Together
        </p>
        <p className=" hero_para sm:text-3xl text-xl font-medium text-black text-center font-generalsans">Creative & 3D Web Developer. I provide my expertise to brands, helping them grow online with 3D graphics and videos.
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,30]} />

            <HeroCamera isMobile={isMobile}>
              <HeroTexture scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 bg-[#8db6b6]" />
        </a>
      </div>
      
      
    </section>
  );
};

export default Hero;