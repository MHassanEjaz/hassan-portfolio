// import React, { useState } from "react";
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { useCart } from './CartContext';
// import { useAuth } from './AuthContext';
// import CartModal from './CartModal'; 
// import LoginModal from './LoginModal';

// function Header() {
//   const [hidden, setHidden] = useState(false);
//   const { getItemCount, toggleCart } = useCart(); 
//   const { user, openLoginModal } = useAuth();

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       document.querySelectorAll('.nav-links li').forEach(item => {
//         item.classList.remove('active');
//       });
//       const navItem = document.querySelector(`[data-section="${sectionId}"]`);
//       if (navItem) {
//         navItem.classList.add('active');
//       }
//     }
//   };

//   const handleUserAction = () => {
//     if (user) {
//       if (window.confirm(`Are you sure you want to logout, ${user.name}?`)) {
//         alert('Logout functionality would go here');
//       }
//     } else {
//       openLoginModal();
//     }
//   };

//   return (
//     <>
//       <header className={`navbar-wrapper ${hidden ? "nav-hidden" : ""}`}>
//         {/* Clickable Logo */}
//         <div
//           className="logo clickable"
//           onClick={() => setHidden(!hidden)}
//           title="Toggle Navbar"
//         >
//           M Hassan.
//         </div>

//         <nav className="navbar-pill">
//           <ul className="nav-links">
//             <li 
//               className="active" 
//               onClick={() => scrollToSection('home')}
//               data-section="home"
//             >
//               Home
//             </li>
//             <li 
//               onClick={() => scrollToSection('about')}
//               data-section="about"
//             >
//               About
//             </li>
//             <li 
//               onClick={() => scrollToSection('services')}
//               data-section="services"
//             >
//               Services
//             </li>
//             <li 
//               onClick={() => scrollToSection('prayer')}
//               data-section="prayer"
//             >
//               {/* Prayer Times */}
//               Projects
//             </li>

            
            
//             {/* User Profile/Login */}
//             <li className="user-profile-container" onClick={handleUserAction}>
//               {user ? (
//                 <>
//                   <FaUser className="user-icon" />
//                   <span className="user-name">{user.name?.split(' ')[0]}</span>
//                 </>
//               ) : (
//                 <>
//                   <FaUser className="user-icon" />
//                   <span>Login</span>
//                 </>
//               )}
//             </li>
            
//             {/* Cart Icon - Now uses toggleCart */}
//             <li className="cart-icon-container" onClick={toggleCart}>
//               <FaShoppingCart className="cart-icon" />
//               {getItemCount() > 0 && (
//                 <span className="cart-badge">{getItemCount()}</span>
//               )}
//             </li>
//           </ul>
//         </nav>

//         <button className="contact-btn" onClick={() => scrollToSection('services')}>
//           Get Started ↗
//         </button>
//       </header>

//       {/* Add CartModal here */}
//       <CartModal />
      
//       {/* Keep LoginModal */}
//       <LoginModal />
//     </>
//   );
// }

// export default Header;


import React, { useState } from "react";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import CartModal from './CartModal'; 
import LoginModal from './LoginModal';

function Header() {
  const [hidden, setHidden] = useState(false);
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
  };

  const handleUserAction = () => {
    if (user) {
      if (window.confirm(`Are you sure you want to logout, ${user.name}?`)) {
        alert('Logout functionality would go here');
      }
    } else {
      openLoginModal();
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${hidden ? "nav-hidden" : ""}`}>
        {/* Clickable Logo */}
        <div
          className="logo clickable"
          onClick={() => setHidden(!hidden)}
          title="Toggle Navbar"
        >
          M Hassan.
        </div>

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
            
            {/* Cart Icon - Now uses toggleCart */}
            <li className="cart-icon-container" onClick={toggleCart}>
              <FaShoppingCart className="cart-icon" />
              {getItemCount() > 0 && (
                <span className="cart-badge">{getItemCount()}</span>
              )}
            </li>
          </ul>
        </nav>

        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          Get Started ↗
        </button>
      </header>

      {/* Add CartModal here */}
      <CartModal />
      
      {/* Keep LoginModal */}
      <LoginModal />
    </>
  );
}

export default Header;


