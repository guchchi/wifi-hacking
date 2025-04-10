
import React from 'react';
import { Laptop, Wifi, Database, ShoppingBag } from 'lucide-react';

const ToolsPage = () => {
  const hardwareTools = [
    {
      id: 1,
      name: "Alfa AWUS036ACH",
      description: "Long-range USB Wi-Fi adapter that supports monitor mode and packet injection",
      amazonLink: "https://www.amazon.com/s?k=Alfa+AWUS036ACH",
      price: "$49-60",
      uses: "Primary Wi-Fi adapter for packet capturing and injection",
      image: "https://m.media-amazon.com/images/I/71h+izTTmUL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      name: "Raspberry Pi 4",
      description: "Small single-board computer, perfect for portable hacking projects",
      amazonLink: "https://www.amazon.com/s?k=Raspberry+Pi+4",
      price: "$45-70",
      uses: "Portable platform for running Kali Linux",
      image: "https://m.media-amazon.com/images/I/71HIYzIimaL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      name: "TP-Link TL-WN722N (v1 only)",
      description: "Affordable USB Wi-Fi adapter with monitor mode support",
      amazonLink: "https://www.amazon.com/s?k=TP-Link+TL-WN722N",
      price: "$20-30",
      uses: "Budget Wi-Fi adapter for beginners",
      image: "https://m.media-amazon.com/images/I/61INzQzx6JL._AC_SL1350_.jpg"
    }
  ];
  
  const softwareTools = [
    {
      id: 1,
      name: "Kali Linux",
      description: "Penetration testing and security auditing Linux distribution",
      link: "https://www.kali.org/",
      uses: "Operating system with pre-installed hacking tools"
    },
    {
      id: 2,
      name: "Aircrack-ng Suite",
      description: "Complete suite for assessing Wi-Fi network security",
      link: "https://www.aircrack-ng.org/",
      uses: "Wi-Fi monitoring, packet capture, and WPA/WPA2 cracking"
    },
    {
      id: 3,
      name: "Wireshark",
      description: "Network protocol analyzer for capturing and analyzing network traffic",
      link: "https://www.wireshark.org/",
      uses: "Analyzing captured packets and network troubleshooting"
    },
    {
      id: 4,
      name: "Hashcat",
      description: "Advanced password recovery tool",
      link: "https://hashcat.net/",
      uses: "Fast password cracking with GPU acceleration"
    },
    {
      id: 5,
      name: "Wifite",
      description: "Automated wireless attack tool",
      link: "https://github.com/derv82/wifite2",
      uses: "Simplified automation of various Wi-Fi attacks"
    }
  ];

  return (
    <section id="tools" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Tools & Equipment</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the tools and equipment ALX-17 uses in tutorials. Having the right tools is crucial for successful Wi-Fi security testing.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Laptop className="mr-2 h-6 w-6 text-hack-green" />
          Hardware
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hardwareTools.map((tool) => (
            <div key={tool.id} className="card overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-xl font-bold mt-4">{tool.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-start">
                    <span className="text-hack-green font-bold mr-2">Price:</span>
                    <span>{tool.price}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-hack-green font-bold mr-2">Uses:</span>
                    <span>{tool.uses}</span>
                  </div>
                </div>
                <a 
                  href={tool.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md mt-2 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Database className="mr-2 h-6 w-6 text-hack-green" />
          Software
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {softwareTools.map((tool) => (
            <div key={tool.id} className="card flex flex-col">
              <h4 className="text-xl font-bold">{tool.name}</h4>
              <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
              <div className="flex items-start mb-4 flex-1">
                <span className="text-hack-green font-bold mr-2">Uses:</span>
                <span>{tool.uses}</span>
              </div>
              <a 
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hack-green hover:text-white transition-colors inline-flex items-center"
              >
                Official Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsPage;
