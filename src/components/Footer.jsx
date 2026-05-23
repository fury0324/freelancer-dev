import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">ELITE_DEV</span>
          <span className="footer-divider">/</span>
          <p className="footer-copy">© 2024 Elite Developer Collective. Built for the future.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Github</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer