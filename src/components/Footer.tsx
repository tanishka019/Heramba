'use client';
import React, { useState } from 'react';
import { Tv, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC<{ onOpenTrial: () => void; onOpenContact: () => void }> = ({
  onOpenTrial,
  onOpenContact
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubDone(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer style={{
      backgroundColor: '#F7F5F2', /* Stone Linen light wash */
      borderTop: '1px solid #D9D1CA',
      paddingTop: '70px',
      paddingBottom: '30px'
    }}>
      <div className="container">
        
        {/* Newsletter & Headline Strip */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #D9D1CA',
          borderRadius: '16px',
          padding: '36px 40px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '60px',
          boxShadow: '0 4px 20px rgba(11, 54, 154, 0.04)'
        }} id="footer-newsletter">
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#121826', marginBottom: '6px' }}>
              Subscribe to Our Stories & Insights
            </h3>
            <p style={{ fontSize: '14px', color: '#5E6778', margin: 0, lineHeight: 1.5 }}>
              Receive curated articles compiled by experts on the latest from the world of IoT, retail technology, and cloud digital signage displays.
            </p>
          </div>

          <div>
            {!subDone ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email address"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '11px 14px',
                    borderRadius: '6px',
                    border: '1px solid #D9D1CA',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '11px 22px', fontSize: '14px' }}
                >
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0B369A', fontSize: '14px', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="#0B369A" />
                <span>Thank you! You are now subscribed to Heramba Insights.</span>
              </div>
            )}
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '36px',
          paddingBottom: '50px',
          borderBottom: '1px solid #D9D1CA'
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: '#C34811', /* BURNT TERRACOTTA */
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF'
              }}>
                <Tv size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#0B369A' }}>
                HERAMBA<span style={{ color: '#C34811' }}>.</span>
              </span>
            </div>

            <p style={{ fontSize: '13px', color: '#5E6778', lineHeight: 1.6, marginBottom: '16px' }}>
              AI-driven cloud-based digital signage solution for seamlessly managing your digital displays across single screens to thousands of locations.
            </p>

            <div style={{ fontSize: '12px', color: '#0B369A', fontWeight: 700 }}>
              USA • Canada • India • UAE
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0B369A', textTransform: 'uppercase', marginBottom: '14px' }}>
              Solutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4B5563' }}>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Digital Signage Solutions</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Digital Signage Software</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Digital Standees & Totems</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Video Wall Displays</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Offline Mode Playback</a></li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0B369A', textTransform: 'uppercase', marginBottom: '14px' }}>
              Sectors
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4B5563' }}>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Retail Outlets</a></li>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Restaurants & Cafés</a></li>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Corporate Engagement</a></li>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Healthcare & Clinics</a></li>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Manufacturing Plants</a></li>
              <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Advertising & OOH</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0B369A', textTransform: 'uppercase', marginBottom: '14px' }}>
              Contact & Support
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4B5563' }}>
              <li>India: <strong>022 6964 5923</strong></li>
              <li>Mobile: <strong>+91 73308 76025</strong></li>
              <li>North America: <strong>+1 437 986 2288</strong></li>
              <li>Email: info@heramba.in</li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onOpenContact(); }} style={{ color: '#C34811', textDecoration: 'none', fontWeight: 700 }}>Get In Touch →</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div style={{
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '13px',
          color: '#5E6778',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            © 2026 HERAMBA DIGITAL SIGNAGE SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Heramba Privacy Policy: We comply with global data privacy and ISO 27001 data protection standards.'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Heramba Terms: 99.9% Cloud SLA uptime guarantee with dedicated customer success assistance.'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenTrial(); }} style={{ color: '#C34811', textDecoration: 'none', fontWeight: 700 }}>Free Trial</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          #footer-newsletter {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
