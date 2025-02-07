import React from 'react'
import { myProjects } from '../constants/index'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import { Suspense,useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import ProjectTexture from '../components/ProjectTexture.jsx'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projectCount = myProjects.length;
const Project = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

    
  return (
    <section className="c-space my-20  overflow-hidden">
    <p className="head-text">My Selected Work</p>

    <div className="grid lg:grid-cols-2 grid-cols-1 mt-1 gap-5 w-full">
      <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
        <div className="absolute top-0 right-0">
          <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
        </div>

        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
          <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
        </div>

        <div className="flex flex-col gap-5 text-white-600 my-5">
          <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

          <p className="animatedText">{currentProject.desc}</p>
          <p className="animatedText">{currentProject.subdesc}</p>
        </div>

        <div className="  flex items-center justify-between flex-wrap gap-5 ">
          <div className="flex items-center gap-3">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="tech-logo">
                <img src={tag.path} alt={tag.name} />
              </div>
            ))}
          </div>

          <a
            className="flex items-center gap-2 cursor-pointer text-white-600"
            href={currentProject.href}
            target="_blank"
            rel="noreferrer">
            <p>Check Live Site</p>
            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
          </a>
        </div>

        <div className="flex justify-between items-center ">
          <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
            <img src="/assets/left-arrow.png" alt="left arrow" />
          </button>

          <button className="arrow-btn" onClick={() => handleNavigation('next')}>
            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

<div className=' border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
<Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[3,1000]} />

            <HeroCamera isMobile={isMobile}>
              <ProjectTexture scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

</div>




        </div>
    </section>
  )
}

export default Project