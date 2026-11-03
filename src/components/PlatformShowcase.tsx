'use client';
import React, { useState } from 'react';
import { 
  Clock, 
  Wifi, 
  WifiOff, 
  Globe2, 
  ArrowRight, 
  ShieldCheck, 
  RefreshCw,
  Sun,
  Coffee,
  Moon
} from 'lucide-react';

export const PlatformShowcase: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const [activePillar, setActivePillar] = useState<'schedule' | 'offline' | 'fleet'>('schedule');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [internetOnline, setInternetOnline] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'toronto' | 'bengaluru' | 'dubai'>('mumbai');
  const [fleetSyncing, setFleetSyncing] = useState<boolean>(false);

  const handleFleetSync = () => {
    setFleetSyncing(true);
    setTimeout(() => setFleetSyncing(false), 800);
  };

  const daypartingData = {
    morning: {
      time: '08:00 AM – 11:30 AM',
      title: 'Artisan Breakfast & Cold Brews',
      subtitle: 'Cold Brew Combo + Croissant',
      price: '₹249',
      schedule: 'Morning Peak Commute'
    },
    afternoon: {
      time: '12:00 PM – 03:30 PM',
      title: 'Power Lunch Bowls & Express Meals',
      subtitle: 'Quinoa Bowl + Berry Sparkler',
      price: '₹420',
      schedule: 'Corporate Midday Rotation'
    },
    evening: {
      time: '06:00 PM – 11:00 PM',
      title: 'Evening Specials & Dinner Delights',
      subtitle: 'Woodfired Pizza & Crafted Dessert',
      price: '₹650',
      schedule: 'Leisure & Footfall Prime'
    }
  };

  const fleetData = {
    mumbai: {
      location: 'BKC Financial Arterial Flagship',
      screens: '48 Active Displays',
      resolution: '4K UHD • 60 FPS',
      storage: '4.2 GB / 32 GB Cached',
      activeContent: 'Spring Apparel 4K Reel'
    },
    toronto: {
      location: 'Queensway Medical & Diagnostic Clinic',
      screens: '18 Active Displays',
      resolution: '4K UHD • 60 FPS',
      storage: '2.8 GB / 32 GB Cached',
      activeContent: 'OPD Queue Stream + Wellness'
    },
    bengaluru: {
      location: 'Indiranagar Premium Lifestyle Retail',
      screens: '32 Active Displays',
      resolution: '4K UHD • 60 FPS',
      storage: '5.1 GB / 32 GB Cached',
      activeContent: 'Luxury Watches Showcase'
    },
    dubai: {
      location: 'Downtown Concourse Mega Wall',
      screens: '14 Active Displays',
      resolution: '8K Video Wall • 60 FPS',
      storage: '6.4 GB / 64 GB Cached',
      activeContent: 'Electric Mobility Cinematic'
    }
  };

  const pillars = [
    {
      id: 'schedule',
      title: 'Dayparting Automation',
      desc: 'Content rotates dynamically by time & traffic',
      icon: <Clock size={16} />
    },
    {
      id: 'offline',
      title: 'Edge Fail-Safe Caching',
      desc: 'Zero downtime if local Wi-Fi drops',
      icon: <WifiOff size={16} />
    },
    {
      id: 'fleet',
      title: 'Fleet Orchestration',
      desc: 'Unified control across 1 to 5,000+ displays',
      icon: <Globe2 size={16} />
    }
  ] as const;

  return (
    <section style={{
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      padding: '90px 0',
      borderTop: '1px solid #1A1A1A',
      borderBottom: '1px solid #1A1A1A',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#FFE600',
            marginBottom: '12px'
          }}>
            Architecture & Reliability
          </p>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '14px',
            maxWidth: '780px'
          }}>
            Zero-Failure Display Architecture.{' '}
            <span style={{ color: '#FFE600' }}>Built for Scale.</span>
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#888888',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: '600px'
          }}>
            No frozen screens, manual USB sticks, or lost revenue. Inspect how Heramba handles real-world signage environments.
          </p>
        </div>

        {/* 3 Pillar Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }} id="pillar-tabs">
          {pillars.map((tab) => {
            const isSelected = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as any)}
                className={`showcase-tab-btn ${isSelected ? 'selected' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  backgroundColor: isSelected ? '#141414' : '#0D0D0D',
                  border: isSelected ? '1px solid #FFE600' : '1px solid #1F1F1F',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease'
                }}
              >
                <div style={{
                  color: isSelected ? '#000000' : '#888888',
                  backgroundColor: isSelected ? '#FFE600' : '#1A1A1A',
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background-color 0.15s ease, color 0.15s ease'
                }}>
                  {tab.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: isSelected ? '#FFE600' : '#D4D4D4',
                    lineHeight: 1.25
                  }}>
                    {tab.title}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: isSelected ? '#AAAAAA' : '#666666',
                    marginTop: '2px',
                    lineHeight: 1.3
                  }}>
                    {tab.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid #222222',
          borderRadius: '8px',
          padding: '36px'
        }}>

          {/* PILLAR 1: AUTOMATED DAYPARTING */}
          {activePillar === 'schedule' && (
            <div key="schedule" className="tab-pane-fade" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFE600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  Time-Based Scheduling
                </p>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  Menus and promotions shift on schedule, automatically.
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  Set rules once. Screens automatically switch playlists based on time of day, customer demographics, or POS stock levels.
                </p>

                {/* Time Selectors */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '26px' }}>
                  {[
                    { id: 'morning', label: 'Morning Commute', time: '08:00 AM', icon: <Sun size={14} /> },
                    { id: 'afternoon', label: 'Midday Lunch', time: '01:00 PM', icon: <Coffee size={14} /> },
                    { id: 'evening', label: 'Evening Prime', time: '07:00 PM', icon: <Moon size={14} /> }
                  ].map((slot) => {
                    const isSlot = timeSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setTimeSlot(slot.id as any)}
                        className="slot-toggle-btn"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          backgroundColor: isSlot ? 'rgba(255, 230, 0, 0.08)' : '#161616',
                          color: isSlot ? '#FFE600' : '#888888',
                          border: isSlot ? '1px solid #FFE600' : '1px solid #242424',
                          fontWeight: 600,
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'border-color 0.15s ease, color 0.15s ease'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: isSlot ? '#FFE600' : '#666666' }}>{slot.icon}</span>
                          <span style={{ color: isSlot ? '#FFFFFF' : 'inherit' }}>{slot.label}</span>
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: isSlot ? '#FFE600' : '#555555',
                          fontWeight: 700
                        }}>
                          {slot.time}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={onOpenTrial}
                  className="cta-action-btn"
                  style={{
                    backgroundColor: '#FFE600',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '11px 22px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  Create Schedule
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </div>

              {/* Minimal Dark Display Preview */}
              <div style={{
                backgroundColor: '#0A0A0A',
                borderRadius: '6px',
                border: '1px solid #242424',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '12px 18px',
                  borderBottom: '1px solid #1F1F1F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#666666'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFE600' }} />
                    <span style={{ color: '#AAAAAA', fontWeight: 600 }}>LIVE BROADCAST</span>
                  </div>
                  <span style={{ color: '#FFE600', fontWeight: 700 }}>{daypartingData[timeSlot].time}</span>
                </div>

                <div style={{ padding: '36px 28px', textAlign: 'center' }}>
                  <span style={{
                    fontSize: '11px',
                    color: '#888888',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    {daypartingData[timeSlot].schedule}
                  </span>

                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    lineHeight: 1.2
                  }}>
                    {daypartingData[timeSlot].title}
                  </h4>

                  <div style={{
                    backgroundColor: '#141414',
                    border: '1px solid #242424',
                    borderRadius: '6px',
                    padding: '14px 20px',
                    margin: '0 auto 20px auto',
                    maxWidth: '360px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '13px', color: '#CCCCCC', fontWeight: 500 }}>
                      {daypartingData[timeSlot].subtitle}
                    </span>
                    <span style={{ fontSize: '15px', color: '#FFE600', fontWeight: 800 }}>
                      {daypartingData[timeSlot].price}
                    </span>
                  </div>

                  <div style={{
                    fontSize: '12px',
                    color: '#555555',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px'
                  }}>
                    <span>POS Synchronized</span>
                    <span>•</span>
                    <span>Dynamic Pricing</span>
                    <span>•</span>
                    <span>Zero Lag</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 2: EDGE OFFLINE PLAYBACK */}
          {activePillar === 'offline' && (
            <div key="offline" className="tab-pane-fade" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFE600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  Edge Reliability
                </p>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  Zero blackouts. Media plays directly from device storage.
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  Traditional signage tools stream from the cloud and freeze when venue Wi-Fi stutters. Heramba caches all 4K content locally on the player SSD.
                </p>

                {/* Interactive Network Toggle */}
                <div style={{
                  backgroundColor: '#161616',
                  border: '1px solid #242424',
                  borderRadius: '6px',
                  padding: '16px',
                  marginBottom: '18px'
                }}>
                  <div style={{ fontSize: '12px', color: '#888888', marginBottom: '10px', fontWeight: 600 }}>
                    Simulate Network State:
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setInternetOnline(true)}
                      className="network-toggle-btn"
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '4px',
                        border: internetOnline ? '1px solid #FFE600' : '1px solid #242424',
                        backgroundColor: internetOnline ? 'rgba(255, 230, 0, 0.08)' : '#0E0E0E',
                        color: internetOnline ? '#FFE600' : '#666666',
                        fontWeight: 700,
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'border-color 0.15s ease, color 0.15s ease'
                      }}
                    >
                      <Wifi size={14} />
                      Connected
                    </button>
                    <button
                      onClick={() => setInternetOnline(false)}
                      className="network-toggle-btn"
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '4px',
                        border: !internetOnline ? '1px solid #FFE600' : '1px solid #242424',
                        backgroundColor: !internetOnline ? 'rgba(255, 230, 0, 0.08)' : '#0E0E0E',
                        color: !internetOnline ? '#FFE600' : '#666666',
                        fontWeight: 700,
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'border-color 0.15s ease, color 0.15s ease'
                      }}
                    >
                      <WifiOff size={14} />
                      Wi-Fi Lost
                    </button>
                  </div>
                </div>

                <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
                  Telemetry queues locally and reconciles the instant connectivity returns.
                </p>
              </div>

              {/* Diagnostic Box */}
              <div style={{
                backgroundColor: '#0A0A0A',
                borderRadius: '6px',
                border: '1px solid #242424',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '12px 18px',
                  borderBottom: '1px solid #1F1F1F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#666666'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: internetOnline ? '#FFE600' : '#666666'
                    }} />
                    <span style={{ color: '#AAAAAA', fontWeight: 600 }}>PLAYER WATCHDOG</span>
                  </div>
                  <span style={{ color: '#FFE600', fontWeight: 700 }}>
                    {internetOnline ? 'CLOUD CONNECTED' : 'OFFLINE CACHE RUNNING'}
                  </span>
                </div>

                <div style={{ padding: '30px 24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 16px',
                    backgroundColor: '#141414',
                    border: '1px solid #242424',
                    borderRadius: '6px',
                    marginBottom: '18px'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      backgroundColor: '#FFE600',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {internetOnline ? <Wifi size={18} /> : <ShieldCheck size={18} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF' }}>
                        {internetOnline ? 'Real-Time Sync Active' : 'Offline Fail-Safe Engaged'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#777777', marginTop: '2px' }}>
                        {internetOnline 
                          ? 'Device pinging cloud CMS with sub-second latency.'
                          : 'Zero frame drop. Video loops seamlessly from local storage.'}
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                    <div className="metric-chip">
                      <div style={{ fontSize: '11px', color: '#666666' }}>Framerate</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFE600', marginTop: '4px' }}>60 FPS</div>
                    </div>
                    <div className="metric-chip">
                      <div style={{ fontSize: '11px', color: '#666666' }}>Local Cache</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>100% Ready</div>
                    </div>
                    <div className="metric-chip">
                      <div style={{ fontSize: '11px', color: '#666666' }}>Blackout Risk</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFE600', marginTop: '4px' }}>0.00%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 3: CENTRALIZED FLEET */}
          {activePillar === 'fleet' && (
            <div key="fleet" className="tab-pane-fade" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '40px',
              alignItems: 'center'
            }} id="showcase-subgrid">
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFE600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  Fleet Management
                </p>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  Manage 5,000+ displays as easily as a single screen.
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  Organize displays by city, zone, or screen size. Push updates across your global network in seconds.
                </p>

                {/* City Selectors */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
                  {[
                    { id: 'mumbai', label: 'Mumbai Flagship' },
                    { id: 'toronto', label: 'Toronto Clinic' },
                    { id: 'bengaluru', label: 'Bengaluru Retail' },
                    { id: 'dubai', label: 'Dubai Wall' }
                  ].map((city) => {
                    const isCity = selectedCity === city.id;
                    return (
                      <button
                        key={city.id}
                        onClick={() => setSelectedCity(city.id as any)}
                        className="slot-toggle-btn"
                        style={{
                          padding: '10px 12px',
                          borderRadius: '6px',
                          backgroundColor: isCity ? 'rgba(255, 230, 0, 0.08)' : '#161616',
                          color: isCity ? '#FFE600' : '#888888',
                          border: isCity ? '1px solid #FFE600' : '1px solid #242424',
                          fontWeight: 600,
                          fontSize: '12.5px',
                          cursor: 'pointer',
                          transition: 'border-color 0.15s ease, color 0.15s ease',
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
                  className="cta-secondary-btn"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #FFE600',
                    color: '#FFE600',
                    borderRadius: '6px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    padding: '9px 16px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <RefreshCw size={13} className={fleetSyncing ? 'rotate-anim' : ''} />
                  <span>{fleetSyncing ? 'Synchronizing Fleet...' : 'Trigger Network Sync'}</span>
                </button>
              </div>

              {/* Fleet Display Box */}
              <div style={{
                backgroundColor: '#0A0A0A',
                borderRadius: '6px',
                border: '1px solid #242424',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '12px 18px',
                  borderBottom: '1px solid #1F1F1F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#666666'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFE600' }} />
                    <span style={{ color: '#AAAAAA', fontWeight: 600 }}>CLUSTER // {selectedCity.toUpperCase()}</span>
                  </div>
                  <span style={{ color: '#FFE600', fontWeight: 700 }}>
                    {fleetData[selectedCity].screens}
                  </span>
                </div>

                <div style={{ padding: '26px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {fleetData[selectedCity].location}
                  </div>
                  <div style={{ fontSize: '12px', color: '#FFE600', fontWeight: 600, marginBottom: '18px' }}>
                    {fleetData[selectedCity].resolution}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                    <div className="metric-chip">
                      <div style={{ fontSize: '11px', color: '#666666' }}>Active Content</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC', marginTop: '3px' }}>
                        {fleetData[selectedCity].activeContent}
                      </div>
                    </div>
                    <div className="metric-chip">
                      <div style={{ fontSize: '11px', color: '#666666' }}>Cached Storage</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC', marginTop: '3px' }}>
                        {fleetData[selectedCity].storage}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '4px',
                    background: '#141414',
                    border: '1px solid #222222',
                    fontSize: '11px',
                    color: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>Uptime SLA: 99.98%</span>
                    <span style={{ color: '#FFE600' }}>Cloud Synchronized</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        /* Minimal Tab Fade In */
        .tab-pane-fade {
          animation: tabFadeIn 0.2s ease both;
        }

        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Rotating sync icon */
        .rotate-anim {
          animation: spinSync 0.8s linear infinite;
        }

        @keyframes spinSync {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Clean plain color hover */
        .showcase-tab-btn:hover:not(.selected) {
          border-color: #333333 !important;
          background-color: #121212 !important;
        }

        .slot-toggle-btn:hover {
          border-color: #FFE600 !important;
          color: #FFFFFF !important;
        }

        .network-toggle-btn:hover {
          border-color: #FFE600 !important;
        }

        .metric-chip {
          background: #141414;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #222222;
          transition: border-color 0.15s ease;
        }

        .metric-chip:hover {
          border-color: #FFE600;
        }

        .cta-action-btn:hover {
          background-color: #F5DC00 !important;
        }

        .cta-secondary-btn:hover {
          background-color: rgba(255, 230, 0, 0.08) !important;
        }

        @media (max-width: 960px) {
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
