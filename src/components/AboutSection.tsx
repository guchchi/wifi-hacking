
import React from 'react';
import { Shield, AlertTriangle, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-hack-gray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About This Course</h2>
          <div className="w-24 h-1 bg-hack-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ethical Purpose */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-hack-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Ethical Purpose</h3>
            <p className="text-gray-300">
              This course is strictly for educational purposes. All techniques should only be practiced on networks you own or have explicit permission to test.
            </p>
          </div>
          
          {/* Legal Awareness */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Legal Awareness</h3>
            <p className="text-gray-300">
              Wi-Fi hacking without permission is illegal in most countries. We emphasize ethics and legal compliance throughout all tutorials.
            </p>
          </div>
          
          {/* Tools & Skills */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <Terminal className="h-12 w-12 text-hack-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Tools & Skills</h3>
            <p className="text-gray-300">
              Learn to use professional tools including Kali Linux, Aircrack-ng, Wireshark, and Reaver to understand network security principles.
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 border border-hack-blue rounded-lg bg-opacity-30 bg-black">
          <h3 className="text-xl font-bold mb-2 text-hack-green">Important Disclaimer:</h3>
          <p className="text-gray-300">
            The knowledge shared in this course is meant to help you understand network security vulnerabilities so you can better protect your own networks. 
            Using these techniques against networks without explicit permission is illegal and unethical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
