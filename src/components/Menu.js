import React, { useState, useRef, useEffect } from 'react';
import '../styles/Menu.css';
import { menuData } from '../data/menuData';

const Menu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('recommended');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const categories = [
    { id: 'recommended', name: 'Recommended', icon: '⭐' },
    { id: 'dumBiryani', name: 'Dum Biryani', icon: '🍛' },
    { id: 'mutton', name: 'Mutton', icon: '🍖' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'prawns', name: 'Prawns', icon: '🦐' },
    { id: 'paneer', name: 'Paneer', icon: '🧈' },
    { id: 'mushroom', name: 'Mushroom', icon: '🍄' },
    { id: 'vegetable', name: 'Vegetable', icon: '🥬' },
    { id: 'friedRice', name: 'Fried Rice', icon: '🍚' },
    { id: 'chowmein', name: 'Chowmein', icon: '🍜' },
    { id: 'tandoor', name: 'Tandoor', icon: '🔥' },
    { id: 'paratha', name: 'Paratha', icon: '🫓' },
    { id: 'soup', name: 'Soup', icon: '🥣' },
    { id: 'extras', name: 'Extras', icon: '🥗' }
  ];

  // Filter items based on search query
  const getFilteredItems = () => {
    const items = menuData[activeCategory] || [];
    if (!searchQuery.trim()) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.menu-card')?.offsetWidth || 320;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = container.querySelector('.menu-card')?.offsetWidth || 320;
          const gap = 30;
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [activeCategory]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 });
    }
  }, [activeCategory]);

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Discover our delicious selection of dishes</p>
        </div>

        {/* Search Bar */}
        <div className="menu-search-container animate-on-scroll">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="menu-search-input"
              placeholder="Search dishes by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="search-results-text">
              Found {getFilteredItems().length} dish{getFilteredItems().length !== 1 ? 'es' : ''} matching "{searchQuery}"
            </p>
          )}
        </div>

        <div className="menu-categories animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="carousel-container">
          <button 
            className="carousel-arrow left-arrow"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            ❮
          </button>
          
          <div 
            className="menu-items-wrapper" 
            key={activeCategory}
            ref={scrollContainerRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {getFilteredItems() && getFilteredItems().length > 0 ? (
              <div className="menu-items">
              {getFilteredItems().map((item, index) => (
                <div 
                  key={item.id} 
                  className="menu-card"
                >
                  {item.tag && <span className="menu-tag">{item.tag}</span>}
                  <div className="menu-image-container">
                    <img src={item.image} alt={item.name} className="menu-image" />
                  </div>
                  <div className="menu-content">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-footer">
                      <span className="menu-price">
                        {item.halfPrice ? (
                          <>
                            <span className="half-price">Half: ₹{item.halfPrice}</span>
                            <span className="full-price">Full: ₹{item.price}</span>
                          </>
                        ) : (
                          <>₹{item.price}</>
                        )}
                      </span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={(e) => {
                          addToCart(item);
                          e.target.textContent = 'Added! ✓';
                          setTimeout(() => {
                            e.target.textContent = 'Add to Cart';
                          }, 1000);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            ) : (
              <div className="no-items">
                <p>No items available in this category.</p>
              </div>
            )}
          </div>
          
          <button 
            className="carousel-arrow right-arrow"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
