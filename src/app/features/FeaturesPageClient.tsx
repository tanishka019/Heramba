'use client';
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { FeaturesTabs } from '@/components/FeaturesTabs';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { ArrowRight, Cpu, WifiOff, BarChart3, Lock, RefreshCw, Bell } from 'lucide-react';

export default function FeaturesPageClient() {
  const [trialOpen, setTrialOpen] = useState(false);

  const statsRow = [
    { value: '99.9%', label: 'Uptime SLA Guaranteed' },
    { value: '<2s', label: 'Emergency broadcast override' },
    { value: '50K+', label: 'Screens managed globally' },
    { value: '4K', label: 'Ultra-HD content support' },
  ];

  const platformFeatures = [
    {
      icon: <Cpu size={22} color="#C34811" />, accent: '#C34811',
      title: 'Edge Computing Architecture',
      desc: 'Smart content caching happens directly on the Heramba Player device, eliminating reliance on constant internet bandwidth and guaranteeing smooth playback even in low-connectivity environments.',
    },
    {
      icon: <WifiOff size={22} color="#0B369A" />, accent: '#0B369A',
      title: 'True Offline Mode',
      desc: 'Content continues playing seamlessly from local storage during internet outages. Automatic sync resumes the moment connectivity is restored — zero manual intervention required.',
    },
    {
      icon: <BarChart3 size={22} color="#C34811" />, accent: '#C34811',
      title: 'Audience Analytics Dashboard',
      desc: 'Measure estimated impressions, dwell times, and demographic viewer segments using sensor-backed cameras. Export transparent reports for campaign ROI calculations.',
    },
    {
      icon: <Lock size={22} color="#0B369A" />, accent: '#0B369A',
      title: 'Role-Based Access Control',
      desc: 'Assign store managers, regional leads, and content designers specific screen access permissions. Prevent unauthorized content changes with granular permission tiers.',
    },
    {
      icon: <RefreshCw size={22} color="#C34811" />, accent: '#C34811',
      title: 'Automated Content Scheduling',
      desc: 'Schedule campaigns weeks in advance with automated dayparting rules — Breakfast → Lunch → Happy Hours → Dinner — all triggered automatically without manual intervention.',
    },
    {
      icon: <Bell size={22} color="#0B369A" />, accent: '#0B369A',
      title: 'Emergency Broadcast Override',
      desc: 'Push urgent alerts — safety announcements, weather warnings, emergency evacuations — to all connected screens simultaneously in under 2 seconds from any device.',
    },
  ];

  return (
    <PageLayout
      badge="System Capabilities"
      heading="A Feature Set Built for Real Business Operations"
      subheading="Every feature is purpose-built to simplify screen operations, maximize footfall engagement, and unlock dynamic content delivery across any hardware."
      pageName="Features"
    >
      {/* Stats Strip */}
      <section style={{ backgroundColor: '#F7F5F2', borderBottom: '1px solid #D9D1CA', padding: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0' }}>
            {statsRow.map((stat, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                textAlign: 'center',
                borderRight: i < statsRow.length - 1 ? '1px solid #D9D1CA' : 'none',
              }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: i % 2 === 0 ? '#C34811' : '#0B369A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#5E6778', fontWeight: 500, marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Tabs */}
      <FeaturesTabs onOpenTrial={() => setTrialOpen(true)} />

      {/* Platform Feature Deep Dive */}
      <section style={{ backgroundColor: '#F7F5F2', padding: '80px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#C34811', textTransform: 'uppercase', marginBottom: '8px' }}>
              PLATFORM DEEP DIVE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#121826', marginBottom: '12px' }}>
              Core Platform Capabilities
            </h2>
            <p style={{ fontSize: '16px', color: '#5E6778' }}>
              Under the hood features that power enterprise-grade reliability across thousands of screens.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {platformFeatures.map((feat, i) => (
              <div key={i} className="light-card" style={{ padding: '32px 28px', background: '#FFF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: feat.accent === '#C34811' ? 'rgba(195,72,17,0.08)' : 'rgba(11,54,154,0.08)', border: `1px solid ${feat.accent === '#C34811' ? 'rgba(195,72,17,0.2)' : 'rgba(11,54,154,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121826', margin: 0 }}>{feat.title}</h3>
                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#121826', marginBottom: '12px' }}>
            See Every Feature Live in Your Environment
          </h2>
          <p style={{ fontSize: '16px', color: '#5E6778', marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px' }}>
            Book a personalized demo and we&apos;ll walk you through every capability relevant to your specific use case.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setTrialOpen(true)} className="btn btn-primary" style={{ padding: '13px 32px', fontSize: '15px' }}>
              Start Free Trial <ArrowRight size={15} />
            </button>
            <a href="/#contact" className="btn btn-secondary" style={{ padding: '13px 32px', fontSize: '15px', borderColor: '#0B369A', color: '#0B369A' }}>
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </PageLayout>
  );
}
