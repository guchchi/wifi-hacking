
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hack-dark border-t border-hack-gray py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} WiFi Hack Lab | Educational Purposes Only
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-hack-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-hack-green transition-colors">
              Terms of Use
            </a>
            <a href="#contact" className="text-gray-400 hover:text-hack-green transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
