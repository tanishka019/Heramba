import React, { useState } from 'react';
import { 
  Tv, 
  Layers, 
  Maximize2, 
  Smartphone, 
  Radio, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Sliders, 
  Sun,
  Shield,
  Activity
} from 'lucide-react';

interface WhatWeDoProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  icon: React.ReactNode;
  accent: string;
  gradient: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'billboards',
    badge: 'FLAGSHIP OUTDOOR',
    title: 'Digital Billboards',
    headline: 'High-Impact Outdoor Mega Displays',
    description: 'Command immediate attention on major highways, flyovers, and premier business hubs. Built with ultra-bright P2.5 to P6 outdoor SMD LEDs resilient to extreme monsoon weather and glaring sunlight.',
    features: [
      'Daylight readable up to 9,000 nits',
      'IP68 weatherproof & storm rated',
      'Remote cloud content scheduling',
      'Audience telemetry & proof-of-play'
    ],
    specs: {
      'Pitch': 'P2.5 - P4.8',
      'Brightness': '8,500+ Nits',
      'Locations': 'Highways, BKC, Sea Face',
      'Format': 'Landscape 20x10ft - 50x20ft'
    },
    icon: <Tv size={24} color="#00E5A8" />,
    accent: '#00E5A8',
    gradient: 'linear-gradient(135deg, rgba(0, 229, 168, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  },
  {
    id: 'signage',
    badge: 'COMMERCIAL VENUES',
    title: 'Digital Signage',
    headline: 'Dynamic Visual Communication for Spaces',
    description: 'Transform store fronts, hotel lobbies, corporate headquarters, and retail chains with razor-sharp commercial digital signage synchronized seamlessly over 5G cloud networks.',
    features: [
      'Ultra-thin 4K bezel displays',
      'Centralized multi-screen scheduling',
      'Automated daylight auto-dimming',
      'Split-screen dynamic promotional widgets'
    ],
    specs: {
      'Resolution': '4K UHD 60FPS',
      'Panel': 'Commercial IPS / QLED',
      'Duty Cycle': '24/7 Continuous Operation',
      'Bezel': 'Ultra-narrow 0.88mm'
    },
    icon: <Layers size={24} color="#7C5CFF" />,
    accent: '#7C5CFF',
    gradient: 'linear-gradient(135deg, rgba(124, 92, 255, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  },
  {
    id: 'videowalls',
    badge: 'IMMERSIVE SPACES',
    title: 'Video Walls',
    headline: 'Large-Format Seamless Architectural Displays',
    description: 'Deliver awe-inspiring visual scale with zero-gap MicroLED and fine-pitch video wall arrays for corporate experience centers, luxury flagship retail, control rooms, and auditoriums.',
    features: [
      'Virtually seamless zero-gap matrix',
      'HDR10+ studio color accuracy',
      'Multi-source concurrent input routing',
      'Whisper-quiet fanless cooling architecture'
    ],
    specs: {
      'Pitch': 'P0.9 - P1.5 Fine MicroLED',
      'Color Gamut': '110% DCI-P3 Coverage',
      'Refresh': '3,840 Hz Ultra-Fluid',
      'Contrast': '1,000,000 : 1 Infinite'
    },
    icon: <Maximize2 size={24} color="#00D2FF" />,
    accent: '#00D2FF',
    gradient: 'linear-gradient(135deg, rgba(0, 210, 255, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  },
  {
    id: 'standees',
    badge: 'INTERACTIVE RETAIL',
    title: 'Digital Standees',
    headline: 'Freestanding 4K Interactive Totems',
    description: 'Sleek floor-standing capacitive touch and ultra-bright portrait displays for shopping malls, airports, multiplexes, and exhibition concourses that invite high-engagement pedestrian interaction.',
    features: [
      'Tempered anti-shatter gorilla glass',
      'Dual-side portrait display options',
      'Integrated touch & QR campaign actions',
      'Lockable heavy-duty architectural chassis'
    ],
    specs: {
      'Sizes': '55" / 65" / 75" / 85"',
      'Touch': '10-Point PCAP Multi-Touch',
      'Orientation': 'Portrait 9:16 Tall',
      'OS': 'Heramba Cloud OS'
    },
    icon: <Smartphone size={24} color="#FFB800" />,
    accent: '#FFB800',
    gradient: 'linear-gradient(135deg, rgba(255, 184, 0, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  },
  {
    id: 'dooh',
    badge: 'ADVERTISING PLATFORM',
    title: 'DOOH Advertising',
    headline: 'Targeted High-Footfall Media Networks',
    description: 'Reach captive audiences during daily commutes, executive routines, and luxury shopping trips. Buy guaranteed high-visibility broadcast slots across Heramba prime Mumbai network.',
    features: [
      'Guaranteed 15-second prime loop slots',
      'Audience heatmaps & hourly targeting',
      'Audited impression logs & video proof',
      'Direct programmatic & package booking'
    ],
    specs: {
      'Daily Reach': '1,200,000+ Footfall',
      'Prime Hubs': 'BKC, Lower Parel, Worli',
      'Loop Cycle': '15s Slot (4x / Minute)',
      'Verification': 'Telemetry Logged'
    },
    icon: <Radio size={24} color="#00E5A8" />,
    accent: '#00E5A8',
    gradient: 'linear-gradient(135deg, rgba(0, 229, 168, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  },
  {
    id: 'content',
    badge: 'CREATIVE STUDIO',
    title: 'Content & Campaigns',
    headline: 'Creative Production Tailored For Big Screens',
    description: 'Digital billboards require specialized content design. Our in-house motion studio engineers breathtaking anamorphic 3D illusions, high-contrast dynamic assets, and campaign storytelling.',
    features: [
      'Custom 3D anamorphic corner illusions',
      'High-contrast outdoor motion design',
      'Adaptive weather & time-triggered creatives',
      'Rapid turnaround delivery in 48 hours'
    ],
    specs: {
      'Formats': '3D Anamorphic, 4K, 8K, HDR',
      'Optimization': 'Sunlight Contrast Tuned',
      'Turnaround': '48 - 72 Hours',
      'Output': 'Hardware-Native Render'
    },
    icon: <Sparkles size={24} color="#FF3366" />,
    accent: '#FF3366',
    gradient: 'linear-gradient(135deg, rgba(255, 51, 102, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)'
  }
];

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <section 
      id="solutions"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#09090e',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <span>WHAT WE DO</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            WE TURN SCREENS INTO <br />
            <span className="text-gradient">UNMISSABLE EXPERIENCES.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            From landmark highway digital billboards to corporate video walls and centralized DOOH campaign booking, 
            Heramba provides end-to-end screen hardware, software, and advertising inventory.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Card top bar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${sol.accent}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 20px ${sol.accent}20`
                  }}>
                    {sol.icon}
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: sol.accent,
                    background: `${sol.accent}15`,
                    border: `1px solid ${sol.accent}30`,
                    padding: '4px 12px',
                    borderRadius: '999px'
                  }}>
                    {sol.badge}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  marginBottom: '8px',
                  color: '#FFFFFF'
                }}>
                  {sol.title}
                </h3>

                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: sol.accent,
                  marginBottom: '14px'
                }}>
                  {sol.headline}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  {sol.description}
                </p>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {sol.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#E0E0EA' }}>
                      <Check size={14} color={sol.accent} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Box & Action */}
              <div>
                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {Object.entries(sol.specs).slice(0, 2).map(([key, val], idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{key}</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{val}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={onOpenEstimator}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFF',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = sol.accent;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#FFF';
                    }}
                  >
                    <span>Book or Quote</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.9) 0%, rgba(10, 10, 15, 0.95) 100%)',
          border: '1px solid rgba(0, 229, 168, 0.25)',
          borderRadius: '20px',
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '26px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '6px'
            }}>
              Need a Custom Screen Setup or Landmark Installation?
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              From bespoke curved architected video walls to turn-key DOOH network rollout with turnkey CMS licensing.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenContact}
              className="btn btn-primary"
            >
              Request Custom Proposal
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
