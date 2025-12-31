import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content animate-on-scroll">
          <h2 className="section-title">About Dadda Biriyani Cuttack</h2>
          <div className="about-text">
            <p className="about-intro">
              Welcome to Dadda Biriyani Cuttack, your family-friendly restaurant 
              in Cuttack. We serve authentic Biryani, Mutton, Chicken, Prawns, and traditional 
              Indian dishes with uncompromising quality.
            </p>
            <p>
              Our journey began with a simple vision: to create a dining experience that celebrates 
              authentic Indian cuisine with rich flavors and fresh ingredients. 
              Every dish we serve is crafted with passion, ensuring freshness and flavor in every bite.
            </p>
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To provide an unforgettable dining experience through exceptional 
                authentic Biryani and Indian cuisine, outstanding service, and a comfortable family-friendly 
                atmosphere where tradition meets flavor.
              </p>
            </div>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">👨‍🍳</span>
                <div>
                  <h4>Expert Chefs</h4>
                  <p>Our skilled chefs bring years of experience and creativity to every dish</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🍖</span>
                <div>
                  <h4>Authentic Flavors</h4>
                  <p>Traditional Biryani, Mutton, Chicken, and Indian dishes made with fresh ingredients</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">❤️</span>
                <div>
                  <h4>Made with Love</h4>
                  <p>Every meal is prepared with care and attention to detail</p>
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
