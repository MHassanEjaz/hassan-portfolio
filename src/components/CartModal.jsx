import React from 'react';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartModal = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotal, 
    isCartOpen, 
    closeCart,
    getItemCount
  } = useCart();

  if (!isCartOpen) return null;

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

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  return (
    <div className="cart-modal-overlay" onClick={closeCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cart-modal-header">
          <div className="cart-title">
            <FaShoppingCart />
            <h2>Shopping Cart</h2>
            <span className="cart-item-count">({getItemCount()} items)</span>
          </div>
          <button className="close-btn" onClick={closeCart}>
            <FaTimes />
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart className="empty-cart-icon" />
              <p>Your cart is empty</p>
              <button className="continue-shopping-btn" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p className="cart-item-description">{item.description}</p>
                      <div className="cart-item-price">${item.price}</div>
                    </div>

                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <FaMinus />
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <div className="cart-item-total">
                        ${item.price * item.quantity}
                      </div>

                      <button 
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
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

                <div className="cart-actions">
                  <button className="continue-btn" onClick={closeCart}>
                    Continue Shopping
                  </button>
                  <button 
                    className="clear-cart-btn"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;