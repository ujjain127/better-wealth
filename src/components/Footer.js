import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Better Wealth</h4>
            <p>Empowering intelligent wealth growth through personalized investment guidance.</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><Link to="/portfolio">Portfolio Management</Link></li>
              <li><Link to="/investors">Investor Matching</Link></li>
              <li><Link to="/planning">Financial Planning</Link></li>
              <li><Link to="/insights">Analytics & Insights</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>info@betterwealth.com</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Better Wealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
