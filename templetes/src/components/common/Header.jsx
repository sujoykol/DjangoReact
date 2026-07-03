import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/img/logo.png';
import { Link } from "react-router-dom";
import { getCart } from "../../services/cartService";

import Search from './HeaderSearch';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to handle the Shopify-style side drawer slide-out cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const noUnderline = { textDecoration: 'none' };
 // const isLoggedIn = !!localStorage.getItem("access_token");

  const loadAuth = () => {
  const token = localStorage.getItem("access_token");

  setIsLoggedIn(!!token);
};

const loadCart = async () => {
  const token = localStorage.getItem(
    "access_token"
  );

  // User is logged out
  if (!token) {
    setCart({
          items: [],
          total: 0,
          coupon: null,
        });

    setCartCount(0);
      return;
  }

  try {
    const data = await getCart();

    setCart(data);

    const count = data.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(count);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  loadCart();
  loadAuth();

  const refreshCart = () => {
    loadCart();
  };

  window.addEventListener(
    "cart-updated",
    refreshCart
  );

  window.addEventListener(
    "auth-updated",
    loadAuth
  );

  return () => {
    window.removeEventListener(
      "cart-updated",
      refreshCart
    );

    window.removeEventListener(
      "auth-updated",
      loadAuth
    );
  };
}, []);


  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Logo Column */}
            <div className="col-md-3">
              <div className="logo">
                <a href="/" style={noUnderline}>
                  <img src={logoImg} alt="Logo" />
                </a>
              </div>
            </div>

            {/* Search Bar Column */}
            <div className="col-md-6">
              <Search />
            </div>

            {/* User Account & Cart Column */}
            <div className="col-md-3">
              <div className="user">
                
                {/* Account Dropdown */}
                <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                  <a href="#" className="dropdown-toggle" onClick={toggleDropdown} style={noUnderline}>
                    My Account
                  </a>
                  <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
  {isLoggedIn ? (
    <>
      <Link to="/account" className="dropdown-item">My Account</Link>
      <Link to="/wishlist" className="dropdown-item">Wishlist</Link>
    </>
  ) : (
    <Link to="/login" className="dropdown-item">Login</Link>
  )}
</div>
                </div>

                {/* 🛒 Shopify-Style Cart Trigger */}
                <div className="cart" onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                  <i className="fa fa-cart-plus"></i>
                  <span>({cartCount})</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🛍️ SHOPIFY-STYLE SIDE DRAWER CART PANEL */}
      {/* Dark Overlay Background */}
      <div 
        className={`cart-drawer-overlay ${isCartOpen ? 'active' : ''}`} 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Actual Slide-Out Drawer Panel */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h3>Your Cart ({cartCount})</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>

        {/* Drawer Body Items Container */}
      {cart?.items?.length > 0 ? (

  cart.items.map((item) => (

    <div
      key={item.id}
      className="cart-item"
    >

      <h6>{item.product_name}</h6>

      <p>
        Qty: {item.quantity}
      </p>

      <p>
        ₹ {item.price}
      </p>

    </div>

  ))

) : (

  <div className="empty-cart-msg">
    <i className="fa fa-shopping-basket"></i>
    <p>Your cart is currently empty.</p>
  </div>

)}

        {/* Drawer Footer Checkout Panel */}
        <div className="cart-drawer-footer">
          <div className="cart-subtotal">
            <span>Subtotal:</span>
            <span>₹ {cart?.total || 0}</span>
          </div>
          <a href="/cart" className="btn btn-secondary w-100 mb-2" style={noUnderline}>View Cart</a>
          <a href="/checkout" className="btn btn-primary w-100" style={noUnderline}>Checkout</a>
        </div>
      </div>
    </>
  );
};

export default Header;