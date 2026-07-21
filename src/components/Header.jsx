
//       {/* Add CartModal here */}
//       <CartModal />
      
//       {/* Keep LoginModal */}
//       <LoginModal />
//     </>
//   );
// }

// export default Header;



import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import CartModal from './CartModal'; 
import LoginModal from './LoginModal';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount, toggleCart } = useCart(); 
  const { user, openLoginModal } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-links li').forEach(item => {
        item.classList.remove('active');
      });
      const navItem = document.querySelector(`[data-section="${sectionId}"]`);
      if (navItem) {
        navItem.classList.add('active');
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleUserAction = () => {
    if (user) {
      if (window.confirm(`Are you sure you want to logout, ${user.name}?`)) {
        alert('Logout functionality would go here');
      }
    } else {
      openLoginModal();
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`navbar-wrapper ${hidden ? "nav-hidden" : ""}`}>
        {/* Logo */}
        <div
          className="logo clickable"
          onClick={() => setHidden(!hidden)}
          title="Toggle Navbar"
        >
          M Hassan.
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-pill">
          <ul className="nav-links">
            <li 
              className="active" 
              onClick={() => scrollToSection('home')}
              data-section="home"
            >
              Home
            </li>
            <li 
              onClick={() => scrollToSection('about')}
              data-section="about"
            >
              About
            </li>
            <li 
              onClick={() => scrollToSection('services')}
              data-section="services"
            >
              Services
            </li>
            <li 
              onClick={() => scrollToSection('projects')}
              data-section="projects"
            >
              Projects
            </li>
            <li 
              onClick={() => scrollToSection('contact')}
              data-section="contact"
            >
              Contact
            </li>
            
            {/* User Profile/Login */}
            <li className="user-profile-container" onClick={handleUserAction}>
              {user ? (
                <>
                  <FaUser className="user-icon" />
                  <span className="user-name">{user.name?.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  <FaUser className="user-icon" />
                  <span>Login</span>
                </>
              )}
            </li>
            
            {/* Cart Icon */}
            <li className="cart-icon-container" onClick={toggleCart}>
              <FaShoppingCart className="cart-icon" />
              {getItemCount() > 0 && (
                <span className="cart-badge">{getItemCount()}</span>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <FaBars style={{ fontSize: '24px', color: '#333' }} />
        </button>

        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          Contact Me ↗
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-logo">M Hassan.</span>
              <button className="mobile-close-btn" onClick={toggleMobileMenu}>
                <FaTimes />
              </button>
            </div>
            <ul className="mobile-nav-links">
              <li onClick={() => scrollToSection('home')}>Home</li>
              <li onClick={() => scrollToSection('about')}>About</li>
              <li onClick={() => scrollToSection('services')}>Services</li>
              <li onClick={() => scrollToSection('projects')}>Projects</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
              <li onClick={handleUserAction}>
                {user ? `👋 ${user.name?.split(' ')[0]}` : 'Login'}
              </li>
              <li onClick={toggleCart} className="mobile-cart">
                <FaShoppingCart /> Cart ({getItemCount()})
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* CartModal and LoginModal */}
      <CartModal />
      <LoginModal />
    </>
  );
}

export default Header;