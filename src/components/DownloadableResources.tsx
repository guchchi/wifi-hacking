
import React from 'react';
import { FileText, Download, Lock } from 'lucide-react';

const DownloadableResources = () => {
  const resources = [
    {
      id: 1,
      title: "Kali Linux Installation Guide",
      description: "Complete step-by-step guide for installing Kali Linux on various platforms",
      fileSize: "2.4 MB",
      isLocked: false,
      pdfUrl: "#" // Would be an actual URL in production
    },
    {
      id: 2,
      title: "Wi-Fi Hacking Basics - Step by Step",
      description: "Comprehensive guide to basic Wi-Fi security testing techniques",
      fileSize: "3.8 MB",
      isLocked: true,
      pdfUrl: "#"
    },
    {
      id: 3,
      title: "Essential Kali Linux Commands",
      description: "Quick reference guide for the most useful commands in Kali Linux",
      fileSize: "1.2 MB",
      isLocked: false,
      pdfUrl: "#"
    },
    {
      id: 4,
      title: "Advanced Wi-Fi Attack Methods",
      description: "In-depth analysis and walkthrough of advanced Wi-Fi security testing",
      fileSize: "5.6 MB",
      isLocked: true,
      pdfUrl: "#"
    },
    {
      id: 5,
      title: "Hardware Buyers Guide",
      description: "ALX-17's recommended equipment for ethical hacking projects",
      fileSize: "1.8 MB",
      isLocked: false,
      pdfUrl: "#"
    }
  ];

  return (
    <section id="resources" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Downloadable Resources</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Download comprehensive PDF guides created by ALX-17 for offline reference and learning.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="card flex flex-col">
              <div className="flex items-start mb-4">
                <FileText className="h-10 w-10 text-hack-green mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">
                    {resource.title}
                    {resource.isLocked && (
                      <Lock className="h-4 w-4 text-yellow-500 inline ml-2" />
                    )}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                </div>
              </div>
              
              <div className="mt-auto flex justify-between items-center">
                <span className="text-xs text-gray-400">{resource.fileSize}</span>
                
                {resource.isLocked ? (
                  <button 
                    onClick={() => window.location.href = "#auth"}
                    className="flex items-center gap-1 bg-yellow-900/50 text-yellow-500 px-3 py-1 rounded text-sm hover:bg-yellow-900/70 transition-colors"
                  >
                    <Lock className="h-4 w-4" />
                    Login to Download
                  </button>
                ) : (
                  <a 
                    href={resource.pdfUrl}
                    className="flex items-center gap-1 bg-hack-green text-hack-dark px-3 py-1 rounded text-sm hover:bg-opacity-90 transition-colors"
                    download
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-6 border border-hack-blue rounded-md bg-black bg-opacity-50 text-center">
          <h3 className="font-bold text-lg mb-2">Want more downloadable resources?</h3>
          <p className="text-gray-300 mb-6">
            ALX-17 is constantly creating new tutorials and guides. Sign up for an account to get notified when new resources are available.
          </p>
          <a href="#auth" className="btn-primary">
            Create Free Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadableResources;
