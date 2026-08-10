import React, { useState } from 'react'
import steveImg from '../assets/steve.png'
import sarahImg from '../assets/romyl.png'
import albertImg from '../assets/albert.jpg'
import shamirImg from '../assets/shamir.jpg'
import angeloImg from '../assets/angelo.png'

const Team = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  const teamMembers = [
    {
      name: 'Romyl Magwate',
      role: 'UI/UX Strategy', 
      img: sarahImg,
      techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer', 'Miro'],
      icons: [
        <svg key="palette" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
        </svg>,
        <svg key="token" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>,
        <svg key="design_services" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      ]
    },
    { 
      name: 'Albert Dela Peña', 
      role: 'Backend Dev', 
      img: albertImg,
      techStack: ['PHP', 'JavaScript', 'Laravel', 'Django', 'MySQL', 'Supabase', 'Firebase'],
      icons: [
        <svg key="storage" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>,
        <svg key="hub" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="3" r="2"/>
          <circle cx="12" cy="21" r="2"/>
          <circle cx="4" cy="12" r="2"/>
          <circle cx="20" cy="12" r="2"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="10" x2="3" y2="12"/>
          <line x1="5" y1="14" x2="3" y2="12"/>
          <line x1="19" y1="10" x2="21" y2="12"/>
          <line x1="19" y1="14" x2="21" y2="12"/>
        </svg>,
        <svg key="security" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </svg>
      ]
    },
    {
      name: 'Steven Antonio',
      role: 'Lead Dev',
      img: steveImg,
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Next.js', 'Laravel', 'React.js', 'PHP', 'MySQL', 'Supabase', 'Firebase'],
      icons: [
        <svg key="groups" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>,
        <svg key="code" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>,
        <svg key="terminal" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      ]
    },
    {
      name: 'Shamir Rasul',
      role: 'Frontend Dev', 
      img: shamirImg,
      techStack: ['Tailwind CSS', 'JavaScript', 'PHP', 'React', 'Vite'],
      icons: [
        // Frontend-related icons
        <svg key="code" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>,
        <svg key="layout" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>,
        <svg key="globe" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ]
    },
    {
      name: 'Angelo Depamaylo',
      role: 'Mobile App Dev',
      img: angeloImg,
      techStack: ['Flutter', 'Dart', 'Firebase', 'React Native'],
      icons: [
        // Mobile-related icons
        <svg key="smartphone" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2"/>
        </svg>,
        <svg key="code" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>,
        <svg key="layers" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ]
    }
  ]

  return (
    <section className="section section-alt" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Dimensions</h2>
          <p className="section-subtitle">World-class talent dedicated to your success.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`team-card-container ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => member.techStack && member.techStack.length > 0 && handleCardClick(index)}
            >
              <div className="team-card-inner">
                {/* Front Side */}
                <div className="team-card-front">
                  <img className="team-img" src={member.img} alt={member.name} />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social">
                    {member.icons.map((icon, idx) => (
                      <span key={idx} className="team-icon" style={{ color: '#F97316' }}>
                        {icon}
                      </span>
                    ))}
                  </div>
                  {member.techStack && member.techStack.length > 0 && (
                    <div className="flip-hint">View tech stack →</div>
                  )}
                </div>
                
                {/* Back Side - Tech Stack */}
                {member.techStack && member.techStack.length > 0 && (
                  <div className="team-card-back">
                    <h3 className="tech-stack-title">Tech Stack</h3>
                    <div className="tech-stack-grid">
                      {member.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-stack-item">{tech}</span>
                      ))}
                    </div>
                    <div className="flip-back-hint">Flip back ←</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team