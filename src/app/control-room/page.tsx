'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { CmsControlRoom } from '@/components/CmsControlRoom';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { Footer } from '@/components/Footer';

export default function ControlRoomPage() {
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050508', color: '#FFFFFF' }}>
      <TopBar />
      <Navbar 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <main>
        <CmsControlRoom onOpenContact={() => setTrialOpen(true)} />
      </main>
      <Footer 
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />
      <FreeTrialModal 
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
      />
    </div>
  );
}
