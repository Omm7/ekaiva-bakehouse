import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Pure Veg',
      description: '100% vegetarian dishes made with pure ingredients'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Friendly',
      description: 'Comfortable ambience perfect for family dining'
    },
    {
      icon: '🚚',
      title: 'Delivery Available',
      description: 'Quick and reliable delivery to your doorstep'
    },
    {
      icon: '🍽️',
      title: 'Multi-Cuisine Veg',
      description: 'North Indian, Chinese & Sichuan specialties'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
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
