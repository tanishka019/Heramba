'use client';
import React from 'react';
import { Cpu, Cloud, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

export const WhatYouGet: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const pillars = [
    {
      title: 'Plug-and-Play Heramba Player Device',
      subtitle: 'Connects to any commercial screen, TV, or video wall.',
      icon: <Cpu size={26} color="#C34811" />,
      accent: '#C34811',
      features: [
        {
          label: 'Universal Usage',
          desc: 'Can be plugged into any screen of your choice via standard HDMI, USB, or native Android/webOS.'
        },
        {
          label: 'Easy to Install',
          desc: 'Easy to deploy and use in under 5 minutes. No need for a specialized technical crew to assist.'
        },
        {
          label: 'Offline Mode Enabled',
          desc: 'Zero downtime; content continues playing seamlessly on local edge storage during internet outages.'
        },
        {
          label: 'Edge Computing Architecture',
          desc: 'Smart processing happens directly on the device, eliminating constant heavy internet bandwidth streaming.'
        }
      ]
    },
    {
      title: 'Cloud-Based Software Platform',
      subtitle: 'Manage single screens to thousands of locations from one screen.',
      icon: <Cloud size={26} color="#0B369A" />,
      accent: '#0B369A',
      features: [
        {
          label: 'Smart Content Scheduling',
          desc: 'Schedule campaigns weeks in advance with automated time-of-day, dayparting, and recurring calendar rules.'
        },
        {
          label: 'Remote Device Monitoring',
          desc: 'Inspect real-time live webcam snapshots, monitor hardware temperatures, and restart screens remotely.'
        },
        {
          label: 'Live Dashboards & Integrations',
          desc: 'Connect dynamic PowerBI, Google Sheets, social media feeds, and Canva designs with 1-click sync.'
        },
        {
          label: 'Role-Based Access Control',
          desc: 'Assign store managers, regional leads, and creative designers specific screen access permissions.'
        }
      ]
    },
    {
      title: 'Display Hardware & Standees',
      subtitle: 'Turnkey commercial screens, touch totems, and video walls.',
      icon: <Monitor size={26} color="#C34811" />,
      accent: '#C34811',
      features: [
        {
          label: 'Screen Agnostic Technology',
          desc: 'Works with existing Samsung, LG, Sony, TCL, Philips, or generic commercial displays seamlessly.'
        },
        {
          label: 'Premium OEM Tie-ups',
          desc: 'Direct partnerships with leading panel manufacturers for 24/7 duty cycle commercial-grade warranties.'
        },
        {
          label: 'Fabricated Digital Standees',
          desc: 'Custom branded 55"–85" vertical interactive touch kiosks and tempered glass freestanding totems.'
        },
        {
          label: 'MicroLED & Video Walls',
          desc: 'Seamless zero-gap high-resolution video wall displays for corporate atriums and retail flagships.'
        }
      ]
    }
  ];

  return (
    <section id="what-you-get" style={{
      backgroundColor: '#F7F5F2', /* Stone Linen light wash */
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
            TURNKEY ECOSYSTEM
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            What You Get with Heramba
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            A complete, integrated solution covering edge hardware players, cloud CMS software, and commercial display screens.
          </p>
        </div>

        {/* 3 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {pillars.map((col, idx) => (
            <div
              key={idx}
              className="light-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF',
                borderColor: '#D9D1CA'
              }}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: col.accent === '#C34811' ? 'rgba(195, 72, 17, 0.08)' : 'rgba(11, 54, 154, 0.08)',
                  border: `1px solid ${col.accent === '#C34811' ? 'rgba(195, 72, 17, 0.2)' : 'rgba(11, 54, 154, 0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {col.icon}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#121826', marginBottom: '8px' }}>
                  {col.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#5E6778', marginBottom: '24px' }}>
                  {col.subtitle}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {col.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="#0B369A" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#121826' }}>
                          {feat.label}:
                        </div>
                        <div style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.5, marginTop: '2px' }}>
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ECE7E1' }}>
                <button
                  onClick={onOpenTrial}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', borderColor: '#D9D1CA', color: '#0B369A' }}
                >
                  <span>Request Hardware Specs</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
