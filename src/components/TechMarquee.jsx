import React from 'react'

const TechMarquee = () => {
  const techStack = [
    { name: 'REACT', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'SUPABASE', iconUrl: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    { name: 'TAILWIND', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'FIREBASE', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'LARAVEL', iconUrl: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'FLUTTER', iconUrl: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'MYSQL', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' }
  ]

  return (
    <div className="tech-marquee">
      <div className="marquee-track animate-marquee">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="tech-item">
            <img 
              src={tech.iconUrl} 
              alt={`${tech.name} icon`}
              style={{ 
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(0.7)'
              }}
            />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee