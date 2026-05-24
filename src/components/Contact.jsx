import React, { useState } from 'react'
import Swal from 'sweetalert2'
import mailIcon from '../assets/mail-open.svg'
import locationIcon from '../assets/map-pin-search.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill out all fields.',
        icon: 'warning',
        confirmButtonColor: '#06b6d4'
      })
      return
    }

    setIsSubmitting(true)

    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
      }
    })

    try {
      // Gamit ang Web3Forms (gaya ng example mo)
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '3e10fd8e-b7b6-4b36-b555-e37dde59f3f1')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('message', `
Project Type: ${formData.projectType}

Message:
${formData.message}
      `)
      formDataToSend.append('subject', `New Contact: ${formData.projectType} from ${formData.name}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        Swal.fire({
          title: 'Message Sent!',
          html: `
            <div style="text-align: center;">
              <p>Thank you, <strong>${formData.name}</strong>!</p>
              <p>Your message has been received.</p>
              <p>We will contact you within 24 hours.</p>
            </div>
          `,
          icon: 'success',
          confirmButtonColor: '#06b6d4',
          timer: 5000
        })
        
        setFormData({
          name: '',
          email: '',
          projectType: 'Web Application',
          message: ''
        })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#06b6d4'
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  <div className="contact-value">upstaff7@gmail.com</div>
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
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Zamboanga City, Philippines</div>
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
                  placeholder="Steve" 
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
                  placeholder="steve@example.com" 
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
                <option>Design Only</option>
                <option>Capstone Project</option>
                <option>System Rebuild</option>
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
            <button type="submit" className="btn-primary btn-full neon-glow-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact