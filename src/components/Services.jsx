import React from 'react'

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      desc: 'High-performance React & Next.js applications built for speed and SEO optimization.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 2v20"/>
          <path d="M2 12h20"/>
          <path d="M7 2c-1.5 2.5-2 6-2 10s.5 7.5 2 10"/>
          <path d="M17 2c1.5 2.5 2 6 2 10s-.5 7.5-2 10"/>
        </svg>
      )
    },
    { 
      title: 'UI/UX Product Design', 
      desc: 'User-centric interfaces that blend aesthetic beauty with functional precision to maximize conversion and engagement.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
          <line x1="15" y1="21" x2="21" y2="15"/>
        </svg>
      )
    },
    { 
      title: 'Mobile Apps', 
      desc: 'Native-feel cross-platform solutions using Flutter and React Native for iOS and Android.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2"/>
          <line x1="8" y1="6" x2="16" y2="6"/>
        </svg>
      )
    },
    { 
      title: 'System Dev', 
      desc: 'Robust backend architectures and microservices built for extreme reliability.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M2 10h20"/>
        </svg>
      )
    },
    { 
      title: 'Database Management', 
      desc: 'Scalable database schema design and performance tuning for high-traffic apps.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      )
    }
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-subtitle">We provide specialized technical services designed to scale your vision into a digital empire.</p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${index === 1 ? 'featured' : ''}`}>
              <div className="service-icon" style={{ color: '#F97316' }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services