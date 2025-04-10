
import React from 'react';
import { Laptop, Wifi, Database, Terminal } from 'lucide-react';

const ToolsRequiredSection = () => {
  const tools = [
    {
      id: 1,
      name: "Raspberry Pi / Kali Linux",
      icon: <Laptop className="h-8 w-8 text-hack-green mb-3" />,
      description: "A system running Kali Linux - either on Raspberry Pi or as a virtual machine"
    },
    {
      id: 2,
      name: "External WiFi Adapter",
      icon: <Wifi className="h-8 w-8 text-hack-green mb-3" />,
      description: "A compatible WiFi adapter that supports monitor mode and packet injection"
    },
    {
      id: 3,
      name: "Aircrack-ng Suite",
      icon: <Database className="h-8 w-8 text-hack-green mb-3" />,
      description: "Including airmon-ng, airodump-ng, and aircrack-ng for WiFi analysis"
    },
    {
      id: 4,
      name: "Basic Terminal Access",
      icon: <Terminal className="h-8 w-8 text-hack-green mb-3" />,
      description: "Command line knowledge to execute the hacking commands"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-hack-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="matrix-code"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Tools Required
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the essential tools you'll need to follow along with this guide. Make sure you have all of them ready before starting.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="card flex flex-col items-center text-center p-6 hover:border-hack-green transition-all duration-300">
              {tool.icon}
              <h3 className="text-xl font-bold font-mono mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsRequiredSection;
