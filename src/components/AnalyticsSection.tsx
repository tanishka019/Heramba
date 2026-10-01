'use client';
import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const AnalyticsSection: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [selectedHub, setSelectedHub] = useState<'all' | 'bkc' | 'worli' | 'lowerparel'>('all');

  // Hourly traffic simulation bars
  const hourlyData = [
    { hour: '06:00', vol: 25 },
    { hour: '08:00', vol: 70 },
    { hour: '10:00', vol: 95 },
    { hour: '12:00', vol: 65 },
    { hour: '14:00', vol: 55 },
    { hour: '16:00', vol: 75 },
    { hour: '18:00', vol: 100 },
    { hour: '20:00', vol: 90 },
    { hour: '22:00', vol: 60 },
    { hour: '00:00', vol: 30 },
  ];

  return (
    <section 
      id="analytics"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#07070b',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '14px' }}>
            <BarChart3 size={14} className="pulse-dot" />
            <span>AUDITED CAMPAIGN TELEMETRY</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            VERIFIED REACH. <br />
            <span className="text-gradient">REAL-TIME PERFORMANCE.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Never wonder if your billboard advertisement was seen. Heramba delivers transparent, sensor-backed proof-of-play 
            and hourly audience delivery telemetry.
          </p>
        </div>

        {/* 4 Big KPI Counter Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            {
              metric: '1.24M+',
              label: 'Daily Verified Impressions',
              sub: 'Across 48 digital outdoor & indoor screens',
              change: '+18.4% YoY Growth',
              accent: '#00E5A8',
              icon: <Eye size={22} color="#00E5A8" />
            },
            {
              metric: '840,000+',
              label: 'Unique Daily Footfall Reach',
              sub: 'De-duplicated audience mobility models',
              change: 'Verified by sensor radar',
              accent: '#7C5CFF',
              icon: <Users size={22} color="#7C5CFF" />
            },
            {
              metric: '+32.8%',
              label: 'Brand Recall Lift',
              sub: 'Measured vs traditional static billboard vinyl',
              change: 'Audited post-campaign',
              accent: '#00D2FF',
              icon: <TrendingUp size={22} color="#00D2FF" />
            },
            {
              metric: '99.82%',
              label: 'Certified Display Uptime',
              sub: 'Redundant power & failover 5G architecture',
              change: 'SLA Guaranteed',
              accent: '#FFB800',
              icon: <ShieldCheck size={22} color="#FFB800" />
            },
          ].map((card, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${card.accent}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.icon}
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: card.accent,
                    background: `${card.accent}15`,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${card.accent}30`
                  }}>
                    {card.change}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '40px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1
                }}>
                  {card.metric}
                </div>

                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-white)', marginTop: '8px' }}>
                  {card.label}
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {card.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Graph Visualization & Audience Breakdown */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '24px'
        }} id="analytics-split">
          
          {/* Left: Hourly Footfall & Impression Curve */}
          <div style={{
            background: 'rgba(17, 17, 24, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF' }}>
                  HOURLY AUDIENCE EXPOSURE VELOCITY
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Vehicular and pedestrian volume index across prime Mumbai corridors
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <span className="badge-pill badge-live" style={{ fontSize: '11px', padding: '4px 10px' }}>
                  PEAK: 18:00 - 20:30
                </span>
              </div>
            </div>

            {/* Bar Graph Simulation */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              height: '180px',
              paddingTop: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '12px'
            }}>
              {hourlyData.map((d, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, height: '100%', justifyContent: 'flex-end' }}>
                  <div 
                    style={{
                      width: '100%',
                      maxWidth: '36px',
                      height: `${d.vol}%`,
                      background: d.vol >= 90 ? '#00E5A8' : d.vol >= 70 ? '#7C5CFF' : 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 0.4s ease',
                      position: 'relative'
                    }}
                    title={`${d.hour}: ${d.vol}% peak capacity`}
                  />
                  <span style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '8px' }}>
                    {d.hour}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '16px',
              fontSize: '12px',
              color: 'var(--text-muted)'
            }}>
              <span>08:30 Morning Executive Rush</span>
              <span>18:00 Evening Commute & Shopper Climax</span>
            </div>
          </div>

          {/* Right: Demographic Breakdown & Verification Assurance */}
          <div style={{
            background: 'rgba(17, 17, 24, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>
                AUDIENCE DEMOGRAPHIC MIX
              </h3>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Mobility profiling across Heramba prime advertising nodes
              </div>

              {/* Progress bars */}
              {[
                { label: 'Corporate & C-Suite Executives', pct: 44, color: '#00E5A8' },
                { label: 'Luxury & Lifestyle Shoppers (HNIs)', pct: 32, color: '#7C5CFF' },
                { label: 'Gen-Z & Urban Tech Professionals', pct: 24, color: '#00D2FF' },
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#E0E0EA', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: item.color, fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: item.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Guarantee badge */}
            <div style={{
              background: 'rgba(0, 229, 168, 0.06)',
              border: '1px solid rgba(0, 229, 168, 0.25)',
              borderRadius: '12px',
              padding: '14px',
              marginTop: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#00E5A8' }}>
                <ShieldCheck size={16} />
                Cryptographic Proof-of-Play Guarantee
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
                Every single ad slot played generates a verifiable cryptographic log and webcam snapshot accessible directly in your advertiser portal.
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #analytics-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
