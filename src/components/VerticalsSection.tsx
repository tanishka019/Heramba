import React, { useState } from 'react';
import { 
  Store, 
  Utensils, 
  Factory, 
  Building2, 
  HeartPulse, 
  Radio, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export const VerticalsSection: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const verticals = [
    {
      id: 'retail',
      name: 'Retail Outlets',
      tagline: 'Drive In-Store Conversions & Flash Merchandising',
      points: [
        'Integrate live Instagram & YouTube customer UGC feeds',
        'Measure customer impressions and dwell times via sensor cameras',
        'Automated time-based flash sales & promotional countdowns',
        'Dynamic digital window displays for window-shopper capture'
      ],
      icon: <Store size={24} color="#C34811" />,
      accent: '#C34811',
      highlight: 'Upto 40% Increase in promotional walk-in engagement'
    },
    {
      id: 'restaurants',
      name: 'Restaurants & Cafés',
      tagline: 'Dynamic Digital Menu Boards with Automated Dayparting',
      points: [
        'Automated menu switching (Breakfast → Lunch → Happy Hours → Dinner)',
        'Direct POS integration for live item availability and pricing',
        'Highlight high-margin chef specials with dynamic appetizing video',
        'Multi-screen synchronous display across ordering counters'
      ],
      icon: <Utensils size={24} color="#0B369A" />,
      accent: '#0B369A',
      highlight: '+28% Lift in premium beverage & side order attachments'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Plants',
      tagline: 'Real-Time Floor Safety & Live KPI Dashboards',
      points: [
        'Display live PowerBI, ERP, and IoT sensor metrics on the factory floor',
        'Safety milestone tickers (Days without accidents, EHS guidelines)',
        'Shift schedules, operator recognitions, and plant announcements',
        'Emergency broadcast override in under 2 seconds'
      ],
      icon: <Factory size={24} color="#C34811" />,
      accent: '#C34811',
      highlight: '100% Floor coverage with zero manual notice board prints'
    },
    {
      id: 'corporate',
      name: 'Corporate Offices',
      tagline: 'Modern Workspace Comms & Visitor Experience',
      points: [
        'Personalized welcome greetings for VIP clients in reception lounges',
        'Townhall live streaming & global leadership announcements',
        'Meeting room door status & capacitive touch room booking integration',
        'Employee birthday, work anniversary, and achievement spotlights'
      ],
      icon: <Building2 size={24} color="#0B369A" />,
      accent: '#0B369A',
      highlight: 'Seamless multi-city synchronization across 20+ corporate branches'
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinics',
      tagline: 'Patient Education & Seamless OPD Token Wayfinding',
      points: [
        'Alleviate waiting anxiety with explanatory health videos and wellness tips',
        'Real-time token number calling and doctor OPD room directions',
        'Doctor specialization rosters and consultant availability schedules',
        'Hygienic antimicrobial digital touch kiosks for self check-in'
      ],
      icon: <HeartPulse size={24} color="#C34811" />,
      accent: '#C34811',
      highlight: '60% Reduction in reception desk queue queries'
    },
    {
      id: 'advertising',
      name: 'Advertising & OOH',
      tagline: 'Centralized DOOH Screen Monetization & Slot Management',
      points: [
        'Divide screen broadcast into dedicated 10s–30s programmatic slots',
        'Sell secondary ad slots to trusted brand partners for extra revenue',
        'Automated proof-of-play reporting and playback verification logs',
        'Multi-format support for high-definition 4K LED and video walls'
      ],
      icon: <Radio size={24} color="#0B369A" />,
      accent: '#0B369A',
      highlight: 'Turn idle screens into recurring monthly ad revenue'
    }
  ];

  return (
    <section id="sectors" style={{
      backgroundColor: '#FFFFFF',
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            INDUSTRY SOLUTIONS
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Customized for Use Across Verticals and Industries
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            Discover tailored digital signage workflows built for your specific sector requirements.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {verticals.map((vert) => (
            <div
              key={vert.id}
              className="light-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${vert.accent}`,
                borderColor: '#D9D1CA'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: vert.accent === '#C34811' ? 'rgba(195, 72, 17, 0.08)' : 'rgba(11, 54, 154, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${vert.accent === '#C34811' ? 'rgba(195, 72, 17, 0.2)' : 'rgba(11, 54, 154, 0.2)'}`
                  }}>
                    {vert.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#121826' }}>
                      {vert.name}
                    </h3>
                  </div>
                </div>

                <div style={{ fontSize: '13px', fontWeight: 700, color: vert.accent, marginBottom: '14px' }}>
                  {vert.tagline}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {vert.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#4B5563' }}>
                      <CheckCircle2 size={15} color={vert.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid #ECE7E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0B369A' }}>
                  {vert.highlight}
                </span>

                <button
                  onClick={onOpenTrial}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: vert.accent,
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Explore <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
