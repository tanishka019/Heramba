'use client';
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
      backgroundColor: '#F8F9FA',
      padding: '95px 0',
      borderBottom: '1px solid #E2E5EA'
    }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2 style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            fontWeight: 800,
            color: '#191D24',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Frequently Asked Questions
          </h2>

          <p style={{ fontSize: '16px', color: '#717B8C', lineHeight: 1.6, margin: 0 }}>
            Everything you need to know about setup, display compatibility, and offline playback.
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
                  border: isOpen ? '1px solid rgba(255, 119, 42, 0.45)' : '1px solid #E2E5EA',
                  borderRadius: '12px',
                  boxShadow: isOpen ? '0 8px 24px -4px rgba(43, 52, 69, 0.08), 0 2px 6px -1px rgba(255, 119, 42, 0.06)' : '0 2px 6px rgba(25, 29, 36, 0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontSize: '16.5px',
                    fontWeight: 700,
                    color: isOpen ? '#FF772A' : '#191D24',
                    paddingRight: '18px',
                    lineHeight: 1.4,
                    transition: 'color 0.15s ease'
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'rgba(255, 119, 42, 0.09)' : '#F8F9FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <ChevronDown
                      size={18}
                      color={isOpen ? '#FF772A' : '#717B8C'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 26px 24px 26px',
                    fontSize: '14.5px',
                    color: '#4A5260',
                    lineHeight: 1.65,
                    borderTop: '1px solid #F1F3F5',
                    paddingTop: '18px'
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
