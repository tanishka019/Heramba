'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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

  return (
    <footer style={{
      backgroundColor: '#F8F9FA',
      borderTop: '1px solid #E2E5EA',
      paddingTop: '70px',
      paddingBottom: '30px'
    }}>
      <div className="container">
        
        {/* Newsletter & Headline Strip */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E5EA',
          borderRadius: '16px',
          padding: '36px 40px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '60px',
          boxShadow: '0 4px 20px rgba(43, 52, 69, 0.04)'
        }} id="footer-newsletter">
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#191D24', marginBottom: '6px' }}>
              Subscribe to Our Stories & Insights
            </h3>
            <p style={{ fontSize: '14px', color: '#717B8C', margin: 0, lineHeight: 1.5 }}>
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
                    border: '1px solid #D8DCE3',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '11px 22px', fontSize: '14px', backgroundColor: '#FF772A' }}
                >
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF772A', fontSize: '14px', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="#FF772A" />
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
          borderBottom: '1px solid #E2E5EA'
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: '#FF772A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                boxShadow: '0 3px 10px rgba(255, 119, 42, 0.3)'
              }}>
                <Tv size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#191D24' }}>
                HERAMBA<span style={{ color: '#FF772A' }}>.</span>
              </span>
            </div>

            <p style={{ fontSize: '13px', color: '#717B8C', lineHeight: 1.6, marginBottom: '16px' }}>
              AI-driven cloud-based digital signage solution for seamlessly managing your digital displays across single screens to thousands of locations.
            </p>

            <div style={{ fontSize: '12px', color: '#2B3445', fontWeight: 700 }}>
              USA • Canada • India • UAE
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2B3445', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
              Solutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4A5260' }}>
              <li><Link href="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Signage Software</Link></li>
              <li><Link href="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Standees &amp; Totems</Link></li>
              <li><Link href="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>Video Wall Displays</Link></li>
              <li><Link href="/features" style={{ color: 'inherit', textDecoration: 'none' }}>Platform Features</Link></li>
              <li><Link href="/pricing" style={{ color: '#FF772A', textDecoration: 'none', fontWeight: 700 }}>View Pricing →</Link></li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2B3445', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
              Sectors
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4A5260' }}>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Retail Outlets</Link></li>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Restaurants &amp; Cafés</Link></li>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Corporate Engagement</Link></li>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Healthcare &amp; Clinics</Link></li>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Manufacturing Plants</Link></li>
              <li><Link href="/sectors" style={{ color: 'inherit', textDecoration: 'none' }}>Advertising &amp; OOH</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2B3445', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.04em' }}>
              Contact & Support
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4A5260' }}>
              <li>India: <strong>022 6964 5923</strong></li>
              <li>Mobile: <strong>+91 73308 76025</strong></li>
              <li>North America: <strong>+1 437 986 2288</strong></li>
              <li>Email: info@heramba.in</li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onOpenContact(); }} style={{ color: '#FF772A', textDecoration: 'none', fontWeight: 700 }}>Get In Touch →</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div style={{
          paddingTop: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '13px',
          color: '#717B8C',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span>© 2026 HERAMBA DIGITAL SIGNAGE SOLUTIONS PRIVATE LIMITED.</span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E5EA',
              fontSize: '11px',
              fontWeight: 600,
              color: '#191D24'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.25)',
                display: 'inline-block'
              }} />
              All Systems Operational • 99.98% SLA
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Heramba Privacy Policy: We comply with global data privacy and ISO 27001 data protection standards.'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Heramba Terms: 99.9% Cloud SLA uptime guarantee with dedicated customer success assistance.'); }} style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenTrial(); }} style={{ color: '#FF772A', textDecoration: 'none', fontWeight: 700 }}>Free Trial</a>
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
