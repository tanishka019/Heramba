'use client';
import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Tv, 
  Layers, 
  Sun,
  TrendingUp
} from 'lucide-react';

export const AdvantagesSection: React.FC<{ onOpenTrial: () => void; onOpenContact: () => void }> = ({
  onOpenTrial,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'hardware'>('comparison');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparisonRows = [
    {
      metric: 'Turnaround Time',
      print: '5–7 business days (Design, print proofing, dispatch & manual hanging)',
      heramba: 'Under 30 seconds (Push directly from browser to 1 or 5,000 screens)',
      impact: 'Instant Flash Deals'
    },
    {
      metric: 'Operating Overhead',
      print: 'High recurrent monthly expenditure on vinyl, shipping & technician labor',
      heramba: '₹0 recurrent printing expenses. Predictable, low per-screen subscription',
      impact: '80% Cost Reduction'
    },
    {
      metric: 'Display Capacity',
      print: 'Limited to 1 fixed poster. Cluttered physical space & banner fatigue',
      heramba: 'Infinite rotational playlists, 4K reels, and dynamic dayparted schedules',
      impact: '10X Offer Density'
    },
    {
      metric: 'Audience Attention',
      print: 'Static visual fatigue. Routinely ignored by smartphone-first visitors',
      heramba: '3X–5X engagement boost via motion graphics & synchronized video walls',
      impact: '+38% Footfall Lift'
    },
    {
      metric: 'Proof of Play',
      print: 'Zero audit trail. No verification whether store teams hung posters',
      heramba: 'Centralized telemetry, sub-second uptime logs, and compliance audits',
      impact: '100% Audit Verified'
    }
  ];

  const hardwareHighlights = [
    {
      title: 'Digital Commercial Standees & Totems',
      tag: 'Plug & Play Retail',
      spec: '43" to 65" • 4K UHD • Tempered Glass Bezel',
      desc: 'Slim floor-standing kiosks engineered for high-footfall entrances, mall atriums, and hotel lobbies with integrated lockable wheels.',
      icon: <Tv size={22} />
    },
    {
      title: 'High-Brightness Window Displays',
      tag: 'Sunlight Readable',
      spec: '3,500+ Nits • Thermal Management • 24/7 Duty',
      desc: 'Ultra-bright commercial panels designed to cut through direct harsh sunlight and glaring reflections for street-facing storefronts.',
      icon: <Sun size={22} />
    },
    {
      title: 'Synchronized Multi-Screen Video Walls',
      tag: 'Enterprise Showrooms',
      spec: '0.88mm Bezel • Daisy-Chain 4K • Cloud Canvas',
      desc: 'Seamless multi-panel canvas that transforms airport concourses and corporate flagship lobbies into synchronized visual experiences.',
      icon: <Layers size={22} />
    }
  ];

  return (
    <section id="advantages" style={{
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      padding: '110px 0',
      borderTop: '1px solid #1A1A1A',
      borderBottom: '1px solid #1A1A1A',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header with Switcher Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#FFE600',
              marginBottom: '12px'
            }}>
              ROI & Unit Economics
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              marginBottom: '12px'
            }}>
              The Economics of <span style={{ color: '#FFE600' }}>Digital Signage</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#888888', lineHeight: 1.6, margin: 0 }}>
              Compare traditional physical banner printing with Heramba’s cloud display software and turnkey hardware ecosystem.
            </p>
          </div>

          {/* Minimal Tab Switcher */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#111111',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid #222222'
          }}>
            <button
              onClick={() => setActiveTab('comparison')}
              style={{
                padding: '9px 18px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: activeTab === 'comparison' ? '#FFE600' : 'transparent',
                color: activeTab === 'comparison' ? '#000000' : '#888888',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              Print vs. Heramba
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              style={{
                padding: '9px 18px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: activeTab === 'hardware' ? '#FFE600' : 'transparent',
                color: activeTab === 'hardware' ? '#000000' : '#888888',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              Hardware Packages
            </button>
          </div>
        </div>

        {/* VIEW 1: COMPARISON TABLE */}
        {activeTab === 'comparison' && (
          <div style={{
            backgroundColor: '#111111',
            border: '1px solid #222222',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.6fr 1.8fr 1fr',
              padding: '16px 24px',
              backgroundColor: '#0E0E0E',
              borderBottom: '1px solid #1F1F1F',
              fontSize: '11px',
              fontWeight: 800,
              color: '#777777',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }} id="comp-table-header">
              <div>Metric</div>
              <div>Traditional Static Print</div>
              <div style={{ color: '#FFE600' }}>Heramba Cloud Signage</div>
              <div style={{ textAlign: 'right' }}>Business Impact</div>
            </div>

            {/* Table Rows */}
            <div>
              {comparisonRows.map((row, idx) => {
                const isHovered = hoveredRow === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1.6fr 1.8fr 1fr',
                      padding: '22px 24px',
                      borderBottom: idx < comparisonRows.length - 1 ? '1px solid #1A1A1A' : 'none',
                      alignItems: 'center',
                      backgroundColor: isHovered ? '#161616' : '#111111',
                      borderLeft: isHovered ? '3px solid #FFE600' : '3px solid transparent',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      fontSize: '13.5px',
                      cursor: 'default'
                    }}
                    className="comp-table-row"
                  >
                    {/* Metric */}
                    <div style={{
                      fontWeight: 700,
                      color: isHovered ? '#FFFFFF' : '#D0D0D0',
                      paddingRight: '12px',
                      transition: 'color 0.18s ease'
                    }}>
                      {row.metric}
                    </div>

                    {/* Print (Drawback) */}
                    <div style={{
                      color: '#666666',
                      paddingRight: '16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.5
                    }}>
                      <X size={15} color="#555555" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{row.print}</span>
                    </div>

                    {/* Heramba Advantage */}
                    <div style={{
                      color: isHovered ? '#FFFFFF' : '#E8E8E8',
                      fontWeight: 600,
                      paddingRight: '16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.5,
                      transition: 'color 0.18s ease'
                    }}>
                      <Check size={16} color="#FFE600" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.heramba}</span>
                    </div>

                    {/* Business Impact Pill */}
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        backgroundColor: isHovered ? 'rgba(255, 230, 0, 0.15)' : 'rgba(255, 230, 0, 0.08)',
                        color: '#FFE600',
                        border: isHovered ? '1px solid #FFE600' : '1px solid rgba(255, 230, 0, 0.25)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        transition: 'all 0.18s ease'
                      }}>
                        <TrendingUp size={11} strokeWidth={2.5} />
                        {row.impact}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: TURNKEY HARDWARE SHOWCASE */}
        {activeTab === 'hardware' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginBottom: '48px'
          }} id="hardware-cards">
            {hardwareHighlights.map((hw, idx) => (
              <div
                key={idx}
                className="hw-card"
                style={{
                  padding: '30px 26px',
                  borderRadius: '12px',
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FFE600';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 230, 0, 0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#222222';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 230, 0, 0.1)',
                    border: '1px solid rgba(255, 230, 0, 0.25)',
                    color: '#FFE600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {hw.icon}
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#888888',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}>
                    {hw.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                    {hw.title}
                  </h3>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFE600', marginBottom: '10px' }}>
                    {hw.spec}
                  </div>
                  <p style={{ fontSize: '13px', color: '#888888', lineHeight: 1.6, margin: 0 }}>
                    {hw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Minimal Dark Call to Action Banner */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid #222222',
          borderRadius: '12px',
          padding: '32px 38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
              Special Annual Plan: <span style={{ color: '#FFE600' }}>50% Off First Year</span>
            </div>
            <div style={{ fontSize: '13.5px', color: '#888888' }}>
              Deploy in under 5 minutes on your existing smart TVs or hardware with zero installation lock-in.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenTrial}
              style={{
                padding: '11px 24px',
                backgroundColor: '#FFE600',
                color: '#000000',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.18s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#F5DC00';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFE600';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
            <button
              onClick={onOpenContact}
              style={{
                borderColor: '#333333',
                color: '#CCCCCC',
                backgroundColor: 'transparent',
                border: '1px solid #333333',
                borderRadius: '6px',
                padding: '11px 20px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FFE600';
                e.currentTarget.style.color = '#FFE600';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#CCCCCC';
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
