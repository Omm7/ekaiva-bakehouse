import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: '☕',
      title: 'Artisan Coffee',
      description: 'Specialty coffee expertly crafted by our baristas'
    },
    {
      icon: '🥐',
      title: 'Fresh Baked Daily',
      description: 'Pastries and breads made fresh every morning'
    },
    {
      icon: '✨',
      title: 'Cozy Aesthetic',
      description: 'Perfect ambience for work, study, or relaxation'
    },
    {
      icon: '🎂',
      title: 'Handcrafted Cakes',
      description: 'Beautiful custom cakes for every celebration'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card animate-on-scroll"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
