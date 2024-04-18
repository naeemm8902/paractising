import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h5 className="footer-heading">Company Name</h5>
          <ul className="footer-list">
            <li className="footer-item"><a href="/" className="footer-link">Careers</a></li>
            <li className="footer-item"><a href="/" className="footer-link">News</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Policies</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Help</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Diversity & Belonging</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Discover</h5>
          <ul className="footer-list">
            <li className="footer-item"><a href="/" className="footer-link">Trust & Safety</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Travel Credit</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Gift Cards</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Airbnb Citizen</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Business Travel</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Things To Do</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Airbnbmag</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Hosting</h5>
          <ul className="footer-list">
            <li className="footer-item"><a href="/" className="footer-link">Why Host</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Hospitality</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Responsible Hosting</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Community Center</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Host an Experience</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Open Homes</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Donations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-social">
            <a href="/" className="footer-social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className="footer-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="footer-social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <ul className="footer-list">
            <li className="footer-item"><a href="/" className="footer-link">Terms</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Privacy</a></li>
            <li className="footer-item"><a href="/" className="footer-link">Site Map</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <i className="fab fa-airbnb"></i>
          <p className="footer-text">&copy; Developer Wazir Naeem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
