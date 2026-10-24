'use client';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  Coffee, 
  ShoppingBag, 
  Building2, 
  HeartPulse,
  ShieldCheck,
  Wifi,
  QrCode,
  TrendingUp
} from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenContact }) => {
  const [activePreview, setActivePreview] = useState<'retail' | 'restaurant' | 'corporate' | 'healthcare'>('retail');

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      paddingTop: '60px',
      paddingBottom: '80px',
      borderBottom: '1px solid #E2E5EA',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Light Orange & Soft Grey ambient glow wash */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '420px',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255, 119, 42, 0.08) 0%, rgba(248, 249, 250, 0) 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Subtle modern dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#E2E5EA 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px',
        opacity: 0.65,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* ── Main Hero Text & Call to Action ── */}
        <div style={{ textAlign: 'center', maxWidth: '940px', margin: '0 auto 44px auto' }}>
          
          {/* Top Announcement Pill */}
          <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: '#FFF5EE',
              border: '1px solid rgba(255, 119, 42, 0.3)',
              boxShadow: '0 2px 8px rgba(255, 119, 42, 0.08)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#FF772A'
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FF772A',
                boxShadow: '0 0 0 3px rgba(255, 119, 42, 0.2)'
              }} />
              <span>Next-Gen Cloud Display Network • 2026 Edition</span>
              <span style={{ color: '#E2E5EA' }}>|</span>
              <span style={{ color: '#4A5260', fontWeight: 500 }}>No Special Hardware Required</span>
            </div>
          </div>

          {/* Hero Main Headline */}
          <h1 style={{
            fontSize: 'clamp(36px, 5.4vw, 60px)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: '#191D24',
            letterSpacing: '-0.038em',
            marginBottom: '22px'
          }}>
            Turn Any Screen Into An{' '}
            <span style={{ color: '#FF772A', display: 'inline-block' }}>
              Intelligent Display &amp; Sales Engine
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(16px, 2.1vw, 19px)',
            color: '#4A5260',
            maxWidth: '780px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            AI-powered digital signage software to effortlessly publish dynamic promotions, 
            interactive menus, live analytics, and video walls. Control 1 screen or 10,000+ global displays from a single dashboard.
          </p>

          {/* Dual CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '24px'
          }}>
            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{
                padding: '15px 34px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '8px',
                backgroundColor: '#FF772A',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(255, 119, 42, 0.32)'
              }}
            >
              <span>START 14-DAY FREE TRIAL</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={onOpenContact}
              className="btn"
              style={{
                padding: '15px 30px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                color: '#2B3445',
                border: '1px solid #D8DCE3',
                boxShadow: '0 2px 6px rgba(25, 29, 36, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF772A';
                e.currentTarget.style.color = '#FF772A';
                e.currentTarget.style.backgroundColor = '#FFF5EE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D8DCE3';
                e.currentTarget.style.color = '#2B3445';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              <Play size={15} fill="#2B3445" color="#2B3445" />
              <span>Schedule Live Demo</span>
            </button>
          </div>

          {/* Integrated Trust & Velocity Proof Strip */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap',
            padding: '10px 24px',
            borderRadius: '9999px',
            backgroundColor: '#F8F9FA',
            border: '1px solid #E2E5EA',
            fontSize: '13px',
            color: '#4A5260',
            boxShadow: '0 2px 8px rgba(25, 29, 36, 0.02)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FF772A" /> No credit card required
            </span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FF772A" /> Compatible with Any TV (5-min setup)
            </span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={14} fill="#FF772A" color="#FF772A" /> <strong>4.9/5</strong> Capterra &amp; G2
            </span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#10B981" /> <strong>99.98%</strong> Cloud Uptime SLA
            </span>
          </div>
        </div>

        {/* ── Interactive Commercial Display Console (Centerpiece) ── */}
        <div style={{
          maxWidth: '1080px',
          margin: '0 auto',
          position: 'relative'
        }}>

          {/* Floating Left Mini Widget */}
          <div style={{
            position: 'absolute',
            top: '-18px',
            left: '-16px',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid #E2E5EA',
            borderRadius: '12px',
            padding: '11px 18px',
            boxShadow: '0 16px 36px -6px rgba(43, 52, 69, 0.12), 0 4px 12px -2px rgba(255, 119, 42, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
          className="hero-floating-widget hero-float-1"
          >
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: '#FFF5EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF772A',
              boxShadow: '0 2px 8px rgba(255, 119, 42, 0.15)'
            }}>
              <Wifi size={18} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Offline Mode Active</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#191D24' }}>Zero Blackouts Guaranteed</div>
            </div>
          </div>

          {/* Floating Right Mini Widget */}
          <div style={{
            position: 'absolute',
            bottom: '36px',
            right: '-16px',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid #E2E5EA',
            borderRadius: '12px',
            padding: '11px 18px',
            boxShadow: '0 16px 36px -6px rgba(43, 52, 69, 0.12), 0 4px 12px -2px rgba(255, 119, 42, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
          className="hero-floating-widget hero-float-2"
          >
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: '#FFF5EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF772A',
              boxShadow: '0 2px 8px rgba(255, 119, 42, 0.15)'
            }}>
              <TrendingUp size={18} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Sales Conversion</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FF772A' }}>+38% Footfall Engagement</div>
            </div>
          </div>

          {/* Main Display Outer Bezel */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #D8DCE3',
            borderRadius: '16px',
            boxShadow: '0 20px 60px -10px rgba(43, 52, 69, 0.08), 0 10px 30px -5px rgba(255, 119, 42, 0.1)',
            padding: '16px',
            overflow: 'hidden'
          }}>

            {/* Top Console Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '14px',
              borderBottom: '1px solid #E8EBEF',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {/* Status indicators */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF772A' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2B3445' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E2E5EA' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#2B3445', marginLeft: '6px', letterSpacing: '0.04em' }}>
                  HERAMBA CLOUD CMS // LIVE SCREEN SIMULATOR
                </span>
              </div>

              {/* Interactive Industry Switcher Tabs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {[
                  { id: 'retail', label: 'Retail Outlet', icon: <ShoppingBag size={13} /> },
                  { id: 'restaurant', label: 'QSR Dining Menu', icon: <Coffee size={13} /> },
                  { id: 'corporate', label: 'Corporate Office', icon: <Building2 size={13} /> },
                  { id: 'healthcare', label: 'Clinic & Hospital', icon: <HeartPulse size={13} /> },
                ].map((tab) => {
                  const isSelected = activePreview === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActivePreview(tab.id as any)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '7px 14px',
                        borderRadius: '6px',
                        background: isSelected ? '#FF772A' : '#F8F9FA',
                        color: isSelected ? '#FFFFFF' : '#4A5260',
                        border: isSelected ? '1px solid #FF772A' : '1px solid #E2E5EA',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? '0 2px 8px rgba(255, 119, 42, 0.25)' : 'none'
                      }}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inner Commercial Screen Display Frame */}
            <div style={{
              position: 'relative',
              marginTop: '14px',
              borderRadius: '12px',
              border: '6px solid #2B3445',
              background: '#F8F9FA',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
            }}>
              {/* Diagonal Commercial Glass Sheen */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 35%, transparent 55%)',
                pointerEvents: 'none',
                zIndex: 20
              }} />

              {/* Bottom Display Bezel Badge */}
              <div style={{
                position: 'absolute',
                bottom: '4px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '9px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: '#717B8C',
                zIndex: 10
              }}>
                HERAMBA 4K ULTRA COMMERCIAL DISPLAY
              </div>

              {/* ── Screen Content 1: Retail ── */}
              {activePreview === 'retail' && (
                <div style={{
                  width: '100%',
                  padding: '38px 32px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8F3 60%, #F5F7FA 100%)'
                }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '12px', background: '#FFF2E8', color: '#FF772A', border: '1px solid rgba(255, 119, 42, 0.3)', padding: '5px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                    <Sparkles size={13} />
                    FLASH WEEKEND SALE • 40% OFF STOREWIDE
                  </div>
                  <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#191D24', marginBottom: '10px' }}>
                    SPRING & SUMMER LUXURY APPAREL 2026
                  </h3>
                  <p style={{ fontSize: '15px', color: '#4A5260', maxWidth: '540px', margin: '0 auto 22px auto', lineHeight: 1.5 }}>
                    Scan the QR code to unlock exclusive in-store rewards. Synced in real-time with POS inventory & pricing.
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '24px',
                    background: '#FFFFFF',
                    padding: '12px 28px',
                    borderRadius: '10px',
                    border: '1px solid #E2E5EA',
                    boxShadow: '0 4px 12px rgba(25, 29, 36, 0.05)'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '10px', color: '#717B8C', textTransform: 'uppercase', fontWeight: 600 }}>Active Trigger</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#FF772A' }}>Footfall Surge Detected</div>
                    </div>
                    <div style={{ height: '30px', width: '1px', background: '#E2E5EA' }} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '10px', color: '#717B8C', textTransform: 'uppercase', fontWeight: 600 }}>Today's Footfall</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#2B3445' }}>3,140 Shoppers</div>
                    </div>
                    <div style={{ height: '30px', width: '1px', background: '#E2E5EA' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <QrCode size={26} color="#2B3445" />
                      <div style={{ fontSize: '10px', color: '#717B8C', textAlign: 'left' }}>
                        Scan To<br/><strong style={{ color: '#FF772A' }}>Redeem</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Screen Content 2: Restaurant Menu ── */}
              {activePreview === 'restaurant' && (
                <div style={{
                  width: '100%',
                  padding: '34px 28px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF9F5 60%, #F8F9FA 100%)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ display: 'inline-block', background: '#FFF2E8', color: '#FF772A', border: '1px solid rgba(255, 119, 42, 0.3)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                        LUNCH MENU SPECIAL (12:00 PM – 3:30 PM)
                      </span>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginTop: '6px' }}>
                        Artisan Bowls, Woodfired Pizzas & Fresh Brews
                      </h3>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#2B3445', background: '#EEF1F6', padding: '6px 12px', borderRadius: '6px', border: '1px solid #D8DCE3' }}>
                      ● POS Live Synced (In Stock)
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '12px' }}>
                    {[
                      { item: 'Truffle Mushroom Risotto', price: '₹480', cal: '420 kcal', tag: 'Chef Choice' },
                      { item: 'Woodfired Burrata Margherita', price: '₹550', cal: '580 kcal', tag: 'Bestseller' },
                      { item: 'Cold Brew Citrus Tonic', price: '₹220', cal: '90 kcal', tag: 'Refreshing' },
                    ].map((dish, i) => (
                      <div key={i} style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA', boxShadow: '0 2px 6px rgba(25, 29, 36, 0.03)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontSize: '11px', color: '#FF772A', fontWeight: 700, background: '#FFF5EE', padding: '2px 8px', borderRadius: '4px' }}>
                            {dish.tag}
                          </span>
                          <span style={{ fontSize: '12px', color: '#717B8C' }}>{dish.cal}</span>
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#191D24' }}>{dish.item}</div>
                        <div style={{ marginTop: '8px', fontSize: '15px', fontWeight: 800, color: '#FF772A' }}>
                          {dish.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Screen Content 3: Corporate HQ ── */}
              {activePreview === 'corporate' && (
                <div style={{
                  width: '100%',
                  padding: '34px 28px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 70%, #FFF5EE 100%)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ display: 'inline-block', background: '#EEF1F6', color: '#2B3445', border: '1px solid #D8DCE3', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                        CORPORATE LOBBY & KPI DASHBOARD
                      </span>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginTop: '6px' }}>
                        Welcome Global Partners & Board Members
                      </h3>
                    </div>
                    <div style={{ fontSize: '12px', color: '#FF772A', fontWeight: 700, background: '#FFF5EE', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(255, 119, 42, 0.3)' }}>
                      Townhall Meeting at 4:30 PM IST
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Q3 REVENUE TARGET</div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: '#FF772A', marginTop: '4px' }}>112.4%</div>
                      <div style={{ fontSize: '11px', color: '#2B3445', marginTop: '3px', fontWeight: 600 }}>Ahead of Target</div>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>EMPLOYEE NPS</div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: '#2B3445', marginTop: '4px' }}>78 / 100</div>
                      <div style={{ fontSize: '11px', color: '#717B8C', marginTop: '3px', fontWeight: 600 }}>Top 5% Industry</div>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>GLOBAL CAMPUSES</div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginTop: '4px' }}>24 Offices</div>
                      <div style={{ fontSize: '11px', color: '#FF772A', marginTop: '3px', fontWeight: 600 }}>100% Synced</div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Screen Content 4: Healthcare Clinic ── */}
              {activePreview === 'healthcare' && (
                <div style={{
                  width: '100%',
                  padding: '34px 28px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 70%, #FFF8F3 100%)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ display: 'inline-block', background: '#FFFFFF', color: '#2B3445', border: '1px solid #E2E5EA', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                        OPD PATIENT QUEUE & DIRECTORY
                      </span>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginTop: '6px' }}>
                        Consultation Waiting Lounge • Floor 2
                      </h3>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF', background: '#FF772A', padding: '6px 14px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(255, 119, 42, 0.3)' }}>
                      Token #106 → Room 3B
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Cardiology Department</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#191D24', marginTop: '2px' }}>Dr. Ananya Roy, MD</div>
                      <div style={{ fontSize: '12px', color: '#FF772A', marginTop: '6px', fontWeight: 700 }}>Now Calling: #106</div>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Orthopedics Clinic</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#191D24', marginTop: '2px' }}>Dr. Vikram Singhal, MS</div>
                      <div style={{ fontSize: '12px', color: '#2B3445', marginTop: '6px', fontWeight: 700 }}>Now Calling: #89</div>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Pediatrics Care</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#191D24', marginTop: '2px' }}>Dr. Meera Sen, DCH</div>
                      <div style={{ fontSize: '12px', color: '#2B3445', marginTop: '6px', fontWeight: 700 }}>Now Calling: #42</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Screen Feature Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              fontSize: '12px',
              color: '#717B8C',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#FF772A" />
                Offline Caching — displays continue smoothly without active internet
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} color="#2B3445" />
                Role-based access & multi-tenant security
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} color="#FF772A" />
                Plug & Play in under 5 minutes on any TV
              </span>
            </div>

          </div>

          {/* Hardware Compatibility Strip */}
          <div style={{
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#717B8C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontWeight: 600, color: '#191D24' }}>Compatible With:</span>
            <span>Samsung Tizen</span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span>LG webOS</span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span>Android TV</span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span>Amazon Fire TV</span>
            <span style={{ color: '#D8DCE3' }}>•</span>
            <span>Windows & Raspberry Pi</span>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        .hero-float-1 {
          animation: heroFloat1 6s ease-in-out infinite;
        }
        .hero-float-2 {
          animation: heroFloat2 7s ease-in-out infinite 0.5s;
        }
        @media (max-width: 900px) {
          .hero-floating-widget {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
