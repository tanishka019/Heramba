'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { BillboardSimulator } from '@/components/BillboardSimulator';
import { CampaignEstimatorModal } from '@/components/CampaignEstimatorModal';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { Footer } from '@/components/Footer';

export default function SimulatorPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050508', color: '#FFFFFF' }}>
      <TopBar />
      <Navbar 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <main>
        <BillboardSimulator onOpenEstimator={() => setEstimatorOpen(true)} />
      </main>
      <Footer 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <CampaignEstimatorModal 
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
      />
      <FreeTrialModal 
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
      />
    </div>
  );
}
