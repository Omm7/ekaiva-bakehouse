import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, isOpen, toggleCart, updateQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={toggleCart}>✕</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <small>Add items from the menu to get started</small>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">₹{item.price}</span>
                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal:</span>
              <span className="total-amount">₹{calculateTotal()}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
            <p className="cart-note">Taxes and delivery charges calculated at checkout</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
