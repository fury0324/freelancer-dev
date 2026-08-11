import React, { useState, useEffect } from 'react'
import moonIcon from '../assets/moon.svg'
import sunIcon from '../assets/sun.svg'
import whiteLogo from '../assets/white-icon.png'
import blackLogo from '../assets/black-icon-orange.png'

const Navbar = ({ scrolled }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  // Function para sa Hire Us button - mag-scroll sa Contact section
  const handleHireUs = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('contact')
      setIsMobileMenuOpen(false)
      
      setTimeout(() => {
        const nameInput = document.querySelector('#contact input[type="text"]')
        if (nameInput) nameInput.focus()
      }, 500)
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    const html = document.documentElement
    
    if (newIsDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  // I-set ang light mode agad pag-load ng page
  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('dark')
    setIsDark(false)
    setIsInitialized(true)
  }, [])

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPos = window.scrollY + 200
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Para maiwasan ang flash ng light mode bago mag-load ang dark mode
  if (!isInitialized) {
    return null
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-area">
            <img 
              alt="ELITE_DEV Logo" 
              className="logo-img logo-large" 
              src={isDark ? whiteLogo : blackLogo}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              <img 
                src={isDark ? sunIcon : moonIcon} 
                alt={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                style={{ width: '24px', height: '24px' }}
              />
            </button>
            <button className="hire-btn" onClick={handleHireUs}>Hire Us</button>
            
            {/* Hamburger Menu Button - Mobile Only */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar