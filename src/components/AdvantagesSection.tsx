'use client';
import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Tv, 
  Layers, 
  Sun 
} from 'lucide-react';

export const AdvantagesSection: React.FC<{ onOpenTrial: () => void; onOpenContact: () => void }> = ({
  onOpenTrial,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'hardware'>('comparison');

  const comparisonRows = [
    {
      metric: 'Content Turnaround Time',
      print: '5–7 business days (Design, print proofing, dispatch & manual hanging)',
      heramba: 'Under 30 seconds (Push directly from phone or browser to 1 or 5,000 screens)',
      impact: 'Instant Flash Deals'
    },
    {
      metric: 'Monthly Operating Overhead',
      print: 'High recurrent monthly expenditure on vinyl, shipping & store technician labor',
      heramba: '₹0 recurrent printing expenses. Predictable, low per-screen subscription',
      impact: '80% Cost Reduction'
    },
    {
      metric: 'Promotions Per Physical Location',
      print: 'Limited to 1 fixed poster. Cluttered physical space and banner blindness',
      heramba: 'Infinite rotational playlists, live video reels, and dynamic dayparted menus',
      impact: '10X Offer Capacity'
    },
    {
      metric: 'Audience Engagement & Attention',
      print: 'Static visual fatigue. Ignored by modern smartphone-driven shoppers',
      heramba: '3X–5X measured engagement lift via motion graphics & QR discount incentives',
      impact: '+38% Footfall Lift'
    },
    {
      metric: 'Proof of Play & Compliance',
      print: 'Zero audit trail. No verification whether store associates hung posters',
      heramba: 'Centralized live telemetry, playback logs, and uptime verification',
      impact: '100% Audit Verified'
    }
  ];

  const hardwareHighlights = [
    {
      title: 'Digital Commercial Standees & Totems',
      tag: 'Plug & Play Retail',
      spec: '43" to 65" • 4K UHD • Tempered Glass Bezel',
      desc: 'Slim floor-standing kiosks engineered for high-footfall entrances, mall atriums, and hotel lobbies with integrated lockable wheels.',
      icon: <Tv size={22} color="#FF772A" />
    },
    {
      title: 'High-Brightness Window Displays',
      tag: 'Sunlight Readable',
      spec: '3,500+ Nits • Thermal Management • 24/7 Duty',
      desc: 'Ultra-bright commercial panels designed to cut through direct harsh sunlight and glaring reflections for street-facing storefronts.',
      icon: <Sun size={22} color="#2B3445" />
    },
    {
      title: 'Synchronized Multi-Screen Video Walls',
      tag: 'Enterprise Showrooms',
      spec: '0.88mm Bezel • Daisy-Chain 4K • Cloud Canvas',
      desc: 'Seamless multi-panel canvas that transforms airport concourses and corporate flagship lobbies into synchronized visual experiences.',
      icon: <Layers size={22} color="#FF772A" />
    }
  ];

  return (
    <section id="advantages" style={{
      backgroundColor: '#FFFFFF',
      padding: '100px 0',
      borderBottom: '1px solid #E2E5EA'
    }}>
      <div className="container">
        
        {/* Header with Switcher Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '44px'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4.4vw, 46px)',
              fontWeight: 800,
              color: '#191D24',
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}>
              The Economics of Digital Signage
            </h2>
            <p style={{ fontSize: '16px', color: '#717B8C', lineHeight: 1.6, margin: 0 }}>
              Compare traditional physical banner printing with Heramba’s cloud display software and turnkey hardware ecosystem.
            </p>
          </div>

          {/* Toggle pill */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#F8F9FA',
            padding: '5px',
            borderRadius: '10px',
            border: '1px solid #E2E5EA'
          }}>
            <button
              onClick={() => setActiveTab('comparison')}
              style={{
                padding: '8px 18px',
                borderRadius: '7px',
                border: 'none',
                backgroundColor: activeTab === 'comparison' ? '#2B3445' : 'transparent',
                color: activeTab === 'comparison' ? '#FFFFFF' : '#4A5260',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Print vs. Heramba Comparison
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              style={{
                padding: '8px 18px',
                borderRadius: '7px',
                border: 'none',
                backgroundColor: activeTab === 'hardware' ? '#2B3445' : 'transparent',
                color: activeTab === 'hardware' ? '#FFFFFF' : '#4A5260',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Turnkey Hardware Packages
            </button>
          </div>
        </div>

        {/* VIEW 1: COMPARISON TABLE */}
        {activeTab === 'comparison' && (
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E5EA',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(43, 52, 69, 0.05)',
            marginBottom: '48px'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.6fr 1.8fr 1fr',
              padding: '18px 26px',
              backgroundColor: '#F8F9FA',
              borderBottom: '1px solid #E2E5EA',
              fontSize: '12px',
              fontWeight: 800,
              color: '#2B3445',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }} id="comp-table-header">
              <div>Dimension</div>
              <div>Traditional Static Print</div>
              <div style={{ color: '#FF772A' }}>Heramba Cloud Signage</div>
              <div style={{ textAlign: 'right' }}>Business Impact</div>
            </div>

            {/* Table Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.6fr 1.8fr 1fr',
                    padding: '22px 26px',
                    borderBottom: idx < comparisonRows.length - 1 ? '1px solid #F1F3F5' : 'none',
                    alignItems: 'center',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FCFDFD',
                    fontSize: '14px'
                  }}
                  id={`comp-row-${idx}`}
                  className="comp-table-row"
                >
                  <div style={{ fontWeight: 800, color: '#191D24', paddingRight: '12px' }}>
                    {row.metric}
                  </div>
                  <div style={{ color: '#717B8C', paddingRight: '16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <X size={16} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{row.print}</span>
                  </div>
                  <div style={{ color: '#191D24', fontWeight: 600, paddingRight: '16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Check size={16} color="#FF772A" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{row.heramba}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 119, 42, 0.09)',
                      color: '#FF772A',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {row.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: TURNKEY HARDWARE SHOWCASE */}
        {activeTab === 'hardware' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '48px'
          }} id="hardware-cards">
            {hardwareHighlights.map((hw, idx) => (
              <div
                key={idx}
                className="light-card"
                style={{
                  padding: '32px 28px',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E2E5EA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: idx % 2 === 0 ? 'rgba(255, 119, 42, 0.09)' : 'rgba(43, 52, 69, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {hw.icon}
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#717B8C',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {hw.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#191D24', marginBottom: '6px' }}>
                    {hw.title}
                  </h3>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#FF772A', marginBottom: '12px' }}>
                    {hw.spec}
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#4A5260', lineHeight: 1.55, margin: 0 }}>
                    {hw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
          border: '1px solid #E2E5EA',
          borderRadius: '16px',
          padding: '36px 42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 8px 30px rgba(43, 52, 69, 0.04)'
        }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#191D24', marginBottom: '6px' }}>
              Special Annual Plan Offer: 50% Off On Your First Year
            </div>
            <div style={{ fontSize: '14px', color: '#717B8C' }}>
              Deploy in under 5 minutes on your existing smart TVs or commercial displays with zero hardware investment.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{
                padding: '12px 28px',
                backgroundColor: '#FF772A',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontWeight: 700
              }}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={onOpenContact}
              className="btn btn-secondary"
              style={{
                borderColor: '#2B3445',
                color: '#2B3445',
                borderRadius: '8px',
                fontWeight: 700
              }}
            >
              Consult an Expert
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #comp-table-header {
            display: none !important;
          }
          .comp-table-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 20px 16px !important;
          }
          #hardware-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
