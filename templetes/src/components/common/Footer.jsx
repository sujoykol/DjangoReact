import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import paymentMethod from "../../assets/img/payment-method.png";
import godaddy from "../../assets/img/godaddy.svg";
import norton from "../../assets/img/norton.svg";
import ssl from "../../assets/img/ssl.svg";
import BackToTop from './BackToTop';

const Footer = () => {
  
  return (
    <>
      {/* Footer Start */}
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            {/* Widget 1: Brand Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h1>E Shop</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin rutrum massa. Suspendisse sollicitudin rutrum massa. Vestibulum porttitor, metus sed pretium elementum, nisi nibh sodales quam, non lobortis neque felis id mauris.
                </p>
              </div>
            </div>

            {/* Widget 2: Useful Pages */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Useful Pages</h3>
                <ul>
                  <li><a href="product.html">Product</a></li>
                  <li><a href="product-detail.html">Product Detail</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="login.html">Login & Register</a></li>
                  <li><a href="my-account.html">My Account</a></li>
                </ul>
              </div>
            </div>

            {/* Widget 3: Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Quick Links</h3>
                <ul>
                  <li><a href="product.html">Product</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="login.html">Login & Register</a></li>
                  <li><a href={"account"}>My Account</a></li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                </ul>
              </div>
            </div>

            {/* Widget 4: Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Get in Touch</h3>
                <div className="contact-info">
                  <p><i className="fa fa-map-marker"></i>123 E Shop, Los Angeles, CA, USA</p>
                  <p><i className="fa fa-envelope"></i>email@example.com</p>
                  <p><i className="fa fa-phone"></i>+123-456-7890</p>
                  <div className="social">
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    <a href=""><i className="fa fa-instagram"></i></a>
                    <a href=""><i className="fa fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment and Security Grid */}
          <div className="row payment">
            <div className="col-md-6">
              <div className="payment-method">
                <p>We Accept:</p>
                <img src={paymentMethod} alt="Payment Method" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-security">
                <p>Secured By:</p>
                <img src={godaddy} alt="Payment Security" />
                <img src={norton} alt="Payment Security" />
                <img src={ssl} alt="Payment Security" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Footer Bottom Start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>Copyright &copy; <a href="#">Your Site Name</a>. All Rights Reserved</p>
            </div>

            <div className="col-md-6 template-by">
              <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}

      {/* Back to Top Button */}
     <BackToTop />
    </>
  );
};

export default Footer;