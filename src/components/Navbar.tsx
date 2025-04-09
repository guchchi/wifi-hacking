
import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-hack-dark sticky top-0 z-50 border-b border-hack-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Terminal className="h-8 w-8 text-hack-green" />
                <span className="ml-2 text-white text-xl font-bold">WiFi Hack Lab</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="nav-link px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#tutorials" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Tutorials</a>
                <a href="#videos" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Videos</a>
                <a href="#faq" className="nav-link px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
                <a href="#contact" className="nav-link px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-hack-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="#tutorials" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Tutorials</a>
          <a href="#videos" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Videos</a>
          <a href="#faq" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-link block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
