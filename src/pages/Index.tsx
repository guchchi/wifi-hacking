
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TutorialSection from '@/components/TutorialSection';
import VideoSection from '@/components/VideoSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-hack-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TutorialSection />
      <VideoSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
