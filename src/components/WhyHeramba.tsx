'use client';
import React from 'react';
import { 
  MapPin, 
  RefreshCw, 
  Radio, 
  BarChart, 
  Maximize, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const WhyHeramba: React.FC<{ onOpenEstimator: () => void; onOpenContact: () => void }> = ({
  onOpenEstimator,
  onOpenContact
}) => {
  const pillars = [
    {
      num: '01',
      title: 'Strategic High-Attention Locations',
      subtitle: 'Put your brand where attention naturally happens.',
      desc: 'We do not sell empty highway margins. Heramba billboard inventory is hand-curated at major signal choke-points, arterial highway junctions, and high-footfall luxury mall entrances where dwell time is longest.',
      icon: <MapPin size={24} color="#00E5A8" />,
      accent: '#00E5A8'
    },
    {
      num: '02',
      title: 'Dynamic & Adaptive Content',
      subtitle: 'Change campaigns without changing physical creatives.',
      desc: 'Eliminate print costs, installation lag, and static fatigue. Trigger dayparting creatives (e.g. morning coffee vs evening cocktail ads) or switch your campaign instantly in response to real-world live events.',
      icon: <RefreshCw size={24} color="#7C5CFF" />,
      accent: '#7C5CFF'
    },
    {
      num: '03',
      title: 'Real-Time Remote Cloud Control',
      subtitle: 'Manage your display network remotely from anywhere.',
      desc: 'Push new assets to 50+ screens in under 5 minutes with our centralized Heramba Cloud OS. Schedule targeted time-slots, adjust brightness automatically, and monitor live webcam telemetry from your laptop.',
      icon: <Radio size={24} color="#00D2FF" />,
      accent: '#00D2FF'
    },
    {
      num: '04',
      title: 'Data-Driven & Sensor Verified',
      subtitle: 'Understand campaign performance with auditable truth.',
      desc: 'Move beyond guesswork. We quantify actual traffic velocity, pedestrian volume, and exposure heatmaps, backed by cryptographic proof-of-play timestamps so every rupee spent is accountable.',
      icon: <BarChart size={24} color="#FFB800" />,
      accent: '#FFB800'
    },
    {
      num: '05',
      title: 'Scalable Network & Flexible Buying',
      subtitle: 'Start with one prime screen and expand across the city.',
      desc: 'Whether you want a 7-day tactical blitz at Bandra Kurla Complex or a multi-month pan-Mumbai transit domination, our slot-based programmatic model accommodates both startups and Fortune 500 giants.',
      icon: <Maximize size={24} color="#FF3366" />,
      accent: '#FF3366'
    }
  ];

  return (
    <section 
      id="why-heramba"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#08080C'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '14px' }}>
            <span>THE HERAMBA ADVANTAGE</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            WHY BRANDS CHOOSE <br />
            <span className="text-gradient">HERAMBA OVER TRADITIONAL OUTDOOR.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Traditional print billboards are static, slow, and unmeasurable. Heramba transforms outdoor advertising into a reactive, intelligent, high-impact digital medium.
          </p>
        </div>

        {/* 5 Pillar Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {pillars.map((pil) => (
            <div
              key={pil.num}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${pil.accent}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {pil.icon}
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 800,
                    color: pil.accent
                  }}>
                    {pil.num}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}>
                  {pil.title}
                </h3>

                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: pil.accent,
                  marginBottom: '14px'
                }}>
                  {pil.subtitle}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {pil.desc}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dim)' }}>
                  Certified by Heramba SLA
                </span>
              </div>
            </div>
          ))}

          {/* Quick CTA Box within grid */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 229, 168, 0.15) 0%, rgba(124, 92, 255, 0.15) 100%)',
            border: '1px solid rgba(0, 229, 168, 0.4)',
            borderRadius: '20px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <Sparkles size={32} color="#00E5A8" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
              Ready to Put Your Brand on the Big Screen?
            </h3>
            <p style={{ fontSize: '14px', color: '#D0D0E0', lineHeight: 1.6, marginBottom: '24px' }}>
              Launch in under 48 hours across Mumbai's most prestigious commercial landmarks.
            </p>
            <button
              onClick={onOpenEstimator}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Calculate Campaign Cost</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
