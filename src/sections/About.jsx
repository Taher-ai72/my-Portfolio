import { useEffect,useRef } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import gsap from "gsap";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { calculateSizes } from '../constants/index.js';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from '../components/Button.jsx';
import AboutTexture1 from '../components/AboutTexture1.jsx';
import AboutTexture2 from '../components/AboutTexture2.jsx';
import AboutTexture3 from '../components/AboutTexture3.jsx';
import AboutTexture4 from '../components/ABoutTexture4.jsx';
import AboutTexture5 from '../components/AboutTexture5.jsx';

const About = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
    const gridRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const gridItems = gsap.utils.toArray(".grid-container"); // Select all grid containers
      gsap.set(gridItems, { opacity: 0, y: 50 }); // Initial state
  
      gridItems.forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item, // Trigger animation on each grid container
            start: "top 80%", // Animation starts when the grid container enters the viewport
            toggleActions: "play none none none", // Play once
          },
          delay: index * 0.2, // Add delay for staggered effect
        });
      });
    }, []);
  return (
    <section className="c-space my-20" id="about" ref={gridRef}>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <Canvas className="w-full h-full" >
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,1000]} />

            <HeroCamera isMobile={isMobile}>
              <AboutTexture1 scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

            <div>
              <p className="grid-headtext">Hi, I’m Taher Lodgewala </p>
              <p className="grid-subtext">
                , I have honed my skills in both frontend  dev, creating 3D
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,1000]} />

            <HeroCamera isMobile={isMobile}>
              <AboutTexture2 scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              i speacialize in pyhton,js,html,css,react and focus on creating the 3D envoriment in websites 
             
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,1000]} />

            <HeroCamera isMobile={isMobile}>
              <AboutTexture3 scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
            </div>
            <div>
              <p className="grid-headtext">I Work Remortly Across All TimeZones</p>
              <p className="grid-subtext">I'm worked in Indore India, with Rmortly work Available.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,1000]} />

            <HeroCamera isMobile={isMobile}>
              <AboutTexture4 scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

            <div>
              <p className="grid-headtext">My passion for creating 3D stuffs</p>
              <p className="grid-subtext">
                I  love creating the 3D website and animation and buiding thing realistic its just not my profession - it is my passion
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[10,1000]} />

            <HeroCamera isMobile={isMobile}>
              <AboutTexture5 scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

            <div className="space-y-2">
              <p className="grid-subtext text-center">lets Connect and create  realistic 3D expirence in websites and Many More !</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;