import React, { useState } from 'react';

const Navbar = () => {
  // State to handle opening and closing the mobile navigation menu smoothly
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper style to keep Vite text underlines stripped from navigation links
  const noUnderline = { textDecoration: 'none' };

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          
          {/* Brand/Menu Title */}
          <a href="#" className="navbar-brand" style={noUnderline}>MENU</a>
          
          {/* Mobile Hamburger Toggler Button */}
          <button 
            type="button" 
            className="navbar-toggler" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar links layout wrapper */}
          <div 
            className={`collapse navbar-collapse justify-content-between ${isMenuOpen ? 'show' : ''}`} 
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto">
              <a href="/" className="nav-item nav-link active" style={noUnderline}>Home</a>
              <a href="products" className="nav-item nav-link" style={noUnderline}>Products</a>
              <a href="cart" className="nav-item nav-link" style={noUnderline}>Product Cart</a>
              <a href="checkout" className="nav-item nav-link" style={noUnderline}>Checkout</a>
              <a href="contact" className="nav-item nav-link" style={noUnderline}>Contact Us</a>
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;