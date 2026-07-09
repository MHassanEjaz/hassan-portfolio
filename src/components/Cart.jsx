import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './App.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  const handleQuantityChange = (id, change) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(id, newQuantity);
      } else {
        removeFromCart(id);
      }
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <FaShoppingCart className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Add some services to get started</p>
          <Link to="/services" className="back-to-services">
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="item-price">${item.price}</div>
                </div>

                <div className="item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    <FaPlus />
                  </button>
                </div>

                <div className="item-total">
                  ${item.price * item.quantity}
                </div>

                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getTotal()}</span>
            </div>
            
            <div className="summary-row">
              <span>Service Fee</span>
              <span>$0.00</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${getTotal()}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <Link to="/services" className="continue-shopping">
              <FaArrowLeft /> Continue Shopping
            </Link>

            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;