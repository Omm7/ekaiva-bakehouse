import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="cafe farmhouse Logo" className="footer-logo-image" />
            <span className="logo-text">cafe farmhouse</span>
          </div>
          <p className="footer-description">
            Your cozy neighborhood cafe serving artisan coffee, fresh pastries, and delightful treats. 
            Where every moment becomes a memory.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Location">📍</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#dine-order">Reservations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Opening Hours</h3>
          <ul className="footer-info">
            <li>Sunday - Saturday</li>
            <li>11:30 AM - 10:30 PM</li>
            <li style={{ marginTop: '10px' }}>Open All Days</li>
            <li>No Holidays</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-info">
            <li>📍 Golden Plaza, Station Road</li>
            <li>   Market Area, Cuttack - 753012</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@dellyybellyy.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Dada Biriyani. All rights reserved.</p>
        <p className="footer-credit">Crafted with ❤️ for food lovers</p>
      </div>
    </footer>
  );
};

export default Footer;
