// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
      </div>
      <div className="footer-copyright">
        © 2023 My App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
