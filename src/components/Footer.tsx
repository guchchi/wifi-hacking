
import React from 'react';
import { Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hack-dark border-t border-hack-gray py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} WiFi Hack Lab | Made by ALX-17 | Learn smart. Hack ethical.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#contact" 
              className="flex items-center text-gray-400 hover:text-hack-green transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              Request Tutorials
            </a>
            
            <a 
              href="https://www.youtube.com/@ALX-17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-hack-green transition-colors"
            >
              <Youtube className="h-5 w-5 mr-1" />
              YouTube
            </a>
            
            <a href="#" className="text-gray-400 hover:text-hack-green transition-colors">
              Privacy
            </a>
            
            <a href="#" className="text-gray-400 hover:text-hack-green transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
