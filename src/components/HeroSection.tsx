
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center">
            <Shield className="h-6 w-6 text-hack-green mr-2" />
            <span className="text-hack-green font-bold">ALX-17 HACKS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-hack-green to-blue-400 bg-clip-text text-transparent">
            Learn Wi-Fi Hacking with Kali Linux
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
            You asked for it — now it's here. The full Wi-Fi hacking process explained like never before. From tools to terminal commands — it's all here, all real, all educational.
          </h2>
          
          <div className="typing-effect max-w-lg mx-auto mb-8 hidden md:block">
            <code className="font-mono text-hack-green text-lg"># sudo airmon-ng start wlan0</code>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#tutorials" className="btn-primary flex items-center justify-center gap-2 mx-auto w-fit">
              Start Learning Now
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a 
              href="https://www.youtube.com/@ALX-17"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-medium py-3 px-6 rounded-md 
                     hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2"
            >
              Subscribe to ALX-17
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
