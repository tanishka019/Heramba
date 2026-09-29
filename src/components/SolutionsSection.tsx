import React from 'react';
import { Layers, Monitor, Tablet, Maximize, ArrowRight, Check } from 'lucide-react';

export const SolutionsSection: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const solutions = [
    {
      id: 'software',
      title: 'Digital Signage Software',
      tagline: 'AI-Driven Cloud Content & Fleet Management',
      desc: 'Intuitive browser-based portal to schedule playlists, daypart menus, manage device health, and push instant screen updates to thousands of displays globally.',
      features: [
        'Centralized multi-screen scheduling calendar',
        'Canva, Google Sheets, PowerBI direct integrations',
        'Remote screen reboot and live camera preview',
        'Offline edge-caching for 100% uptime'
      ],
      icon: <Layers size={24} color="#C34811" />,
      accent: '#C34811'
    },
    {
      id: 'hardware',
      title: 'Digital Standees & Kiosks',
      tagline: 'Freestanding 4K Interactive Commercial Totems',
      desc: 'Elegant floor-standing vertical displays engineered with shatter-proof tempered glass, heavy-duty architectural chassis, and optional 10-point capacitive multi-touch.',
      features: [
        'Available in 55", 65", 75", and 85" sizes',
        'Single or dual-sided ultra-bright commercial panels',
        'Integrated QR code and customer interaction sensors',
        'Custom corporate brand wraps and fabrication'
      ],
      icon: <Tablet size={24} color="#0B369A" />,
      accent: '#0B369A'
    },
    {
      id: 'videowall',
      title: 'Video Wall Displays',
      tagline: 'Seamless Ultra-Narrow Bezel & MicroLED Arrays',
      desc: 'Deliver monumental visual impact with zero-gap commercial video walls for corporate experience centers, public transit hubs, luxury flagships, and auditoriums.',
      features: [
        'Virtually invisible 0.88mm ultra-narrow bezel',
        'High brightness up to 8,500 nits for daylight visibility',
        'Multi-window concurrent video processor routing',
        '24/7 continuous duty commercial rated panels'
      ],
      icon: <Maximize size={24} color="#C34811" />,
      accent: '#C34811'
    },
    {
      id: 'turnkey',
      title: 'Enterprise Turnkey Solutions',
      tagline: 'End-to-End Hardware, Installation & Maintenance',
      desc: 'From initial site surveys and commercial electrical wiring to display mounting, content design, and SLA maintenance agreements across all your branches.',
      features: [
        'Nationwide installation and on-site engineering',
        'Comprehensive 3-year hardware warranty',
        'Dedicated account manager and 24/7 support SLA',
        'Content design assistance and widget customization'
      ],
      icon: <Monitor size={24} color="#0B369A" />,
      accent: '#0B369A'
    }
  ];

  return (
    <section id="solutions" style={{
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
            OUR PRODUCT ECOSYSTEM
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Digital Signage Solutions Tailored for Every Space
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            Whether you need lightweight cloud software for existing screens or turnkey video wall installations, Heramba delivers.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="light-card"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: '#D9D1CA'
              }}
            >
              <div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: sol.accent === '#C34811' ? 'rgba(195, 72, 17, 0.08)' : 'rgba(11, 54, 154, 0.08)',
                  border: `1px solid ${sol.accent === '#C34811' ? 'rgba(195, 72, 17, 0.2)' : 'rgba(11, 54, 154, 0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {sol.icon}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#121826', marginBottom: '6px' }}>
                  {sol.title}
                </h3>

                <div style={{ fontSize: '13px', fontWeight: 700, color: sol.accent, marginBottom: '14px' }}>
                  {sol.tagline}
                </div>

                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                  {sol.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sol.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#374151' }}>
                      <Check size={14} color="#0B369A" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #ECE7E1' }}>
                <button
                  onClick={onOpenTrial}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', borderColor: '#D9D1CA', color: '#0B369A' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
