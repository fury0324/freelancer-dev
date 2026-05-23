import React, { useState } from 'react'
import mailIcon from '../assets/mail-open.svg'
import locationIcon from '../assets/map-pin-search.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! Our team will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Application',
      message: ''
    })
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-info">
            <h2 className="section-title">Ready to Build the Future?</h2>
            <p className="contact-text">
              Stop dreaming and start shipping. Our team is ready to transform your complex requirements into a streamlined reality.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <img 
                    src={mailIcon} 
                    alt="Email icon"
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">hello@elitedev.collective</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <img 
                    src={locationIcon} 
                    alt="Location icon"
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
                <div>
                  <div className="contact-label">Zamboanga City</div>
                  <div className="contact-value">Remote-First / SF / SG</div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Project Type</label>
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Custom SaaS</option>
                <option>Design Only</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-full neon-glow-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact