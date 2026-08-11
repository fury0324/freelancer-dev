import React, { useState } from 'react'
import Swal from 'sweetalert2'
import checkCircleIcon from '../assets/circle-check.svg'

const Pricing = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const pricingPlans = [
    {
      name: 'Capstone Project',
      subtitle: 'for students',
      features: [
        'Full Capstone Project Build',
        'Complete Documentation',
        'Source Code Included',
        'Basic UI/UX Design',
        'Database Integration',
        '1 Month Basic Support'
      ], 
      popular: false 
    },
    {
      name: 'Corporate Project',
      subtitle: 'for Small Business',
      features: [
        'Full Business System Build',
        'Custom UI/UX Design',
        'Database Architecture',
        'API Integration',
        '3 Months Technical Support',
        'Deployment Assistance'
      ], 
      popular: true 
    },
    {
      name: 'System Rebuild',
      subtitle: 'only for business',
      features: [
        'Complete System Audit',
        'Code Refactoring & Optimization',
        'UI/UX Redesign',
        'Performance Enhancement',
        'Security Upgrade',
        '6 Months Premium Support'
      ], 
      popular: false 
    }
  ]

  const showSuccessAlert = (planName, userName) => {
    Swal.fire({
      title: 'Inquiry Submitted!',
      html: `
        <div style="text-align: center;">
          <p style="margin-bottom: 8px;">Thank you, <strong>${userName}</strong>!</p>
          <p>Your inquiry for <strong style="color: #F97316;">${planName}</strong> has been received.</p>
          <p style="margin-top: 16px; font-size: 13px; opacity: 0.8;">Our team will contact you within 24 hours.</p>
        </div>
      `,
      icon: 'success',
      confirmButtonText: 'Close',
      confirmButtonColor: '#F97316',
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: true,
      allowOutsideClick: true
    })
  }

  const showErrorAlert = () => {
    Swal.fire({
      title: 'Something went wrong',
      html: '<p>Failed to send your inquiry. Please try again or contact us directly.</p>',
      icon: 'error',
      confirmButtonText: 'Try Again',
      confirmButtonColor: '#F97316'
    })
  }

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName)
    setShowModal(true)
    setName('')
    setEmail('')
  }

  const handleSubmitInquiry = async (e) => {
    e.preventDefault()
    
    if (!name || !email) {
      Swal.fire({
        title: 'Missing Information',
        html: '<p>Please enter your name and email address to continue.</p>',
        icon: 'warning',
        confirmButtonText: 'Got it',
        confirmButtonColor: '#F97316'
      })
      return
    }

    setIsSubmitting(true)

    Swal.fire({
      title: 'Sending Inquiry...',
      html: '<div style="margin-top: 16px;">Please wait while we process your request.</div>',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
      }
    })

    try {
      // Web3Forms submission (same access_key sa Contact)
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '3e10fd8e-b7b6-4b36-b555-e37dde59f3f1')
      formDataToSend.append('name', name)
      formDataToSend.append('email', email)
      formDataToSend.append('message', `
Plan: ${selectedPlan}

New inquiry for ${selectedPlan} plan from ${name} (${email})
      `)
      formDataToSend.append('subject', `New Inquiry: ${selectedPlan} Plan`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        Swal.close()
        showSuccessAlert(selectedPlan, name)
        setShowModal(false)
        setName('')
        setEmail('')
      } else {
        Swal.close()
        showErrorAlert()
      }
    } catch (error) {
      console.error('Error sending email:', error)
      Swal.close()
      showErrorAlert()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Investment Tiers</h2>
            <p className="section-subtitle">Custom quotes tailored to your project.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-subtitle">{plan.subtitle}</div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <img 
                        src={checkCircleIcon} 
                        alt="Check icon"
                        style={{ width: '20px', height: '20px' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`pricing-btn ${plan.popular ? 'pricing-btn-primary' : 'pricing-btn-outline'}`}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showModal && (
        <div className="inquiry-modal-overlay">
          <div className="inquiry-modal glass-card">
            <button className="inquiry-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h3 className="inquiry-modal-title">Request for {selectedPlan}</h3>
            <p className="inquiry-modal-subtitle">Please provide your details so we can contact you.</p>
            
            <form onSubmit={handleSubmitInquiry} className="inquiry-form">
              <div className="inquiry-form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., steve strange"
                  required
                />
              </div>
              
              <div className="inquiry-form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., stevestrange@email.com"
                  required
                />
              </div>
              
              <div className="inquiry-form-group">
                <label>Selected Plan</label>
                <input 
                  type="text" 
                  value={selectedPlan}
                  disabled
                  className="disabled-input"
                  readOnly
                />
              </div>
              
              <button type="submit" className="inquiry-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Pricing