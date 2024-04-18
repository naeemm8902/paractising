import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './navbartop.css';

export default function Navbartop() {
  return (
    <div className="navbartop-container">
      <div className="contact-info">
        <span className="social-icon"><FaFacebookF /></span>
        <span className="social-icon"><FaLinkedinIn /></span>
        <span className="social-icon"><FaInstagram /></span>
      </div>
      <div className="navbartop-text">
        <span className="contact-item"><FaPhone /> +92-3405939713</span>
        <span className="contact-item"><FaEnvelope /> naeemm@mail.com</span>
      </div>
    </div>
  );
}
