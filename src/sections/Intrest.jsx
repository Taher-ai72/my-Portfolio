import React from 'react'

import { workExperiences } from '../constants/index.js';

import Globe from 'react-globe.gl';



const Intrest = () => {
  

 
  return (
    <section className='c-space my-20 overflow-hidden' >
        <div className='w-full text-white-600'>
            <h3 className='head-text'> My Work intrest </h3>
            <div className=' work-container'>
        <div className='work-canvas flex
        items-center justify-center '>
            <Globe
            height={500}
            width={700}
            backgroundColor= 'rgba(0, 0, 0, 0)'
            polygonCapColor={'rgba(200, 0, 0, 0.6)'}
            polygonSideColor={'rgba(0, 100, 0, 0.05)'}
            globeImageUrl='/assets/taher-16.png'
            point
            
             />
            
        
        </div>
        <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intrest