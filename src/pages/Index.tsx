
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import SimilaritiesSection from '@/components/SimilaritiesSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ParticleBackground from '@/components/ParticleBackground';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
      {/* Single ParticleBackground that covers the entire viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>
      
      <CursorEffect />
      <NavBar />
      
      {/* Content sections with higher z-index */}
      <div className="relative z-10">
        <HeroSection />
        <AISection />
        <SimilaritiesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
