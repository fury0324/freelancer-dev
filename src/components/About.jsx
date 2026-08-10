import React from 'react'

const About = () => {
  const stats = [
    { value: '10+', label: 'PROJECTS COMPLETED' },
    { value: '5', label: 'TEAM MEMBERS' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
    { value: '24/7', label: 'SUPPORT AVAILABLE' }
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-card glass-card">
          <div className="about-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">We Turn Ideas into Digital Reality.</h2>
            <p className="section-text">
              We are a dedicated team of developers passionate about creating quality 
              web solutions that help students and businesses succeed. Our focus is on 
              delivering affordable, reliable, and well-crafted projects that meet your 
              specific needs. Let us help you build your next project.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About