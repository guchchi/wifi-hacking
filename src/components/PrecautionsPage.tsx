
import React from 'react';
import { AlertTriangle, Shield, Scale, FileWarning } from 'lucide-react';

const PrecautionsPage = () => {
  return (
    <section id="precautions" className="py-20 bg-hack-gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Precautions & Legal Disclaimers</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Before using any techniques shown by ALX-17, please read these important warnings and legal considerations.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="card border-l-4 border-l-yellow-500">
            <div className="flex items-start">
              <Shield className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Educational Purpose Only</h3>
                <p className="text-gray-300">
                  All content on ALX-17 Hacks is provided strictly for educational purposes. The techniques demonstrated 
                  should only be practiced in controlled environments that you own or have explicit permission to test. 
                  Unauthorized testing on networks you don't own is illegal.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card border-l-4 border-l-red-500">
            <div className="flex items-start">
              <Scale className="h-8 w-8 text-red-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Legal Consequences</h3>
                <p className="text-gray-300">
                  Unauthorized network access is a criminal offense in most countries, punishable by fines and imprisonment. 
                  You are solely responsible for how you use this information. ALX-17 and this website take no responsibility 
                  for misuse of the information provided.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Safety Measures</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-hack-green text-hack-dark w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                1
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">Use isolated environments:</span> Practice in a lab environment with equipment you own. Consider using virtual machines to prevent accidental damage to your main system.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-hack-green text-hack-dark w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                2
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">Written permission:</span> Always obtain explicit written permission before testing security on any network, even from friends or family.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-hack-green text-hack-dark w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                3
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">Document everything:</span> Keep detailed records of all activities, including permission, scope, and findings.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-hack-green text-hack-dark w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                4
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">Respect privacy:</span> Never access, modify, or distribute data you encounter during testing.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-hack-green text-hack-dark w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                5
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">Know local laws:</span> Familiarize yourself with your country's computer crime laws before attempting any techniques.
              </p>
            </li>
          </ul>
          
          <div className="mt-10 p-6 border border-red-800 rounded-lg bg-red-900/20">
            <div className="flex items-start">
              <FileWarning className="h-10 w-10 text-red-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Legal Disclaimer:</h3>
                <p className="text-gray-300">
                  ALX-17 Hacks and its creator ALX-17 expressly disclaim any liability for any damages resulting from the misuse of the information provided. 
                  By using this website and following these tutorials, you acknowledge that you will use this knowledge responsibly and legally. 
                  If you disagree with these terms, please leave this website immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsPage;
