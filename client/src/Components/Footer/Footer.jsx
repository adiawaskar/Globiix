import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="column">
        <h3>Contact Us : </h3>
        <p>Email: example@example.com</p>
        <p>Call Us: +91 4562738</p>
        <p>Head Office: VJTI, Matunga</p>
      </div>
      <div className="column">
        <h3>Services : </h3>
        <ul>
          <li>Trek Packages</li>
          <li>Classic Tent Camping</li>
          <li>Family Tent Camping</li>
          <li>Special Offer Packages</li>
        </ul>
      </div>
      <div className="column">
        <h3>Newsletter : </h3>
        <p>Subscribe for daily travel newsletter:</p>
        <input type="email" placeholder="Your Email" />
      </div>
      
    </div>
  );
}

export default Footer;
