
import React from 'react';
import { ChevronRight } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      id: 1,
      title: "Bluetooth Hacking Techniques",
      description: "Learn how to discover, connect to, and exploit Bluetooth devices",
      timeframe: "Coming in May 2025",
      status: "planning"
    },
    {
      id: 2,
      title: "Advanced Wi-Fi Attacks",
      description: "Beyond basic handshake capture - explore more advanced techniques",
      timeframe: "Coming in June 2025",
      status: "planning"
    },
    {
      id: 3,
      title: "Raspberry Pi Hacking Station",
      description: "Build a complete portable hacking station with Raspberry Pi",
      timeframe: "Coming in July 2025",
      status: "development"
    },
    {
      id: 4,
      title: "Phishing Simulation Workshop",
      description: "Creating and deploying ethical phishing campaigns for awareness",
      timeframe: "Coming in August 2025",
      status: "development"
    },
    {
      id: 5,
      title: "Mobile Network Security",
      description: "Exploring vulnerabilities in cellular networks and mobile devices",
      timeframe: "Coming in September 2025",
      status: "research"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning':
        return 'bg-blue-600';
      case 'development':
        return 'bg-yellow-600';
      case 'research':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'planning':
        return 'Planning Stage';
      case 'development':
        return 'In Development';
      case 'research':
        return 'Research Phase';
      default:
        return 'Planned';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-hack-gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Content Roadmap</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's what ALX-17 is working on for upcoming tutorials and content. Sign up to be notified when new material is released.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform md:translate-x-(-50%) hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className="relative">
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-hack-green transform md:translate-x-[-50%] z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
                    <div className="card">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <ChevronRight className="h-5 w-5 text-hack-green mr-1 flex-shrink-0" />
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{item.description}</p>
                      <p className="text-sm text-hack-green">{item.timeframe}</p>
                    </div>
                  </div>
                  {/* Empty space for alternate side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-4">Want to suggest a topic?</h4>
            <p className="text-gray-300 mb-6">Have an idea for a tutorial you'd like to see ALX-17 create?</p>
            <a href="#contact" className="btn-primary">
              Suggest a Topic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
