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
          <img src="/logo.png" alt="Num Num Resturant Logo" className="hero-logo-image" />
        </div>
        <h1 className="hero-title">Num Num Resturant</h1>
        <p className="hero-tagline">Where Every Bite is Full of Freshness & Flavour!</p>
        <p className="hero-description">
          Family-friendly restaurant serving authentic Biryani, Mutton, Chicken, and traditional 
          Indian dishes. Experience the rich flavors of authentic cuisine!
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
