import React from 'react';
import '../styles/Reviews.css';
import { reviewsData } from '../data/reviewsData';

const Reviews = () => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="reviews-section">
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from real people</p>
      </div>

      <div className="reviews-scroll-container">
        <div className="reviews-track">
          {/* Duplicate reviews for seamless infinite scroll */}
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div key={`${review.id}-${index}`} className="review-card">
              <div className="review-header">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="review-avatar"
                />
                <div className="review-info">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
