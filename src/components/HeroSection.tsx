
import React from 'react';
import { ShieldAlert, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background overlay with Kali Linux blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 blur-sm"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center">
            <Terminal className="h-6 w-6 text-hack-green mr-2" />
            <span className="text-hack-green font-mono font-bold">WIFI HACK GUIDE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono bg-gradient-to-r from-hack-green to-blue-400 bg-clip-text text-transparent">
            Learn WiFi Hacking — The Smart Way
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
            On massive request from my subs, I made this site 🔐<br/>
            All tools, commands, and steps are here — purely for educational use. 💻
          </h2>
          
          <div className="typing-effect max-w-lg mx-auto mb-8 hidden md:block">
            <code className="font-mono text-hack-green text-lg"># sudo airmon-ng start wlan0</code>
          </div>
          
          <div className="flex justify-center">
            <a href="#steps" className="btn-primary flex items-center justify-center gap-2">
              Start Learning Now
              <ShieldAlert className="h-5 w-5" />
            </a>
          </div>
          
          <div className="mt-10 text-hack-green font-mono">
            Built for the loyal ALX-17 community 🔥
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
