'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PlatformShowcase } from '@/components/PlatformShowcase';
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

  const handleOpenTrial = () => setTrialOpen(true);
  const handleCloseTrial = () => setTrialOpen(false);
  const handleOpenEstimator = () => setEstimatorOpen(true);
  const handleCloseEstimator = () => setEstimatorOpen(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="heramba-app" style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: 'var(--text-body)' }}>
      {/* Top Contact Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar
        onOpenTrial={handleOpenTrial}
        onOpenContact={() => scrollToSection('contact')}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenTrial={handleOpenTrial}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Interactive Platform Architecture Showcase */}
        <PlatformShowcase onOpenTrial={handleOpenTrial} />

        {/* Heramba Advantages */}
        <AdvantagesSection
          onOpenTrial={handleOpenTrial}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Client Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FaqSection onOpenTrial={handleOpenTrial} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrial={handleOpenTrial}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Modals */}
      <FreeTrialModal isOpen={trialOpen} onClose={handleCloseTrial} />
      <CampaignEstimatorModal isOpen={estimatorOpen} onClose={handleCloseEstimator} />
    </div>
  );
}
