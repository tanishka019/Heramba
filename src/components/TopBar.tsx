'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MessageSquare, Globe } from 'lucide-react';

export const TopBar: React.FC = () => {
  const pathname = usePathname();
  const isDark = pathname === '/';

  return (
    <div style={{
      backgroundColor: isDark ? '#000000' : '#F8F9FA',
      borderBottom: isDark ? '1px solid rgba(255, 230, 0, 0.15)' : '1px solid #E2E5EA',
      fontSize: '12px',
      color: isDark ? '#E5E7EB' : '#4A5260',
      padding: '7px 0',
      display: 'block',
      transition: 'all 0.25s ease'
    }}>
      <div className="container-wide" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Left: Contact Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} color={isDark ? '#FFE600' : '#FFE600'} />
            <a href="tel:02269645923" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
              022 6964 5923
            </a>
            <span style={{ color: isDark ? 'rgba(255, 230, 0, 0.25)' : '#E2E5EA' }}>|</span>
            <a href="tel:+917330876025" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
              +91 73308 76025
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={13} color={isDark ? '#FFE600' : '#2B3445'} />
            <a href="mailto:info@heramba.in" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
              info@heramba.in
            </a>
          </div>

          <a
            href="https://wa.me/917330876025?text=Hello%20Heramba,%20I%20am%20interested%20in%20Digital%20Signage%20Solutions."
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: isDark ? '#FFFFFF' : '#2B3445',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <MessageSquare size={13} color={isDark ? '#FFE600' : '#FFE600'} />
            <span>Connect via WhatsApp</span>
          </a>
        </div>

        {/* Right: Regions & Special Offer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Globe size={13} color={isDark ? '#FFE600' : '#2B3445'} />
            <span>Global: <strong>India • USA • Canada • UAE</strong></span>
          </span>
          <span style={{ color: isDark ? 'rgba(255, 230, 0, 0.25)' : '#E2E5EA' }}>|</span>
          <span style={{ color: isDark ? '#FFE600' : '#FFE600', fontWeight: 700 }}>Special: 50% Off Annual Subscriptions</span>
        </div>
      </div>
    </div>
  );
};
