'use client';
import React from 'react';
import { TrendingUp, MonitorCheck, Cpu, ArrowRight } from 'lucide-react';

export const IntroSummary: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <section style={{
      backgroundColor: '#F8F9FA',
      padding: '90px 0',
      borderBottom: '1px solid #E2E5EA',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '56px',
          alignItems: 'center'
        }} id="intro-grid">
          
          {/* Left Text */}
          <div>
            <h2 style={{
              fontSize: 'clamp(30px, 4.2vw, 44px)',
              fontWeight: 800,
              color: '#191D24',
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}>
              Next-Gen Digital Signage Built for Enterprise Scale
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#4A5260',
              lineHeight: 1.7,
              marginBottom: '18px'
            }}>
              Heramba is a <strong>lightning-fast, real-time, and personalized</strong> cloud signage network that amplifies viewer engagement and physical retail conversion by up to <strong style={{ color: '#FF772A' }}>3X–5X times</strong> through intelligent screen automation.
            </p>

            <p style={{
              fontSize: '15px',
              color: '#717B8C',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              Manage dynamic menus, live videos, sensor-triggered campaigns, and emergency broadcasts from a unified web console. Edge computing guarantees zero blackouts, maintaining crisp 4K playback even during internet disconnects.
            </p>

            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{
                padding: '13px 30px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                backgroundColor: '#FF772A',
                color: '#FFFFFF',
                boxShadow: '0 6px 20px rgba(255, 119, 42, 0.28)'
              }}
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Highlight Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              className="light-card"
              style={{
                padding: '24px 26px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E5EA',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                background: 'rgba(255, 119, 42, 0.09)',
                border: '1px solid rgba(255, 119, 42, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF772A',
                flexShrink: 0
              }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginBottom: '4px' }}>
                  3X–5X Sales &amp; Footfall Lift
                </h3>
                <p style={{ fontSize: '14px', color: '#717B8C', margin: 0, lineHeight: 1.55 }}>
                  High-contrast motion content and dayparting promotions dramatically capture in-store attention compared to static posters.
                </p>
              </div>
            </div>

            <div
              className="light-card"
              style={{
                padding: '24px 26px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E5EA',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                background: 'rgba(43, 52, 69, 0.08)',
                border: '1px solid rgba(43, 52, 69, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2B3445',
                flexShrink: 0
              }}>
                <MonitorCheck size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginBottom: '4px' }}>
                  Centralized Remote Management
                </h3>
                <p style={{ fontSize: '14px', color: '#717B8C', margin: 0, lineHeight: 1.55 }}>
                  Schedule, update, and monitor single screens or a nationwide network of 5,000+ displays from your phone or browser in real time.
                </p>
              </div>
            </div>

            <div
              className="light-card"
              style={{
                padding: '24px 26px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E5EA',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                background: 'rgba(255, 119, 42, 0.09)',
                border: '1px solid rgba(255, 119, 42, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF772A',
                flexShrink: 0
              }}>
                <Cpu size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginBottom: '4px' }}>
                  Edge Offline Playback
                </h3>
                <p style={{ fontSize: '14px', color: '#717B8C', margin: 0, lineHeight: 1.55 }}>
                  Zero downtime. Smart on-device caching ensures seamless 24/7 video and playlist broadcast even when local internet drops.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #intro-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
