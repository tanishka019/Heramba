import React, { useState } from 'react';
import { 
  Target, 
  Palette, 
  Send, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export const HowItWorks: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'PLAN',
      tagline: 'Audience, Location & High-Footfall Curation',
      description: 'We analyze your target demographics, footfall traffic patterns, and campaign objectives. We select high-visibility prime billboard locations across Mumbai (BKC, Lower Parel, Worli, Western Express Highway) for maximum recall.',
      deliverables: [
        'Geographic footfall & vehicular volume heatmap',
        'Optimal time-slot curation (Peak commute & weekend shopping)',
        'Budget-to-reach optimization analysis',
        'Custom slot availability reservation'
      ],
      icon: <Target size={28} color="#00E5A8" />,
      accent: '#00E5A8',
      previewBadge: 'LOCATION INTELLIGENCE'
    },
    {
      num: '02',
      title: 'CREATE',
      tagline: 'Anamorphic 3D & Screen-Native Production',
      description: 'Digital screens are not print banners. Our motion team optimizes contrast ratios, motion physics, and 3D anamorphic depth illusions so your creative looks mesmerizing in glaring sunlight and midnight traffic.',
      deliverables: [
        '3D Anamorphic corner illusion perspective rendering',
        'High-contrast daylight tuning (up to 8,500 nits)',
        '15-second high-impact loop sequence creation',
        'Hardware resolution & pixel-pitch testing'
      ],
      icon: <Palette size={28} color="#7C5CFF" />,
      accent: '#7C5CFF',
      previewBadge: 'STUDIO MOTION LAB'
    },
    {
      num: '03',
      title: 'DEPLOY',
      tagline: 'Sub-Minute Cloud Network Broadcast',
      description: 'No manual labor, vinyl printing delays, or climbing scaffoldings. Your verified campaign assets are pushed securely over Heramba 5G cloud OS to our screens in less than 5 minutes with synchronized scheduling.',
      deliverables: [
        'Instant multi-screen synchronization',
        'Real-time automated dayparting (morning vs evening ad creatives)',
        'Dual-redundant 5G cloud media server failover',
        'Automated brightness sensor calibration'
      ],
      icon: <Send size={28} color="#00D2FF" />,
      accent: '#00D2FF',
      previewBadge: 'CLOUD CMS BROADCAST'
    },
    {
      num: '04',
      title: 'MEASURE',
      tagline: 'Proof-of-Play Telemetry & Reach Analytics',
      description: 'Every slot broadcast is logged with cryptographic time stamps, optical camera confirmation, and verified footfall sensor impressions. Get executive-ready campaign reports with verified exposure metrics.',
      deliverables: [
        'Audited proof-of-play video & timestamp logs',
        'Daily & hourly impression delivery curves',
        'Demographic audience flow breakdown',
        'Complete end-of-campaign performance certificate'
      ],
      icon: <BarChart3 size={28} color="#FFB800" />,
      accent: '#FFB800',
      previewBadge: 'VERIFIED TELEMETRY'
    }
  ];

  return (
    <section 
      id="how-it-works"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#07070b'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
            <span>THE HERAMBA METHOD</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            HOW HERAMBA WORKS. <br />
            <span className="text-gradient">FROM STRATEGY TO SCREEN.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            A seamless 4-step workflow that transforms your marketing message into high-converting physical attention.
          </p>
        </div>

        {/* 4 Interactive Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '36px'
        }}>
          {steps.map((st, i) => (
            <div
              key={st.num}
              onClick={() => setActiveStep(i)}
              style={{
                cursor: 'pointer',
                padding: '24px 20px',
                borderRadius: '16px',
                background: activeStep === i ? 'rgba(25, 25, 36, 0.9)' : 'rgba(15, 15, 20, 0.5)',
                border: activeStep === i ? `1px solid ${st.accent}` : '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: activeStep === i ? `0 10px 30px ${st.accent}20` : 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Step active top accent bar */}
              {activeStep === i && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: st.accent
                }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: activeStep === i ? st.accent : 'var(--text-dim)'
                }}>
                  {st.num}
                </span>
                <div style={{ opacity: activeStep === i ? 1 : 0.4 }}>
                  {st.icon}
                </div>
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: activeStep === i ? '#FFFFFF' : 'var(--text-muted)',
                letterSpacing: '0.05em'
              }}>
                {st.title}
              </div>

              <div style={{
                fontSize: '12px',
                color: activeStep === i ? st.accent : 'var(--text-dim)',
                marginTop: '4px',
                fontWeight: 600
              }}>
                Step {i + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Selected Step Detailed Feature Window */}
        <div style={{
          background: 'linear-gradient(165deg, rgba(20, 20, 30, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%)',
          border: `1px solid ${steps[activeStep].accent}40`,
          borderRadius: '24px',
          padding: '40px',
          boxShadow: `0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px ${steps[activeStep].accent}15`,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column Description */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: `${steps[activeStep].accent}15`,
              border: `1px solid ${steps[activeStep].accent}40`,
              color: steps[activeStep].accent,
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              <span>PHASE {steps[activeStep].num} // {steps[activeStep].previewBadge}</span>
            </div>

            <h3 style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '10px'
            }}>
              {steps[activeStep].title}: {steps[activeStep].tagline}
            </h3>

            <p style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}>
              {steps[activeStep].description}
            </p>

            <button
              onClick={onOpenEstimator}
              className="btn btn-primary"
              style={{
                background: steps[activeStep].accent,
                boxShadow: `0 4px 20px ${steps[activeStep].accent}40`
              }}
            >
              <span>Get Started with Step {steps[activeStep].num}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column Deliverables Card */}
          <div style={{
            background: 'rgba(5, 5, 8, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '18px',
            padding: '28px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Phase {steps[activeStep].num} Key Deliverables:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {steps[activeStep].deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <CheckCircle2 size={18} color={steps[activeStep].accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: '#F0F0F8', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Turnaround speed indicator */}
            <div style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: 'var(--text-muted)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color={steps[activeStep].accent} />
                Average Phase Duration:
              </span>
              <strong style={{ color: '#fff' }}>
                {activeStep === 0 ? 'Same Day (2-4 Hours)' : activeStep === 1 ? '48 Hours' : activeStep === 2 ? 'Sub-5 Minutes' : 'Real-Time Ongoing'}
              </strong>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #how-it-works div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
