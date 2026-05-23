import React from 'react'

const Hero = () => {
  const handleStartProject = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="hero" id="home">
      <div className="hero-blob-1 animate-blob"></div>
      <div className="hero-blob-2 animate-blob animation-delay-2000"></div>
      <div className="hero-blob-3 animate-blob animation-delay-4000"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Available for New Projects</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-light">Dimension Freelanc</span><br />
          <span className="hero-title-gradient">Developer</span>
        </h1>
        <p className="hero-desc">
          We craft high-performance digital ecosystems for the next generation of industry leaders. 
          Precision-engineered code meets futuristic design.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary neon-glow-primary" onClick={handleStartProject}>
            Start a Project
          </button>
          <button className="btn-secondary" onClick={handleViewWork}>
            View Our Work
          </button>
        </div>
      </div>
    </header>
  )
}

export default Hero