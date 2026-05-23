import React from 'react'
import eyeIcon from '../assets/eye.svg'

const Projects = () => {
  const projects = [
    { name: 'Nexus Dashboard V2', desc: 'Real-time enterprise intelligence platform for global logistics.', tags: ['REACT', 'SUPABASE', 'TAILWIND'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop' },
    { name: 'Aura Fintech App', desc: 'Next-gen wealth management with advanced biometric security.', tags: ['FLUTTER', 'FRAMER MOTION', 'FIREBASE'], img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=450&fit=crop' }
  ]

  const handleViewProject = (projectName) => {
    alert(`Viewing project: ${projectName}`)
  }

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => handleViewProject(project.name)}>
              <div className="project-image">
                <img className="project-img" src={project.img} alt={project.name} />
                <div className="project-overlay">
                  <button className="project-view-btn">
                    <img 
                      src={eyeIcon} 
                      alt="View project"
                      style={{ width: '24px', height: '24px' }}
                    />
                  </button>
                </div>
              </div>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects