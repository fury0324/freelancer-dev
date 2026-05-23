import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import Projects from './components/Projects'
import TechMarquee from './components/TechMarquee'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />
      <TechMarquee />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App