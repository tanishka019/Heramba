'use client';
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { SolutionsSection } from '@/components/SolutionsSection';
import { WhatYouGet } from '@/components/WhatYouGet';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Headphones } from 'lucide-react';

export default function SolutionsPageClient() {
  const [trialOpen, setTrialOpen] = useState(false);

  const whyChoose = [
    { icon: <Zap size={22} color="#C34811" />, title: 'Instant Deployment', desc: 'Get your screens live in under 5 minutes. No technical expertise needed — plug, connect, and go.' },
    { icon: <Shield size={22} color="#0B369A" />, title: 'Enterprise Security', desc: 'Bank-grade encrypted content delivery with role-based access control and remote PIN protection.' },
    { icon: <Globe size={22} color="#C34811" />, title: 'Global Scale', desc: 'Manage 1 to 50,000 screens from a single dashboard, across any city, country, or timezone.' },
    { icon: <Headphones size={22} color="#0B369A" />, title: '24/7 SLA Support', desc: 'Dedicated account managers and round-the-clock technical support with guaranteed response SLAs.' },
  ];

  return (
    <PageLayout
      badge="Product Ecosystem"
      heading="Digital Signage Solutions Tailored for Every Space"
      subheading="From lightweight cloud software for existing screens to turnkey video wall installations — Heramba delivers exactly what your business needs."
      pageName="Solutions"
    >
      {/* Main Solutions Grid */}
      <SolutionsSection onOpenTrial={() => setTrialOpen(true)} />

      {/* What You Get Section */}
      <WhatYouGet onOpenTrial={() => setTrialOpen(true)} />

      {/* Why Choose Heramba — extra section unique to this page */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#C34811', textTransform: 'uppercase', marginBottom: '8px' }}>
              WHY HERAMBA
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#121826', marginBottom: '12px' }}>
              Built for Businesses That Demand Reliability
            </h2>
            <p style={{ fontSize: '16px', color: '#5E6778' }}>
              Every feature is designed around real operational challenges faced by retail chains, hospitality groups, and enterprise campuses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {whyChoose.map((item, i) => (
              <div key={i} className="light-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: i % 2 === 0 ? 'rgba(195,72,17,0.08)' : 'rgba(11,54,154,0.08)', border: `1px solid ${i % 2 === 0 ? 'rgba(195,72,17,0.2)' : 'rgba(11,54,154,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121826', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#F7F5F2', padding: '72px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #0B369A 0%, #C34811 100%)',
            borderRadius: '20px',
            padding: '52px 48px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#FFF', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                Ready to Transform Your Displays?
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', margin: 0 }}>
                Start a 14-day free trial — no credit card required.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => setTrialOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', border: 'none', background: '#FFF', color: '#C34811', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                Start Free Trial <ArrowRight size={15} />
              </button>
              <a href="/#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.35)', background: 'transparent', color: '#FFF', fontSize: '15px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </PageLayout>
  );
}
