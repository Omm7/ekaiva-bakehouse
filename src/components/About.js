import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content animate-on-scroll">
          <h2 className="section-title">About cafe farmhouse</h2>
          <div className="about-text">
            <p className="about-intro">
              Welcome to cafe farmhouse, your aesthetic neighborhood cafe where 
              warmth meets artistry. We craft exceptional coffee, bake fresh pastries daily, and 
              create a cozy space perfect for work, relaxation, or catching up with friends.
            </p>
            <p>
              Our journey began with a simple vision: to create a haven where quality meets comfort. 
              From our specialty coffee to our handcrafted pastries and cakes, everything is made 
              with love and attention to detail, creating moments you'll cherish.
            </p>
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To provide a beautiful, welcoming space where exceptional coffee, freshly baked goods, 
                and warm hospitality come together to create memorable experiences for our community.
              </p>
            </div>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">☕</span>
                <div>
                  <h4>Artisan Coffee</h4>
                  <p>Carefully sourced beans, expertly roasted, and crafted with passion</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🥐</span>
                <div>
                  <h4>Fresh Baked Daily</h4>
                  <p>Pastries, cakes, and treats made fresh every morning with premium ingredients</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">❤️</span>
                <div>
                  <h4>Made with Love</h4>
                  <p>Every item is crafted with care in our cozy, aesthetic space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" 
            alt="Restaurant Interior" 
          />
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">4.4★</span>
              <span className="stat-label">Customer Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70+</span>
              <span className="stat-label">Happy Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Dishes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
