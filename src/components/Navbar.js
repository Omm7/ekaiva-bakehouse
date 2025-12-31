import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ cartItemCount, toggleCart, isDarkTheme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect with hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="cafe farmhouse Logo" className="logo-image" />
          <span className="logo-text">cafe farmhouse</span>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('menu')} className="nav-link">Menu</a>
          <a onClick={() => scrollToSection('dine-order')} className="nav-link">Dine-In</a>
          <a onClick={() => scrollToSection('dine-order')} className="nav-link">Order Online</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About Us</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          <button className="cart-btn" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
          <button className="reserve-btn" onClick={() => scrollToSection('dine-order')}>
            Reserve Table
          </button>
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
