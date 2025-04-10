
import React from 'react';
import { AlertTriangle, Shield, FileWarning } from 'lucide-react';

const PrecautionsPage = () => {
  return (
    <section id="precautions" className="py-20 bg-hack-dark">
      <div className="section-container">
        <div className="text-center mb-10">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">Precautions & Legal Warning</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Before using any of these techniques, please read these important warnings.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
        
        <div className="card border-l-4 border-l-red-500 max-w-3xl mx-auto">
          <div className="flex items-start">
            <Shield className="h-8 w-8 text-red-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3 font-mono">EDUCATIONAL USE ONLY</h3>
              <p className="text-gray-300">
                <span className="text-white font-bold">Do this only on your own network.</span> These techniques should only be practiced on networks 
                you own or have explicit written permission to test. Unauthorized access to computer networks is illegal and 
                punishable by law in most countries. This guide is meant for learning, not mischief.
              </p>
              
              <div className="mt-6 p-4 border border-red-800 rounded-lg bg-red-900/20">
                <div className="flex items-start">
                  <FileWarning className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    By using this information, you agree that you take full responsibility for your actions. 
                    ALX-17 provides this information strictly for educational purposes and cannot be held liable 
                    for any misuse of the knowledge provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsPage;
