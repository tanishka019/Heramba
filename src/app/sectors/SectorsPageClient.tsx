'use client';
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { VerticalsSection } from '@/components/VerticalsSection';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { ArrowRight } from 'lucide-react';

export default function SectorsPageClient() {
  const [trialOpen, setTrialOpen] = useState(false);

  const caseStudies = [
    {
      sector: 'Retail Chain',
      title: '250+ Store Network — Flash Sale Automation',
      result: '40% increase in promotional walk-in engagement',
      detail: 'A leading fashion retail chain deployed Heramba across 250+ stores to automate flash sale countdowns, synchronize window displays, and broadcast Instagram UGC feeds in real time.',
      accent: '#C34811',
    },
    {
      sector: 'Restaurant Group',
      title: 'QSR Chain — Dynamic Menu Dayparting',
      result: '+28% lift in premium beverage & side order attachments',
      detail: 'A 60-outlet QSR chain replaced static menu boards with Heramba\'s automated dayparting system — Breakfast, Lunch, Happy Hours, Dinner menus switch automatically with zero manual updates.',
      accent: '#0B369A',
    },
    {
      sector: 'Healthcare Network',
      title: 'Clinic Chain — OPD Queue Management',
      result: '60% reduction in reception desk queue queries',
      detail: 'A multi-city hospital group integrated Heramba\'s token calling and doctor roster displays, eliminating patient confusion at OPD counters and dramatically reducing staff workload.',
      accent: '#C34811',
    },
  ];

  return (
    <PageLayout
      badge="Industry Solutions"
      heading="Customized Workflows for Every Sector and Vertical"
      subheading="Heramba is deployed across retail, hospitality, corporate, healthcare, manufacturing, and out-of-home advertising — each with purpose-built feature sets."
      pageName="Sectors"
    >
      {/* Verticals Grid */}
      <VerticalsSection onOpenTrial={() => setTrialOpen(true)} />

      {/* Case Studies */}
      <section style={{ backgroundColor: '#F7F5F2', padding: '80px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#C34811', textTransform: 'uppercase', marginBottom: '8px' }}>
              REAL RESULTS
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#121826', marginBottom: '12px' }}>
              Proven Impact Across Industries
            </h2>
            <p style={{ fontSize: '16px', color: '#5E6778' }}>
              Measurable business outcomes delivered by Heramba deployments across India and globally.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} className="light-card" style={{
                padding: '36px 32px',
                background: '#FFF',
                borderTop: `4px solid ${cs.accent}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}>
                <div style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', backgroundColor: cs.accent === '#C34811' ? 'rgba(195,72,17,0.1)' : 'rgba(11,54,154,0.08)', color: cs.accent }}>
                  {cs.sector}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#121826', margin: 0 }}>{cs.title}</h3>
                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{cs.detail}</p>
                <div style={{ paddingTop: '14px', borderTop: '1px solid #F3F0EC' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: cs.accent }}>📈 {cs.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '72px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #121826 0%, #0B369A 60%, #C34811 140%)',
            borderRadius: '20px',
            padding: '52px 48px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', bottom: '-50px', right: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#FFF', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                Heramba Works for Your Industry
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Talk to a sector specialist and see a live demo tailored to your vertical.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => setTrialOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', border: 'none', background: '#FFF', color: '#C34811', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                Try Free for 14 Days <ArrowRight size={15} />
              </button>
              <a href="/#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#FFF', fontSize: '15px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>
                Speak to a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </PageLayout>
  );
}
