'use client';
import React, { useState } from 'react';
import { 
  Tv, 
  MapPin, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Eye, 
  Play,
  Layers
} from 'lucide-react';

interface ProjectItem {
  id: string;
  projectNumber: string;
  client: string;
  category: string;
  location: string;
  screenType: string;
  duration: string;
  objective: string;
  reach: string;
  result: string;
  accent: string;
  tagline: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    projectNumber: 'PROJECT 01',
    client: 'AURA NOVA Luxury Chronographs',
    category: 'High-End Horology',
    location: 'BKC Financial Arterial, Mumbai',
    screenType: 'Outdoor Mega 4K LED (20 × 10 ft)',
    duration: '21 Days Continuous Rotation',
    objective: 'Flagship product launch & brand prestige positioning ahead of Diwali gifting season.',
    reach: '840,000+ Unique Commuters',
    result: '+185% increase in boutique appointments at Jio World Drive store within 2 weeks.',
    accent: '#00E5A8',
    tagline: 'PRECISION IN EVERY MILLISECOND'
  },
  {
    id: 'p2',
    projectNumber: 'PROJECT 02',
    client: 'VOLT Hyperion EV Supercar',
    category: 'Next-Gen Automotive',
    location: 'Worli Sea Face Landmark Gantry',
    screenType: 'Monumental 9,000-Nit Curved Skyboard (30 × 15 ft)',
    duration: '30 Days Prime Peak Hours',
    objective: 'Dominate South Mumbai luxury automobile commute and drive pre-orders for ₹1.4 Cr EV coupe.',
    reach: '1,420,000+ Verified Vehicular Impressions',
    result: '42 test-drive reservations booked directly via on-screen QR telemetry in the first 7 days.',
    accent: '#00D2FF',
    tagline: '1,200 HP. ZERO EMISSIONS.'
  },
  {
    id: 'p3',
    projectNumber: 'PROJECT 03',
    client: 'LUMEN Haute Parfumerie',
    category: 'Parisian Luxury Fragrance',
    location: 'Lower Parel Atrium (High Street Phoenix)',
    screenType: 'Curved Anamorphic Atrium Display (18 × 12 ft)',
    duration: '14 Days Weekend Domination',
    objective: 'Create an unmissable sensory visual entrance for their first flagship boutique in India.',
    reach: '620,000+ Luxury Shoppers',
    result: 'Record weekend sellout of limited 200 bottle allocation; 4.8M organic Instagram impressions.',
    accent: '#FFB800',
    tagline: 'SCENT OF THE EXTRAORDINARY'
  },
  {
    id: 'p4',
    projectNumber: 'PROJECT 04',
    client: 'NEXUS Pay Global Banking',
    category: 'Fintech & Cross-Border Wealth',
    location: 'Andheri Western Express Highway Interchange',
    screenType: 'Transit Skyboard 4K LED (40 × 20 ft)',
    duration: '45 Days All-Day Frequency',
    objective: 'Mass customer acquisition for zero-fee international remittance app during global holiday travel.',
    reach: '2,900,000+ Transit Commuters',
    result: '34,000+ direct app downloads with 3.2x higher LTV compared to traditional social media ads.',
    accent: '#7C5CFF',
    tagline: 'MONEY MOVES AT LIGHTSPEED'
  }
];

export const CampaignProjects: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section 
      id="case-studies"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#050508'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '14px' }}>
            <Tv size={14} className="pulse-dot" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            CAMPAIGNS THAT <br />
            <span className="text-gradient">DEMAND ATTENTION.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Real case studies from premier brands who chose Heramba to turn physical locations into unforgettable brand equity.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '32px'
        }}>
          {PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 22px',
                borderRadius: '12px',
                background: activeProject === idx ? 'rgba(25, 25, 36, 0.9)' : 'rgba(15, 15, 20, 0.5)',
                border: activeProject === idx ? `1px solid ${p.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                color: activeProject === idx ? '#FFF' : 'var(--text-muted)',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: p.accent }}>{p.projectNumber}</span>
              <span>{p.client.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Project Highlight Showcase */}
        {(() => {
          const current = PROJECTS[activeProject];
          return (
            <div style={{
              background: 'linear-gradient(165deg, rgba(20, 20, 30, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%)',
              border: `1px solid ${current.accent}40`,
              borderRadius: '24px',
              padding: '44px',
              boxShadow: `0 35px 90px rgba(0, 0, 0, 0.85), 0 0 45px ${current.accent}15`,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Case Study Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: current.accent,
                    background: `${current.accent}15`,
                    border: `1px solid ${current.accent}30`,
                    padding: '4px 12px',
                    borderRadius: '999px'
                  }}>
                    {current.projectNumber} • {current.category}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  lineHeight: 1.15
                }}>
                  {current.client}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginBottom: '24px'
                }}>
                  <MapPin size={15} color={current.accent} />
                  <span>{current.location}</span>
                </div>

                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '28px'
                }}>
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Campaign Objective</div>
                    <div style={{ fontSize: '14px', color: '#E0E0EA', marginTop: '2px', lineHeight: 1.5 }}>{current.objective}</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', color: current.accent, textTransform: 'uppercase', fontWeight: 700 }}>Key Business Outcome</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>{current.result}</div>
                  </div>
                </div>

                <button
                  onClick={onOpenEstimator}
                  className="btn btn-primary"
                  style={{
                    background: current.accent,
                    boxShadow: `0 4px 20px ${current.accent}40`
                  }}
                >
                  <span>Replicate This Strategy</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Right Column: Visual Simulated Screen Proof */}
              <div>
                <div style={{
                  background: '#07070B',
                  borderRadius: '18px',
                  border: '4px solid #1C1C26',
                  boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${current.accent}25`,
                  overflow: 'hidden'
                }}>
                  {/* Screen Content */}
                  <div 
                    className="screen-scanline"
                    style={{
                      height: '280px',
                      background: `radial-gradient(circle at 60% 40%, ${current.accent}25 0%, #050508 85%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '28px',
                      textAlign: 'center',
                      position: 'relative'
                    }}
                  >
                    <div className="screen-reflection" />
                    
                    <div style={{
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      fontWeight: 800,
                      color: current.accent,
                      marginBottom: '8px'
                    }}>
                      BROADCAST PLAYBACK RECORDING
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '26px',
                      fontWeight: 900,
                      color: '#FFF',
                      textTransform: 'uppercase',
                      marginBottom: '8px'
                    }}>
                      {current.client}
                    </div>

                    <div style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#D8D8E8',
                      maxWidth: '380px'
                    }}>
                      "{current.tagline}"
                    </div>

                    <div style={{
                      marginTop: '20px',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      border: `1px solid ${current.accent}40`,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: current.accent
                    }}>
                      {current.reach}
                    </div>
                  </div>

                  {/* Hardware Gantry Specs beneath preview */}
                  <div style={{
                    padding: '16px 20px',
                    background: '#12121A',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    fontSize: '12px'
                  }}>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>Display Architecture</div>
                      <div style={{ color: '#FFF', fontWeight: 600 }}>{current.screenType}</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-dim)' }}>Flight Duration</div>
                      <div style={{ color: '#FFF', fontWeight: 600 }}>{current.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
