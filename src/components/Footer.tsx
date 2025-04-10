
import React from 'react';
import { Youtube, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hack-dark border-t border-hack-gray py-8">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="text-xl font-mono text-hack-green mb-2">
              Made with ❤️ by ALX-17
            </p>
            <p className="text-gray-400">
              © {currentYear} WiFi Hack Guide | Learn smart. Hack ethical.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-6">
            <a 
              href="https://www.youtube.com/@ALX-17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-hack-green transition-colors"
            >
              <Youtube className="h-5 w-5 mr-1" />
              ALX-17 YouTube
            </a>
            
            <a 
              href="#" 
              className="flex items-center text-gray-400 hover:text-hack-green transition-colors"
            >
              <Github className="h-5 w-5 mr-1" />
              Github
            </a>
            
            <a 
              href="#" 
              className="flex items-center text-gray-400 hover:text-hack-green transition-colors"
            >
              <Twitter className="h-5 w-5 mr-1" />
              Twitter
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            This website is for educational purposes only. Always hack responsibly.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
