import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Intrest from './sections/Intrest';
import Footer from './sections/Footer';

const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Intrest/>
      <Footer/>
    </main>
  )
}

export default App