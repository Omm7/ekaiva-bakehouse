import React from 'react';
import '../styles/DineOrder.css';

const DineOrder = () => {
  return (
    <section id="dine-order" className="dine-order-section">
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">Choose Your Experience</h2>
        <p className="section-subtitle">Dine with us or enjoy at home</p>
      </div>

      <div className="dine-order-container">
        <div className="dine-order-card animate-on-scroll">
          <div className="card-icon">🪑</div>
          <h3 className="card-title">Dine-In</h3>
          <p className="card-description">
            Experience our comfortable family-friendly ambience with pure veg dining. 
            Reserve your table for an unforgettable pure vegetarian experience.
          </p>
          <ul className="card-features">
            <li>✓ Family Seating</li>
            <li>✓ Comfortable Ambience</li>
            <li>✓ Pure Veg Menu</li>
            <li>✓ Great Service</li>
          </ul>
          <button className="card-btn">Reserve Table</button>
        </div>

        <div className="dine-order-card animate-on-scroll">
          <div className="card-icon">🚀</div>
          <h3 className="card-title">Order Online</h3>
          <p className="card-description">
            Get your favorite dishes delivered hot and fresh to your doorstep. 
            Quick, convenient, and delicious!
          </p>
          <ul className="card-features">
            <li>✓ Fast Delivery</li>
            <li>✓ Contactless Delivery</li>
            <li>✓ Track Your Order</li>
            <li>✓ Special Packaging</li>
          </ul>
          <button className="card-btn">Order Now</button>
        </div>
      </div>

      <div className="timing-info animate-on-scroll">
        <div className="timing-card">
          <h4>🕐 Opening Hours</h4>
          <p>Sunday - Saturday: 11:30 AM - 10:30 PM</p>
          <p>Open All Days | Cost for Two: ₹200 - ₹400</p>
        </div>
      </div>
    </section>
  );
};

export default DineOrder;
