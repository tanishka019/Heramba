'use client';
/**
 * PageLayout.tsx — Shared layout wrapper for all inner pages
 * (Solutions, Features, Sectors, Pricing)
 *
 * Renders Navbar + page hero banner + children + Footer.
 * The hero banner has a gradient background consistent with the Heramba brand.
 */

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
  badge: string;
  heading: string;
  subheading: string;
  /** Breadcrumb label for the current page */
  pageName: string;
}

export function PageLayout({ children, badge, heading, subheading, pageName }: PageLayoutProps) {
  const [trialOpen, setTrialOpen] = useState(false);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: 'var(--text-body)' }}>
      <Navbar onOpenTrial={() => setTrialOpen(true)} onOpenContact={scrollToContact} />

      {/* Page Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #191D24 0%, #252D3A 55%, #1E2532 100%)',
        padding: '72px 0 64px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #E2E5EA',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255, 119, 42, 0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            <Link href="/" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.4)" />
            <span style={{ fontSize: '13px', color: '#FF964A', fontWeight: 600 }}>{pageName}</span>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            backgroundColor: 'rgba(255, 119, 42, 0.16)',
            border: '1px solid rgba(255, 119, 42, 0.35)',
            borderRadius: '9999px',
            padding: '5px 14px',
            fontSize: '12px', fontWeight: 700,
            color: '#FF964A',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            {badge}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: '760px',
            marginBottom: '18px',
          }}>
            {heading}
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '620px',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {subheading}
          </p>
        </div>
      </section>

      {/* Page Content */}
      <main>
        {children}
      </main>

      <Footer onOpenTrial={() => setTrialOpen(true)} onOpenContact={scrollToContact} />

      <FreeTrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </div>
  );
}
