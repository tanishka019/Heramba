'use client';
import React, { useState } from 'react';
import { 
  Clock, 
  Wifi, 
  WifiOff, 
  Globe2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  RefreshCw,
  Coffee,
  Sun,
  Moon
} from 'lucide-react';

export const PlatformShowcase: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const [activePillar, setActivePillar] = useState<'schedule' | 'offline' | 'fleet'>('schedule');
  
  // Dayparting states
  const [timeSlot, setTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  
  // Offline simulation state
  const [internetOnline, setInternetOnline] = useState<boolean>(true);
  
  // Fleet selection state
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'toronto' | 'bengaluru' | 'dubai'>('mumbai');
  const [fleetSyncing, setFleetSyncing] = useState<boolean>(false);

  const handleFleetSync = () => {
    setFleetSyncing(true);
    setTimeout(() => setFleetSyncing(false), 900);
  };

  const daypartingData = {
    morning: {
      time: '08:00 AM – 11:30 AM',
      title: 'Artisan Breakfast & Cold Brews',
      tag: 'Morning Rush Automation',
      highlight: 'Cold Brew Combo + Croissant ₹249',
      footfall: 'Peak Commute Transit',
      conversion: '+42% Breakfast Take-rate'
    },
    afternoon: {
      time: '12:00 PM – 03:30 PM',
      title: 'Power Lunch Bowls & Express Meals',
      tag: 'Midday High-Margin Rotation',
      highlight: 'Farm Fresh Quinoa Bowl + Berry Fizz ₹420',
      footfall: 'Corporate Lunch Gathering',
      conversion: '+35% Basket Size'
    },
    evening: {
      time: '06:00 PM – 11:00 PM',
      title: 'Evening Specials & Dinner Delights',
      tag: 'Dine-In Merchandising',
      highlight: 'Woodfired Truffle Pizza & Dessert ₹650',
      footfall: 'Leisure & Family Footfall',
      conversion: '+48% Premium Upsell'
    }
  };

  const fleetData = {
    mumbai: {
      location: 'BKC Financial Arterial Flagship',
      screens: '48 Active Displays',
      status: 'ONLINE • 60 FPS',
      storage: '4.2 GB / 32 GB Cached',
      activeAd: 'Spring Apparel 4K Reel',
      temp: '22°C Operating Norm'
    },
    toronto: {
      location: 'Queensway Medical & Diagnostic Clinic',
      screens: '18 Active Displays',
      status: 'ONLINE • 60 FPS',
      storage: '2.8 GB / 32 GB Cached',
      activeAd: 'OPD Queue #106 + Wellness Tips',
      temp: '20°C Operating Norm'
    },
    bengaluru: {
      location: 'Indiranagar Premium Lifestyle Retail',
      screens: '32 Active Displays',
      status: 'ONLINE • 60 FPS',
      storage: '5.1 GB / 32 GB Cached',
      activeAd: 'Luxury Watches 2026 Showcase',
      temp: '23°C Operating Norm'
    },
    dubai: {
      location: 'Downtown Concourse Mega Wall',
      screens: '14 Active Displays',
      status: 'ONLINE • 60 FPS',
      storage: '6.4 GB / 64 GB Cached',
      activeAd: 'Automotive Electric Hypercar Reel',
      temp: '21°C Climate Regulated'
    }
  };

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '100px 0',
      borderBottom: '1px solid #E2E5EA',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Editorial Section Introduction: Asymmetric Split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'flex-end',
          marginBottom: '50px'
        }} id="showcase-header">
          <div>
            <h2 style={{
              fontSize: 'clamp(32px, 4.4vw, 46px)',
              fontWeight: 800,
              color: '#191D24',
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              Engineered for Autonomous, Zero-Failure Screen Operation
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#4A5260',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '680px'
            }}>
              Move beyond static digital posters. Heramba automates dynamic dayparting schedules, guarantees offline video playback during network dropouts, and enables instant centralized control across 1 or 5,000+ screens.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#F8F9FA',
              border: '1px solid #E2E5EA',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#2B3445'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              Live Interactive Architecture Demo
            </div>
            <p style={{ fontSize: '13.5px', color: '#717B8C', margin: 0 }}>
              Select a core architectural pillar below to inspect how Heramba behaves in production environments.
            </p>
          </div>
        </div>

        {/* 3 Core Architecture Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }} id="pillar-tabs">
          {[
            {
              id: 'schedule',
              title: 'Automated Dayparting Engine',
              subtitle: 'Dynamic content switching by time & footfall',
              icon: <Clock size={18} />
            },
            {
              id: 'offline',
              title: 'Edge Caching & Fail-Safe Core',
              subtitle: 'Zero downtime when venue internet drops',
              icon: <WifiOff size={18} />
            },
            {
              id: 'fleet',
              title: 'Centralized Multi-Location Fleet',
              subtitle: 'Control 1 to 5,000+ displays in real time',
              icon: <Globe2 size={18} />
            }
          ].map((tab) => {
            const isSelected = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  borderRadius: '12px',
                  backgroundColor: isSelected ? '#FFFFFF' : '#F8F9FA',
                  border: isSelected ? '2px solid #FF772A' : '1px solid #E2E5EA',
                  boxShadow: isSelected ? '0 10px 25px -4px rgba(255, 119, 42, 0.15)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: isSelected ? '#FFF5EE' : '#FFFFFF',
                  border: `1px solid ${isSelected ? 'rgba(255, 119, 42, 0.3)' : '#E2E5EA'}`,
                  color: isSelected ? '#FF772A' : '#2B3445',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {tab.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: isSelected ? '#191D24' : '#4A5260',
                    lineHeight: 1.25,
                    marginBottom: '4px'
                  }}>
                    {tab.title}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#717B8C',
                    lineHeight: 1.4
                  }}>
                    {tab.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Interactive Stage Showcase Canvas ── */}
        <div style={{
          backgroundColor: '#F8F9FA',
          border: '1px solid #E2E5EA',
          borderRadius: '16px',
          padding: '36px',
          boxShadow: '0 12px 36px -6px rgba(43, 52, 69, 0.05)'
        }}>

          {/* PILLAR 1: AUTOMATED DAYPARTING */}
          {activePillar === 'schedule' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFF5EE',
                  color: '#FF772A',
                  border: '1px solid rgba(255, 119, 42, 0.25)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  <Sparkles size={12} />
                  DAYPARTING AUTOMATION
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginBottom: '10px', lineHeight: 1.25 }}>
                  Screens Adapt to Customer Habits by Time-of-Day
                </h3>

                <p style={{ fontSize: '14.5px', color: '#4A5260', lineHeight: 1.6, marginBottom: '24px' }}>
                  Eliminate manual USB drive updates or cashier menu adjustments. Heramba automatically shifts promotional slides, price tiers, and inventory stock in real time according to scheduled rules.
                </p>

                {/* Interactive Time Selector Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {[
                    { id: 'morning', label: '08:00 AM — Morning Commute', icon: <Sun size={15} /> },
                    { id: 'afternoon', label: '01:00 PM — Lunch & Midday', icon: <Coffee size={15} /> },
                    { id: 'evening', label: '07:00 PM — Evening Leisure', icon: <Moon size={15} /> }
                  ].map((slot) => {
                    const isSlot = timeSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setTimeSlot(slot.id as any)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          backgroundColor: isSlot ? '#FF772A' : '#FFFFFF',
                          color: isSlot ? '#FFFFFF' : '#2B3445',
                          border: isSlot ? '1px solid #FF772A' : '1px solid #E2E5EA',
                          fontWeight: 700,
                          fontSize: '13.5px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {slot.icon}
                          {slot.label}
                        </span>
                        <span style={{ fontSize: '11px', opacity: isSlot ? 0.9 : 0.6 }}>
                          {isSlot ? '● ACTIVE PREVIEW' : 'Click to preview'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={onOpenTrial}
                  className="btn btn-primary"
                  style={{ borderRadius: '8px', padding: '11px 22px', fontSize: '13.5px' }}
                >
                  <span>Build Dayparting Schedule Free</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Real Simulation Screen for Dayparting */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '6px solid #1E2532',
                boxShadow: '0 20px 50px -10px rgba(43, 52, 69, 0.15)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  backgroundColor: '#1E2532',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    HERAMBA 4K DISPLAY // LIVE AUTOMATION
                  </div>
                  <div style={{ color: '#FF772A' }}>
                    {daypartingData[timeSlot].time}
                  </div>
                </div>

                <div style={{ padding: '32px 28px', textAlign: 'center', background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF9F5 100%)' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    backgroundColor: '#FFF2E8',
                    color: '#FF772A',
                    fontSize: '11px',
                    fontWeight: 800,
                    marginBottom: '12px',
                    border: '1px solid rgba(255, 119, 42, 0.25)'
                  }}>
                    {daypartingData[timeSlot].tag}
                  </span>

                  <h4 style={{ fontSize: '26px', fontWeight: 800, color: '#191D24', marginBottom: '10px' }}>
                    {daypartingData[timeSlot].title}
                  </h4>

                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E5EA',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    margin: '20px 0',
                    boxShadow: '0 4px 16px rgba(25, 29, 36, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Featured Highlight</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#FF772A' }}>{daypartingData[timeSlot].highlight}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Measured Lift</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#10B981' }}>{daypartingData[timeSlot].conversion}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: '#717B8C', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                    <span>● Synced with Cloud POS</span>
                    <span>● Instant QR Order Enabled</span>
                    <span>● Dynamic Inventory Auto-Sold-Out</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 2: EDGE OFFLINE PLAYBACK */}
          {activePillar === 'offline' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFF5EE',
                  color: '#FF772A',
                  border: '1px solid rgba(255, 119, 42, 0.25)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  <ShieldCheck size={12} />
                  EDGE FAIL-SAFE CACHING
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginBottom: '10px', lineHeight: 1.25 }}>
                  Zero Blackouts. Zero Glitches. Even Without Internet.
                </h3>

                <p style={{ fontSize: '14.5px', color: '#4A5260', lineHeight: 1.6, marginBottom: '24px' }}>
                  Most traditional signage tools stream media from the web. If mall or clinic Wi-Fi drops, displays freeze with embarrassing error screens. Heramba pre-caches all 4K playlists onto hardware memory.
                </p>

                {/* Interactive Simulator Toggle */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E5EA',
                  borderRadius: '10px',
                  padding: '18px 20px',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#191D24', marginBottom: '10px' }}>
                    Simulate Venue Network State:
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setInternetOnline(true)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '6px',
                        border: internetOnline ? '2px solid #10B981' : '1px solid #E2E5EA',
                        backgroundColor: internetOnline ? 'rgba(16, 185, 129, 0.08)' : '#F8F9FA',
                        color: internetOnline ? '#10B981' : '#4A5260',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Wifi size={16} />
                      Internet Active
                    </button>
                    <button
                      onClick={() => setInternetOnline(false)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '6px',
                        border: !internetOnline ? '2px solid #EF4444' : '1px solid #E2E5EA',
                        backgroundColor: !internetOnline ? 'rgba(239, 68, 68, 0.08)' : '#F8F9FA',
                        color: !internetOnline ? '#EF4444' : '#4A5260',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <WifiOff size={16} />
                      Simulate Wi-Fi Drop
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: '13.5px', color: '#717B8C', lineHeight: 1.5 }}>
                  ● Hardware caches up to 64GB of local video loops<br/>
                  ● Automatically reconciles analytics telemetry when connection restores
                </div>
              </div>

              {/* Edge Architecture Diagnostic Screen */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '6px solid #1E2532',
                boxShadow: '0 20px 50px -10px rgba(43, 52, 69, 0.15)',
                overflow: 'hidden'
              }}>
                <div style={{
                  backgroundColor: '#1E2532',
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: internetOnline ? '#10B981' : '#F59E0B'
                    }} />
                    <span>DEVICE HARDWARE WATCHDOG</span>
                  </div>
                  <div>
                    {internetOnline ? 'STATUS: CLOUD LINKED' : 'STATUS: OFFLINE EDGE CACHE'}
                  </div>
                </div>

                <div style={{ padding: '30px 26px' }}>
                  <div style={{
                    backgroundColor: internetOnline ? 'rgba(16, 185, 129, 0.08)' : '#FFF5EE',
                    border: `1px solid ${internetOnline ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 119, 42, 0.3)'}`,
                    borderRadius: '10px',
                    padding: '16px 20px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      backgroundColor: internetOnline ? '#10B981' : '#FF772A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {internetOnline ? <Wifi size={22} /> : <ShieldCheck size={22} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#191D24' }}>
                        {internetOnline ? 'Full Cloud Sync Mode Active' : 'Edge Protection Engaged'}
                      </div>
                      <div style={{ fontSize: '13px', color: '#4A5260', marginTop: '2px' }}>
                        {internetOnline 
                          ? 'Real-time telemetry heartbeat arriving every 1,500ms.'
                          : 'Local SSD memory streaming video seamlessly. 0 dropped frames.'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center' }}>
                    <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '8px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Display Frame Rate</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginTop: '4px' }}>60.0 FPS</div>
                    </div>
                    <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '8px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Memory Buffer</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginTop: '4px' }}>100% Ready</div>
                    </div>
                    <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '8px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Blackout Risk</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#10B981', marginTop: '4px' }}>0.00%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 3: CENTRALIZED FLEET MATRIX */}
          {activePillar === 'fleet' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFF5EE',
                  color: '#FF772A',
                  border: '1px solid rgba(255, 119, 42, 0.25)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  <Globe2 size={12} />
                  ENTERPRISE FLEET MATRIX
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#191D24', marginBottom: '10px', lineHeight: 1.25 }}>
                  Manage 5,000+ Displays as Effortlessly as 1 Screen
                </h3>

                <p style={{ fontSize: '14.5px', color: '#4A5260', lineHeight: 1.6, marginBottom: '24px' }}>
                  Group physical screens by territory, brand category, or floor level. Push urgent firmware or marketing campaign updates simultaneously across global offices.
                </p>

                {/* City Selector Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
                  {[
                    { id: 'mumbai', label: 'Mumbai Flagship' },
                    { id: 'toronto', label: 'Toronto Clinic' },
                    { id: 'bengaluru', label: 'Bengaluru Retail' },
                    { id: 'dubai', label: 'Dubai Mall Wall' }
                  ].map((city) => {
                    const isCity = selectedCity === city.id;
                    return (
                      <button
                        key={city.id}
                        onClick={() => setSelectedCity(city.id as any)}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '8px',
                          backgroundColor: isCity ? '#2B3445' : '#FFFFFF',
                          color: isCity ? '#FFFFFF' : '#2B3445',
                          border: isCity ? '1px solid #2B3445' : '1px solid #E2E5EA',
                          fontWeight: 700,
                          fontSize: '12.5px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          textAlign: 'left'
                        }}
                      >
                        {city.label}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleFleetSync}
                  className="btn btn-secondary"
                  style={{
                    borderRadius: '8px',
                    borderColor: '#2B3445',
                    color: '#2B3445',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '10px 18px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <RefreshCw size={14} className={fleetSyncing ? 'pulse-dot' : ''} />
                  <span>{fleetSyncing ? 'Syncing Network...' : 'Push Instant Global Firmware Sync'}</span>
                </button>
              </div>

              {/* Fleet Matrix Diagnostic Screen */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '6px solid #1E2532',
                boxShadow: '0 20px 50px -10px rgba(43, 52, 69, 0.15)',
                overflow: 'hidden'
              }}>
                <div style={{
                  backgroundColor: '#1E2532',
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span>TELEMETRY CLUSTER // {selectedCity.toUpperCase()}</span>
                  </div>
                  <div style={{ color: '#FF772A' }}>
                    {fleetData[selectedCity].screens}
                  </div>
                </div>

                <div style={{ padding: '26px' }}>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#191D24', marginBottom: '4px' }}>
                    {fleetData[selectedCity].location}
                  </div>
                  <div style={{ fontSize: '13px', color: '#10B981', fontWeight: 700, marginBottom: '18px' }}>
                    ● {fleetData[selectedCity].status}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Active Broadcast</div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FF772A', marginTop: '2px' }}>
                        {fleetData[selectedCity].activeAd}
                      </div>
                    </div>

                    <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E5EA' }}>
                      <div style={{ fontSize: '11px', color: '#717B8C', fontWeight: 600 }}>Hardware Storage</div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#2B3445', marginTop: '2px' }}>
                        {fleetData[selectedCity].storage}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: '#FFF5EE',
                    border: '1px solid rgba(255, 119, 42, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#FF772A',
                    fontWeight: 700
                  }}>
                    <span>Hardware Sensor: {fleetData[selectedCity].temp}</span>
                    <span>99.98% SLA Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          #showcase-header {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #pillar-tabs {
            grid-template-columns: 1fr !important;
          }
          #showcase-subgrid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};
