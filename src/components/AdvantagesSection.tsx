'use client';
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AdvantagesSection: React.FC<{ onOpenTrial: () => void; onOpenContact: () => void }> = ({
  onOpenTrial,
  onOpenContact
}) => {
  const advantages = [
    {
      title: 'Digitize Communication Strategically',
      desc: 'Replace outdated static poster boards with high-impact dynamic digital screens positioned where audience attention naturally gathers.'
    },
    {
      title: 'Eliminate Recurrent Printing Costs',
      desc: 'Save thousands every month on vinyl, flex, and paper banner printing, shipping, and manual installation labor.'
    },
    {
      title: 'Showcase Significantly More Offerings',
      desc: 'Rotate dozens of products, combo offers, and services sequentially on a single screen without cluttering physical space.'
    },
    {
      title: 'Centrally Control from Anywhere',
      desc: 'Update creatives across 1 or 5,000 displays simultaneously within seconds from your smartphone or computer browser.'
    },
    {
      title: 'Monetize Idle Screen Slots',
      desc: 'Unlock secondary revenue by scheduling third-party non-competing brand advertisements on your high-footfall displays.'
    },
    {
      title: 'Live Social Media & E-Commerce Sync',
      desc: 'Broadcast real-time customer reviews, live hashtag campaigns, flash sales, and QR-code checkout integrations directly on screens.'
    },
    {
      title: 'Sensor-Backed Impression Analytics',
      desc: 'Measure actual footfall traffic, dwell times, and audience viewer segments with transparent performance logs.'
    },
    {
      title: 'Affordable Subscription Offerings',
      desc: 'Flexible pay-per-screen monthly or annual SaaS subscriptions with continuous firmware updates and 24/7 dedicated support.'
    }
  ];

  return (
    <section id="advantages" style={{
      backgroundColor: '#FFFFFF',
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            BUSINESS ROI & IMPACT
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Heramba Advantages
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            Why modern retail chains, hospitals, and corporate workspaces migrate to Heramba Digital Signage.
          </p>
        </div>

        {/* 8 Advantages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="light-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                background: '#FFFFFF',
                borderColor: '#D9D1CA'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: idx % 2 === 0 ? 'rgba(195, 72, 17, 0.1)' : 'rgba(11, 54, 154, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: idx % 2 === 0 ? '#C34811' : '#0B369A',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <CheckCircle2 size={18} />
              </div>

              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#121826', marginBottom: '6px' }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.5, margin: 0 }}>
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar in Stone Linen Warm Tone */}
        <div style={{
          background: 'linear-gradient(135deg, #F7F5F2 0%, #FFFFFF 100%)',
          border: '1px solid #D9D1CA',
          borderRadius: '16px',
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 4px 20px rgba(11, 54, 154, 0.05)'
        }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#121826', marginBottom: '4px' }}>
              Special Annual Plan Offer: Get 50% Off On Your First Year
            </div>
            <div style={{ fontSize: '14px', color: '#5E6778' }}>
              Start with a no-commitment 14-day free trial on your existing screens.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <span>Get a Free Trial</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={onOpenContact}
              className="btn btn-secondary"
              style={{ borderColor: '#0B369A', color: '#0B369A' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
