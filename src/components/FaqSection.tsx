import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC<{ onOpenTrial: () => void }> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can Heramba software run on our existing commercial displays or smart TVs?',
      a: 'Yes, Heramba is completely hardware-agnostic. You can install our lightweight player app on existing Android TVs, Amazon Fire Sticks, Windows PCs, LG webOS, or Samsung Tizen commercial displays. Alternatively, we also supply compact plug-and-play 4K hardware media players.'
    },
    {
      q: 'What happens if the internet connection at our venue drops?',
      a: 'Zero downtime occurs. Heramba utilizes edge computing and intelligent local caching. All scheduled media, videos, menus, and playlists are pre-downloaded to the screen device storage and continue looping perfectly without an active internet connection.'
    },
    {
      q: 'Can we schedule automated dayparting (e.g. breakfast, lunch, and dinner menus)?',
      a: 'Absolutely. Our cloud scheduling engine allows you to define exact time-of-day and day-of-week rules. Your screens will automatically transition from a breakfast menu to lunch specials at 11:30 AM without manual staff intervention.'
    },
    {
      q: 'Can we manage screens across multiple store locations or cities from one login?',
      a: 'Yes. Heramba is architected for enterprise multi-location management. You can group screens by city, store cluster, or department, assign granular user permissions to branch managers, and push updates to one screen or thousands in seconds.'
    },
    {
      q: 'What media formats, widgets, and dynamic feeds are supported?',
      a: 'Heramba supports 4K MP4/MOV videos, JPEG/PNG images, HTML5 interactive web widgets, Canva direct embeds, Google Sheets, PowerBI live dashboards, live RSS news tickers, YouTube streams, weather forecasts, and Instagram hashtag walls.'
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'No credit card or technical installation required. You get full access to Heramba Cloud CMS for up to 3 screens. Test scheduling, create playlists, test offline playback, and witness the engagement boost firsthand before deciding.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{
      backgroundColor: '#F7F5F2', /* Stone Linen light wash */
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Everything You Need to Know
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            Got questions about setup, hardware compatibility, or offline playback? We've got answers.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1px solid #0B369A' : '1px solid #D9D1CA',
                  borderRadius: '10px',
                  boxShadow: isOpen ? '0 4px 14px rgba(11, 54, 154, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 700, color: isOpen ? '#0B369A' : '#121826', paddingRight: '16px' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color={isOpen ? '#C34811' : '#5E6778'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    fontSize: '14px',
                    color: '#4B5563',
                    lineHeight: 1.6,
                    borderTop: '1px solid #ECE7E1',
                    paddingTop: '16px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
