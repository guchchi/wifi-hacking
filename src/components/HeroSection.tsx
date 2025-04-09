
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-hack-green to-blue-400 bg-clip-text text-transparent">
            Learn Wi-Fi Hacking with Kali Linux
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
            Explore the tools, techniques, and tricks hackers use — <span className="text-hack-green">responsibly</span>.
          </h2>
          
          <div className="typing-effect max-w-lg mx-auto mb-8 hidden md:block">
            <code className="font-mono text-hack-green text-lg"># sudo airmon-ng start wlan0</code>
          </div>
          
          <a href="#tutorials" className="btn-primary mt-8 flex items-center justify-center gap-2 mx-auto w-fit">
            Start Learning Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
