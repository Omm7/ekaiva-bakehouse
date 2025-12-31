import React from 'react';
import '../styles/Gallery.css';
import { galleryImages } from '../data/reviewsData';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">A glimpse into our world of culinary excellence</p>
      </div>
      
      <div className="gallery-scroll-container">
        <div className="gallery-track">
          {/* Duplicate images for seamless infinite scroll */}
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <span className="gallery-icon">🍽️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
