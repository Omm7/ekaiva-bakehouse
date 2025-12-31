import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <div className="hero-logo">
          <img src="/logo.png" alt="cafe farmhouse Logo" className="hero-logo-image" />
        </div>
        <h1 className="hero-title">cafe farmhouse</h1>
        <p className="hero-tagline">Where Every Sip & Bite Feels Like Home</p>
        <p className="hero-description">
          A cozy aesthetic cafe serving artisan coffee, freshly baked pastries, handcrafted cakes, 
          and delightful brunch options. Your perfect spot for moments that matter.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={() => scrollToSection('menu')}>
            View Menu
          </button>
          <button className="hero-btn secondary" onClick={() => scrollToSection('dine-order')}>
            Order Now
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
