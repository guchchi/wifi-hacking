
import React from 'react';
import { Unlock } from 'lucide-react';

const NoLoginBox = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto bg-hack-gray p-8 rounded-lg border border-hack-green">
          <div className="flex items-center justify-center mb-4">
            <Unlock className="h-10 w-10 text-hack-green mr-3" />
            <h2 className="text-2xl font-bold font-mono">No Login Needed</h2>
          </div>
          <p className="text-center text-gray-300">
            I wanted to keep it easy and free for my people — straight to the point. 
            No accounts, no paywalls, just pure knowledge sharing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoLoginBox;
