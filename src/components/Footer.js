
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
   <div className="container mx-auto flex flex-col md:flex-row gap-8">
  
  {/* Logo and Company Description */}
  <div className="flex-1">
    {/* <img src={logo} alt="B2Y Logo" className="w-24 mb-4" /> */}
    <p className="text-gray-400">
      M2C is a dynamic and innovative IT solutions provider dedicated to empowering businesses with cutting-edge technology. With a passion for excellence and commitment to customer satisfaction, we strive to deliver tailored solutions that drive growth, efficiency, and success.
    </p>
  </div>
  
  {/* Company Links */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold mb-4">Company</h3>
    <ul>
      <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
      <li><a href="#services" className="text-gray-400 hover:text-white">Our Services</a></li>
      <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
    </ul>
  </div>
  
  {/* Support & Contact Information */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold mb-4">Support</h3>
    <p className="text-gray-400">info@m2cinfy.com</p>
    <p className="text-gray-400 mb-4">+91 6666123101</p>
  </div>
  
  {/* Registered Address */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold mb-4">Registered Address</h3>
    {/* <p className="text-gray-400">
      301/302, 3rd Floor, Saket Callipolis,<br />
      Sarjapur - Marathahalli Road,<br />
      Doddakannelli, Bengaluru,<br />
      Karnataka 560035
    </p> */}
  </div>
</div>

      {/* Social Media Icons and Copyright */}
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: '#4267B2' }} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: '#2867B2' }} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: '#FF0000' }} />
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: '#25D366' }} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: '#1DA1F2' }} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#E1306C' }} />
          </a>
        </div>
        
        {/* Copyright Text */}
        <p className="text-gray-400 text-sm text-center">
          © Copyright M2C IT Consulting. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
