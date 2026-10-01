'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { IntroSummary } from '@/components/IntroSummary';
import { SolutionsSection } from '@/components/SolutionsSection';
import { FeaturesTabs } from '@/components/FeaturesTabs';
import { VerticalsSection } from '@/components/VerticalsSection';
import { WhatYouGet } from '@/components/WhatYouGet';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { Testimonials } from '@/components/Testimonials';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { CampaignEstimatorModal } from '@/components/CampaignEstimatorModal';

export default function HomePage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  const handleOpenTrial = () => {
    setTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialOpen(false);
  };

  const handleOpenEstimator = () => {
    setEstimatorOpen(true);
  };

  const handleCloseEstimator = () => {
    setEstimatorOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="heramba-app" style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: 'var(--text-body)' }}>
      {/* Intelisa-Style Top Contact Bar */}
      <TopBar />

      {/* Main Sticky Navbar */}
      <Navbar 
        onOpenTrial={handleOpenTrial}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenTrial={handleOpenTrial}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Next-gen Platform Overview (Amplify engagement 3X-5X) */}
        <IntroSummary 
          onOpenTrial={handleOpenTrial}
        />

        {/* Product Ecosystem (Software, Standees, Video Walls, Turnkey) */}
        <SolutionsSection 
          onOpenTrial={handleOpenTrial}
        />

        {/* Our Host of Features (3-Pillar Tabbed System) */}
        <FeaturesTabs 
          onOpenTrial={handleOpenTrial}
        />

        {/* Sectors & Verticals (Retail, Restaurants, Corporate, Healthcare, etc.) */}
        <VerticalsSection 
          onOpenTrial={handleOpenTrial}
        />

        {/* What You Get (Hardware Player + Cloud Software + Commercial Displays) */}
        <WhatYouGet 
          onOpenTrial={handleOpenTrial}
        />

        {/* Heramba Advantages (8 Core Business ROI Points + 50% Off Offer) */}
        <AdvantagesSection 
          onOpenTrial={handleOpenTrial}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Client Testimonials (Clinic Chain, 250+ Retail Stores, IT Reseller) */}
        <Testimonials />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection 
          onOpenTrial={handleOpenTrial}
        />

        {/* Get in Touch & Regional Offices (Mumbai HQ, Hyderabad, Bengaluru, Canada) */}
        <ContactSection />
      </main>

      {/* Clean Light Footer with Newsletter */}
      <Footer 
        onOpenTrial={handleOpenTrial}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* 14-Day Free Trial Modal */}
      <FreeTrialModal 
        isOpen={trialOpen}
        onClose={handleCloseTrial}
      />

      {/* Interactive Campaign Estimator Modal */}
      <CampaignEstimatorModal 
        isOpen={estimatorOpen}
        onClose={handleCloseEstimator}
      />
    </div>
  );
}
