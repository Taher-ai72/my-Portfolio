export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: '3D-demo-portfolio website',
      desc: 'This website is a demo portfolio showcasing advanced 3D integration in web design. It features various 3D components, avatars, and models, making it stand out from conventional websites with its immersive and interactive experience.',
      subdesc:
        'This project was created to demonstrate my skills in integrating 3D elements into websites, enhancing their visual appeal and interactivity.',
      href: 'https://portfolio-3-d-demo.vercel.app',
      
      logo: '/assets/taher-10.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/ThreeJs.png',
        },
        
      ],
    },

    {
      title: 'VartualR website ',
      desc: 'I recreated this website by incorporating animations using GSAP and ScrollTrigger, enhancing its visual dynamics and user experience. The improved version adds smooth transitions and interactive elements, making the design more engaging and modern. ',
      subdesc:
        'This project was built to showcase my ability to recreate and enhance websites by adding animations and features that were previously overlooked. ',
      href: 'https://virtual-r-one-dusky.vercel.app/',
      
      logo: '/assets/taher-10.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/Gsap.png',
        },
        
      ],
    },
    {
      title: 'Zentry-clone website',
      desc: 'This website is a visually striking clone of the award-winning Zentry game website. It features high-quality animations, creative visual effects, and immersive video elements, delivering an engaging and dynamic user experience.',
      subdesc:
        'This project was created to highlight my expertise in animation and visual effects, demonstrating my ability to replicate and enhance captivating web experiences.',
      href: 'https://zentry-clone-two-theta.vercel.app',
      
      logo: '/assets/taher-10.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        
      ],
    },
  ]
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };

  export const workExperiences = [
    {
      id: 1,
      name: 'AI',
      pos: 'Have a deep intrest in Generative ai stuffs',
      duration: '',
      title: "i have passion in creating the generative ai  chatbot,integrating ai in website  ,intrest in playing with data   ",
      icon: '/assets/project-logo5.png',
      
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Desing ',
      duration: '',
      title: "I specialize in using Figma to design visually striking components and layouts for websites, ensuring a seamless and aesthetically pleasing user experience. ",
      icon: '/assets/figma.svg',
      
    },
    {
      id: 3,
      name: 'Three Js',
      pos: ' Threejs | Blender',
      duration: '',
      title: "I leverage Three.js to integrate immersive and interactive 3D elements into websites, bringing creativity and innovation to the digital space. also used blender for creating 3D stuffs and grfics  ",
      icon: '/assets/ThreeJs.png',
      
    },
  ];
  