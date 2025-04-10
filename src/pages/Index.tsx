
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TutorialSection from '@/components/TutorialSection';
import VideoSection from '@/components/VideoSection';
import CreatorSection from '@/components/CreatorSection';
import CommandLibrary from '@/components/CommandLibrary';
import AuthSection from '@/components/AuthSection';
import PrecautionsPage from '@/components/PrecautionsPage';
import ToolsPage from '@/components/ToolsPage';
import RoadmapSection from '@/components/RoadmapSection';
import BugReportForm from '@/components/BugReportForm';
import DownloadableResources from '@/components/DownloadableResources';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-hack-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AuthSection />
      <TutorialSection />
      <VideoSection />
      <CommandLibrary />
      <DownloadableResources />
      <PrecautionsPage />
      <ToolsPage />
      <RoadmapSection />
      <CreatorSection />
      <BugReportForm />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
