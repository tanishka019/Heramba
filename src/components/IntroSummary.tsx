import React from 'react';
import { TrendingUp, MonitorCheck, Cpu, ArrowRight } from 'lucide-react';

export const IntroSummary: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <section style={{
      backgroundColor: '#F7F5F2', /* Stone Linen light wash */
      padding: '85px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'center'
        }} id="intro-grid">
          
          {/* Left Text */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#C34811', /* BURNT TERRACOTTA */
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              HERAMBA PLATFORM OVERVIEW
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#121826',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Next-gen Digital Signage Solution for Modern Enterprises
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: '18px'
            }}>
              Heramba is a <strong>lightning-fast, real-time, and personalized</strong> digital signage solution that helps amplify your engagement and sales by up to <strong style={{ color: '#C34811' }}>3X–5X times</strong>, given the dynamic visibility and intelligence of digital screens.
            </p>

            <p style={{
              fontSize: '15px',
              color: '#5E6778',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}>
              The advantages of Heramba's digital signage platform are its ability to centrally control and monitor a wide range of real-time multimedia formats—like live videos, dynamic menus, and social media feeds—with edge computing that delivers personalized experiences even during internet dropouts.
            </p>

            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <span>Get a Free Trial</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Highlight Cards in Pure White & Stone Linen */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="light-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', borderColor: '#D9D1CA' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(195, 72, 17, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C34811',
                flexShrink: 0
              }}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121826', marginBottom: '4px' }}>
                  3X–5X Sales & Footfall Lift
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6778', margin: 0, lineHeight: 1.5 }}>
                  High-contrast motion content and timely dayparting promotions dramatically capture audience attention compared to static posters.
                </p>
              </div>
            </div>

            <div className="light-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', borderColor: '#D9D1CA' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(11, 54, 154, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0B369A',
                flexShrink: 0
              }}>
                <MonitorCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121826', marginBottom: '4px' }}>
                  Centralized Remote Management
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6778', margin: 0, lineHeight: 1.5 }}>
                  Schedule, update, and monitor single screens or a nationwide network of 5,000+ displays from your phone or browser in real time.
                </p>
              </div>
            </div>

            <div className="light-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', borderColor: '#D9D1CA' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: '#F7F5F2',
                border: '1px solid #D9D1CA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0B369A',
                flexShrink: 0
              }}>
                <Cpu size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121826', marginBottom: '4px' }}>
                  Edge Offline Playback
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6778', margin: 0, lineHeight: 1.5 }}>
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
          }
        }
      `}</style>
    </section>
  );
};
