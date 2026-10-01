'use client';
import React, { useState } from 'react';
import { 
  Zap, 
  WifiOff, 
  ShieldCheck, 
  Share2, 
  LayoutGrid, 
  DollarSign, 
  Sparkles, 
  Eye, 
  Hand, 
  ArrowRight,
  Check
} from 'lucide-react';

export const FeaturesTabs: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 'content',
      label: 'Lightning-fast Content Management',
      accent: '#C34811',
      items: [
        {
          number: '01',
          title: 'Lightning-fast, Plug, and Play',
          desc: 'Easy to deploy and use. Manage centrally at a press of a button. No need for a technical team to set up or configure hardware.',
          icon: <Zap size={22} color="#C34811" />
        },
        {
          number: '02',
          title: 'Plays Offline Mode & All Formats',
          desc: 'Zero downtime; it works in offline mode as well. Play social media feeds, live news, 4K videos, webpages, Canva templates, and digital menus.',
          icon: <WifiOff size={22} color="#C34811" />
        },
        {
          number: '03',
          title: 'Enterprise Safe & Secure',
          desc: 'Hardened security features including network firewalls, encrypted storage, and remote PIN protection ensure your screens remain tamper-proof.',
          icon: <ShieldCheck size={22} color="#C34811" />
        }
      ]
    },
    {
      id: 'display',
      label: 'Real-time Display Management',
      accent: '#0B369A',
      items: [
        {
          number: '01',
          title: 'Easy Social Media Integrations',
          desc: 'Seamlessly link Instagram, YouTube, X, and LinkedIn feeds to broadcast real-time customer testimonials and campaign engagement.',
          icon: <Share2 size={22} color="#0B369A" />
        },
        {
          number: '02',
          title: 'Custom Widgets & Dashboards',
          desc: 'Embed PowerBI charts, Google Sheets KPI tables, weather forecasts, clock widgets, and live web apps with zero custom coding.',
          icon: <LayoutGrid size={22} color="#0B369A" />
        },
        {
          number: '03',
          title: 'Secondary Ad Revenues',
          desc: 'Monetize excess screen time by renting programmatic advertising slots to brand partners and generate passive recurring revenue.',
          icon: <DollarSign size={22} color="#0B369A" />
        }
      ]
    },
    {
      id: 'ai',
      label: 'AI-based Personalization & Intelligence',
      accent: '#C34811',
      items: [
        {
          number: '01',
          title: 'Advanced Intelligence Features',
          desc: 'Our signage AI automatically recommends dynamic spot offers and menu dayparting based on weather, time, and purchase velocity.',
          icon: <Sparkles size={22} color="#C34811" />
        },
        {
          number: '02',
          title: 'Impressions & Dwell Time Monitoring',
          desc: 'Track estimated viewer impressions, engagement duration, and demographic trends with sensor-backed audience analytics.',
          icon: <Eye size={22} color="#0B369A" />
        },
        {
          number: '03',
          title: 'Gesture & Touch Interaction',
          desc: 'Support interactive touch kiosks, lift-and-learn retail sensors, and motion-responsive displays for high-engagement customer experiences.',
          icon: <Hand size={22} color="#C34811" />
        }
      ]
    }
  ];

  return (
    <section id="features" style={{
      backgroundColor: '#FFFFFF',
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            SYSTEM CAPABILITIES
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '14px'
          }}>
            Our Host of Features
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778', lineHeight: 1.6 }}>
            Engineered to simplify screen operations, maximize footfall engagement, and unlock dynamic content delivery across any hardware.
          </p>
        </div>

        {/* Tab Headers in Gallery Blue & Stone Linen */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '2px solid #D9D1CA',
          marginBottom: '40px',
          overflowX: 'auto'
        }}>
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`tab-button ${activeTab === idx ? 'active' : ''}`}
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                whiteSpace: 'nowrap',
                color: activeTab === idx ? '#0B369A' : '#5E6778',
                borderBottomColor: activeTab === idx ? '#0B369A' : 'transparent',
                fontWeight: activeTab === idx ? 800 : 600
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Cards for Active Tab */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {tabs[activeTab].items.map((feat) => (
            <div
              key={feat.number}
              className="light-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: '#D9D1CA'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: activeTab === 1 ? '#0B369A' : '#C34811'
                  }}>
                    {feat.number}
                  </span>

                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: activeTab === 1 ? 'rgba(11, 54, 154, 0.08)' : 'rgba(195, 72, 17, 0.08)',
                    border: `1px solid ${activeTab === 1 ? 'rgba(11, 54, 154, 0.2)' : 'rgba(195, 72, 17, 0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {feat.icon}
                  </div>
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#121826',
                  marginBottom: '10px'
                }}>
                  {feat.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#4B5563',
                  lineHeight: 1.6
                }}>
                  {feat.desc}
                </p>
              </div>

              <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #ECE7E1',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#0B369A'
              }}>
                <Check size={14} color="#0B369A" />
                <span>Fully Cloud Managed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '48px',
          background: '#F7F5F2',
          border: '1px solid #D9D1CA',
          borderRadius: '14px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#121826' }}>
              Looking for custom widgets or hardware integration?
            </div>
            <div style={{ fontSize: '13px', color: '#5E6778', marginTop: '2px' }}>
              Heramba SDK supports custom API integrations, POS synching, and enterprise SSO.
            </div>
          </div>

          <button
            onClick={onOpenTrial}
            className="btn btn-outline-primary"
            style={{ padding: '9px 20px', fontSize: '13px' }}
          >
            <span>Explore All Features</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
