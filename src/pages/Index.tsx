
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ToolsRequiredSection from '@/components/ToolsRequiredSection';
import StepByStepGuide from '@/components/StepByStepGuide';
import VideoSection from '@/components/VideoSection';
import PrecautionsPage from '@/components/PrecautionsPage';
import NoLoginBox from '@/components/NoLoginBox';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-hack-dark text-white">
      <Navbar />
      <HeroSection />
      <ToolsRequiredSection />
      <PrecautionsPage />
      <StepByStepGuide />
      <VideoSection />
      <NoLoginBox />
      <Footer />
    </div>
  );
};

export default Index;
