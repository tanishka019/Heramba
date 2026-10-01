'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { NetworkMap } from '@/components/NetworkMap';
import { CampaignEstimatorModal } from '@/components/CampaignEstimatorModal';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { Footer } from '@/components/Footer';

export default function NetworkPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [preselectedLocation, setPreselectedLocation] = useState<string | undefined>(undefined);

  const handleOpenEstimator = (loc?: string) => {
    setPreselectedLocation(loc);
    setEstimatorOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050508', color: '#FFFFFF' }}>
      <TopBar />
      <Navbar 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <main>
        <NetworkMap onOpenEstimator={handleOpenEstimator} />
      </main>
      <Footer 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <CampaignEstimatorModal 
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        preselectedLocation={preselectedLocation}
      />
      <FreeTrialModal 
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
      />
    </div>
  );
}
