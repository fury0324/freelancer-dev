import React from 'react'
import eyeIcon from '../assets/eye.svg'
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'

const Projects = () => {
  const projects = [
    { 
      name: 'DTR Monitoring with Geolocation', 
      desc: 'A comprehensive time tracking system with real-time location monitoring. Perfect for remote workforce management and attendance tracking.', 
      tags: ['HTML', 'TAILWIND CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'], 
      img: project1Img,
      githubUrl: 'https://github.com/fury0324/dtrmonitoringwithGeolaocation/tree/main/dtr-web-app'
    },
    { 
      name: 'Employee Academy', 
      desc: 'An employee learning and development platform designed for corporate training, skill tracking, and career progression management.', 
      tags: ['HTML', 'TAILWIND CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'], 
      img: project2Img,
      githubUrl: 'https://github.com/fury0324/employee-academy'  // Palitan ng actual GitHub URL
    }
  ]

  const handleViewProject = (githubUrl, projectName) => {
    window.open(githubUrl, '_blank')
  }

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              onClick={() => handleViewProject(project.githubUrl, project.name)}
              style={{ cursor: 'pointer' }}
            >
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