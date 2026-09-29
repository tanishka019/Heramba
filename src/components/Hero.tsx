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
  Zap
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
      paddingTop: '65px',
      paddingBottom: '75px',
      borderBottom: '1px solid #D9D1CA',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle light background ambient grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#D9D1CA 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
        opacity: 0.65,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Hero Text Content */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 40px auto' }}>
          
          {/* Subtle Category Pill in Stone Linen & Gallery Blue */}
          <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <span className="badge-pill badge-linen" style={{ padding: '6px 14px' }}>
              <Zap size={13} fill="#C34811" color="#C34811" />
              <span>AI-Powered Cloud Display Network</span>
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(34px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#121826',
            letterSpacing: '-0.03em',
            marginBottom: '20px'
          }}>
            Digital Signage Solution — <br />
            <span style={{ color: '#C34811' }}>Lightning-fast, Real-time, Personalized</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: '#4B5563',
            maxWidth: '780px',
            margin: '0 auto 34px auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            AI-driven cloud-based digital signage solution for seamlessly managing your digital displays, 
            interactive standees, and video walls from a single screen to thousands of global locations.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '38px'
          }}>
            <button
              onClick={onOpenTrial}
              className="btn btn-primary"
              style={{ padding: '14px 34px', fontSize: '15px' }}
            >
              <span>GET A FREE TRIAL</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenContact}
              className="btn btn-secondary"
              style={{ padding: '14px 30px', fontSize: '15px', borderColor: '#0B369A', color: '#0B369A' }}
            >
              <Play size={15} fill="#0B369A" color="#0B369A" />
              <span>Schedule Live Demo</span>
            </button>
          </div>

          {/* Intelisa-Style Trust Badges with Palette */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div className="rating-item" style={{ borderColor: '#D9D1CA' }}>
              <div style={{ display: 'flex', color: '#C34811' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C34811" />
                ))}
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#121826' }}><strong>4.9/5</strong> on Capterra</span>
            </div>

            <div className="rating-item" style={{ borderColor: '#D9D1CA' }}>
              <div style={{ display: 'flex', color: '#C34811' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C34811" />
                ))}
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#121826' }}>GetApp Category Leader</span>
            </div>

            <div className="rating-item" style={{ borderColor: '#D9D1CA' }}>
              <div style={{ display: 'flex', color: '#C34811' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C34811" />
                ))}
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#121826' }}>Software Advice Top Rated</span>
            </div>
          </div>
        </div>

        {/* Interactive Screen Display Mockup */}
        <div style={{
          maxWidth: '1060px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #D9D1CA',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(11, 54, 154, 0.08)',
          padding: '16px',
          overflow: 'hidden'
        }}>
          {/* Top Mockup Header with Switcher Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            borderBottom: '1px solid #ECE7E1',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#C34811' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0B369A' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D9D1CA' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B369A', marginLeft: '6px' }}>
                HERAMBA CLOUD CMS // LIVE SCREEN PREVIEW
              </span>
            </div>

            {/* Quick Live Preview Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {[
                { id: 'retail', label: 'Retail Outlet', icon: <ShoppingBag size={13} /> },
                { id: 'restaurant', label: 'Restaurant Menu', icon: <Coffee size={13} /> },
                { id: 'corporate', label: 'Corporate Office', icon: <Building2 size={13} /> },
                { id: 'healthcare', label: 'Clinic & Hospital', icon: <HeartPulse size={13} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreview(tab.id as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: activePreview === tab.id ? '#0B369A' : '#F7F5F2',
                    color: activePreview === tab.id ? '#FFFFFF' : '#374151',
                    border: activePreview === tab.id ? '1px solid #0B369A' : '1px solid #D9D1CA',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Screen Content Viewport (Display Frame in Gallery Blue) */}
          <div style={{
            position: 'relative',
            marginTop: '12px',
            borderRadius: '10px',
            border: '8px solid #0B369A',
            background: '#F7F5F2',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Screen Bezel Brand Badge */}
            <div style={{
              position: 'absolute',
              bottom: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#D9D1CA',
              zIndex: 10
            }}>
              HERAMBA COMMERCIAL DISPLAY
            </div>

            {/* Simulated Live Content Based on Selected Tab */}
            {activePreview === 'retail' && (
              <div style={{
                width: '100%',
                padding: '40px 30px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 60%, #F5EBE6 100%)'
              }}>
                <span className="badge-pill" style={{ marginBottom: '12px', background: 'rgba(195, 72, 17, 0.1)', color: '#C34811', borderColor: 'rgba(195, 72, 17, 0.3)' }}>
                  FLASH WEEKEND PROMOTION • 40% OFF
                </span>
                <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#121826', marginBottom: '8px' }}>
                  NEW SEASON LUXURY COLLECTION 2026
                </h3>
                <p style={{ fontSize: '15px', color: '#4B5563', maxWidth: '520px', margin: '0 auto 20px auto' }}>
                  Scan the QR code at the checkout desk to unlock an instant ₹500 voucher on orders above ₹2,999.
                </p>
                <div style={{ display: 'inline-flex', gap: '16px', background: '#FFFFFF', padding: '10px 24px', borderRadius: '8px', border: '1px solid #D9D1CA', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div>
                    <div style={{ fontSize: '10px', color: '#5E6778', textTransform: 'uppercase' }}>Current Trigger</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0B369A' }}>Footfall Surge Peak</div>
                  </div>
                  <div style={{ borderLeft: '1px solid #D9D1CA', paddingLeft: '16px' }}>
                    <div style={{ fontSize: '10px', color: '#5E6778', textTransform: 'uppercase' }}>Impressions Logged</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#C34811' }}>2,480 Views Today</div>
                  </div>
                </div>
              </div>
            )}

            {activePreview === 'restaurant' && (
              <div style={{
                width: '100%',
                padding: '36px 30px',
                background: 'linear-gradient(135deg, #FFF8F3 0%, #FFFFFF 60%, #F7EFE9 100%)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <span className="badge-pill" style={{ background: '#F7F5F2', color: '#0B369A', border: '1px solid #D9D1CA' }}>
                      LUNCH MENU SPECIAL (12:00 PM - 3:30 PM)
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#121826', marginTop: '6px' }}>
                      Gourmet Artisan Bowls & Woodfired Pizzas
                    </h3>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0B369A', background: '#E8EDF8', padding: '4px 10px', borderRadius: '4px', border: '1px solid #D9D1CA' }}>
                    ● POS Synced (In Stock)
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  {[
                    { item: 'Truffle Mushroom Risotto', price: '₹480', cal: '420 kcal' },
                    { item: 'Woodfired Burrata Margherita', price: '₹550', cal: '580 kcal' },
                    { item: 'Cold Brew Citrus Tonic', price: '₹220', cal: '90 kcal' },
                  ].map((dish, i) => (
                    <div key={i} style={{ background: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#121826' }}>{dish.item}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '13px' }}>
                        <strong style={{ color: '#C34811' }}>{dish.price}</strong>
                        <span style={{ color: '#5E6778' }}>{dish.cal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePreview === 'corporate' && (
              <div style={{
                width: '100%',
                padding: '36px 30px',
                background: 'linear-gradient(135deg, #F0F4FC 0%, #FFFFFF 60%, #E3EAF7 100%)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <span className="badge-pill" style={{ background: 'rgba(11, 54, 154, 0.1)', color: '#0B369A', border: '1px solid rgba(11, 54, 154, 0.25)' }}>
                      CORPORATE BROADCAST & KPI DASHBOARD
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#121826', marginTop: '6px' }}>
                      Welcome Global Visitors to Headquarters
                    </h3>
                  </div>
                  <div style={{ fontSize: '12px', color: '#0B369A', fontWeight: 600 }}>Townhall at 4:00 PM IST</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                    <div style={{ fontSize: '11px', color: '#5E6778' }}>Q3 REVENUE TARGET</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#C34811', marginTop: '2px' }}>108.4%</div>
                    <div style={{ fontSize: '11px', color: '#0B369A', marginTop: '2px', fontWeight: 600 }}>Ahead of Schedule</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                    <div style={{ fontSize: '11px', color: '#5E6778' }}>CUSTOMER NPS SCORE</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#0B369A', marginTop: '2px' }}>74</div>
                    <div style={{ fontSize: '11px', color: '#0B369A', marginTop: '2px', fontWeight: 600 }}>Top Quartile</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                    <div style={{ fontSize: '11px', color: '#5E6778' }}>CAMPUS SITES ONLINE</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#121826', marginTop: '2px' }}>18 Offices</div>
                    <div style={{ fontSize: '11px', color: '#5E6778', marginTop: '2px' }}>Synced via 5G Cloud</div>
                  </div>
                </div>
              </div>
            )}

            {activePreview === 'healthcare' && (
              <div style={{
                width: '100%',
                padding: '36px 30px',
                background: 'linear-gradient(135deg, #F7F5F2 0%, #FFFFFF 60%, #ECE7E1 100%)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <span className="badge-pill" style={{ background: '#FFFFFF', color: '#0B369A', border: '1px solid #D9D1CA' }}>
                      OPD WAITING LOUNGE // DOCTOR DIRECTORY
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#121826', marginTop: '6px' }}>
                      Patient Education & Token Calling System
                    </h3>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#C34811' }}>
                    Token #104 → Room 3B
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                    <div style={{ fontSize: '11px', color: '#5E6778' }}>Cardiology Clinic</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#121826' }}>Dr. Ananya Roy, MD</div>
                    <div style={{ fontSize: '12px', color: '#0B369A', marginTop: '4px', fontWeight: 600 }}>Now Serving: #104</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid #D9D1CA' }}>
                    <div style={{ fontSize: '11px', color: '#5E6778' }}>Orthopedics Clinic</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#121826' }}>Dr. Vikram Singhal, MS</div>
                    <div style={{ fontSize: '12px', color: '#0B369A', marginTop: '4px', fontWeight: 600 }}>Now Serving: #88</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Features Strip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '14px',
            fontSize: '12px',
            color: '#5E6778',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#0B369A" />
              Offline mode enabled — works seamlessly without internet
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#0B369A" />
              Centralized enterprise cloud control
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="#C34811" />
              Plug and play in under 5 minutes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
