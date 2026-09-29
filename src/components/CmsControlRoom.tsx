import React, { useState } from 'react';
import { 
  Tv, 
  Layers, 
  Calendar, 
  Sliders, 
  Activity, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  ArrowUpRight, 
  Play, 
  Sun, 
  Zap, 
  Radio, 
  Sparkles,
  Search,
  UploadCloud,
  Clock
} from 'lucide-react';

export const CmsControlRoom: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'screens' | 'campaigns' | 'diagnostics'>('screens');
  const [syncing, setSyncing] = useState(false);
  const [globalBrightness, setGlobalBrightness] = useState(85);
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  const screens = [
    { id: 'HRB-BKC-01', name: 'BKC Financial Arterial', status: 'ONLINE', resolution: '4K P2.5', temp: '23°C', bright: '88%', activeAd: 'AURA NOVA Watch' },
    { id: 'HRB-LP-02', name: 'Lower Parel Atrium', status: 'ONLINE', resolution: 'UHD P1.8', temp: '21°C', bright: '82%', activeAd: 'VOLT Hyperion EV' },
    { id: 'HRB-WOR-03', name: 'Worli Sea Face Landmark', status: 'ONLINE', resolution: '4K P3.9', temp: '25°C', bright: '95%', activeAd: 'LUMEN Fragrance' },
    { id: 'HRB-AND-04', name: 'Andheri WEH Flyover', status: 'ONLINE', resolution: '4K P4.0', temp: '24°C', bright: '90%', activeAd: 'NEXUS Pay Fintech' },
    { id: 'HRB-BAN-05', name: 'Bandra Linking Concourse', status: 'ONLINE', resolution: 'UHD P2.8', temp: '22°C', bright: '80%', activeAd: 'TITAN DAWN IMAX 3D' },
    { id: 'HRB-AIR-06', name: 'CSMIA Terminal 2 VIP', status: 'ONLINE', resolution: 'MicroLED P1.5', temp: '19°C', bright: '75%', activeAd: 'Global Wealth Mgmt' },
  ];

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
    }, 1200);
  };

  return (
    <section 
      id="technology"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#060609',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container-wide">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '14px' }}>
            <Activity size={14} className="pulse-dot" />
            <span>HERAMBA CLOUD OS // 5G NETWORK CONTROL</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            ONE DASHBOARD. <br />
            <span className="text-gradient">EVERY DIGITAL SCREEN.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Upload. Schedule. Deploy. Monitor. Heramba's centralized cloud display management software 
            gives brands and operators millisecond-precision control over hundreds of billboard displays.
          </p>
        </div>

        {/* CMS Dashboard Mockup Box */}
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          background: '#0c0c13',
          border: '1px solid rgba(0, 229, 168, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 229, 168, 0.1)',
          overflow: 'hidden'
        }}>
          {/* Dashboard Header Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            background: '#12121c',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'rgba(0, 229, 168, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Tv size={16} color="#00E5A8" />
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '16px', letterSpacing: '-0.02em', color: '#FFF' }}>
                  HERAMBA CONTROL ROOM
                </span>
              </div>

              {/* Status metrics in header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <span>Screens Online: <strong style={{ color: '#00E5A8' }}>48 / 48</strong></span>
                <span>Active Campaigns: <strong style={{ color: '#FFF' }}>17</strong></span>
                <span>Locations: <strong style={{ color: '#FFF' }}>9 Hubs</strong></span>
                <span>Network Health: <strong style={{ color: '#00E5A8' }}>99.8%</strong></span>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handleSync}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <RefreshCw size={13} className={syncing ? 'animate-spin' : ''} />
                <span>{syncing ? 'Syncing Fleet...' : 'Sync Displays'}</span>
              </button>

              <button
                onClick={onOpenContact}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  background: '#00E5A8',
                  border: 'none',
                  color: '#050505',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <UploadCloud size={14} />
                <span>Deploy Campaign</span>
              </button>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
            background: 'rgba(5, 5, 8, 0.5)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'screens', label: 'Screen Fleet Monitor (48 Displays)' },
                { id: 'campaigns', label: 'Live Slot Rotations & Scheduling' },
                { id: 'diagnostics', label: 'Remote Diagnostics & Sensors' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: activeTab === tab.id ? 'rgba(0, 229, 168, 0.12)' : 'transparent',
                    border: activeTab === tab.id ? '1px solid #00E5A8' : '1px solid transparent',
                    color: activeTab === tab.id ? '#00E5A8' : 'var(--text-muted)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Brightness slider preview */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <Sun size={15} color="#FFB800" />
              <span>Global Luminance: {globalBrightness}%</span>
              <input
                type="range"
                min="40"
                max="100"
                value={globalBrightness}
                onChange={(e) => setGlobalBrightness(Number(e.target.value))}
                style={{ width: '90px', accentColor: '#00E5A8', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Tab 1: Screen Fleet Monitor Table */}
          {activeTab === 'screens' && (
            <div style={{ padding: '24px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: 'var(--text-dim)' }}>
                    <th style={{ padding: '12px 16px' }}>SCREEN IDENTIFIER</th>
                    <th style={{ padding: '12px 16px' }}>LOCATION</th>
                    <th style={{ padding: '12px 16px' }}>NETWORK STATUS</th>
                    <th style={{ padding: '12px 16px' }}>RESOLUTION & PITCH</th>
                    <th style={{ padding: '12px 16px' }}>HARDWARE TEMP</th>
                    <th style={{ padding: '12px 16px' }}>CURRENT BROADCAST</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {screens.map((scr, idx) => (
                    <tr 
                      key={scr.id}
                      onClick={() => setSelectedScreenIndex(idx)}
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        background: selectedScreenIndex === idx ? 'rgba(0, 229, 168, 0.05)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                    >
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#FFF' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Tv size={15} color="#00E5A8" />
                          <span>{scr.id}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#E0E0EA' }}>{scr.name}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          background: 'rgba(0, 229, 168, 0.12)',
                          color: '#00E5A8',
                          fontSize: '11px',
                          fontWeight: 700
                        }}>
                          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                          {scr.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--text-muted)' }}>{scr.resolution}</td>
                      <td style={{ padding: '14px 16px', color: '#00D2FF' }}>{scr.temp} (Optimal)</td>
                      <td style={{ padding: '14px 16px', fontWeight: 600, color: '#FFB800' }}>
                        {scr.activeAd}
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Connecting to live stream of screen ${scr.id}`);
                          }}
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#FFF',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          View Feed
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 2: Campaigns & Scheduling */}
          {activeTab === 'campaigns' && (
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {[
                  { client: 'AURA Nova Watches', duration: '14 Days Left', slots: '15s every 4 mins', screens: 'All 6 Key Hubs', reach: '5.8M Impressions' },
                  { client: 'VOLT Hyperion EV', duration: '28 Days Left', slots: '15s every 4 mins', screens: 'BKC, Worli, Airport', reach: '4.2M Impressions' },
                  { client: 'LUMEN Haute Fragrance', duration: '7 Days Left', slots: '15s every 4 mins', screens: 'Lower Parel Atrium', reach: '1.9M Impressions' },
                  { client: 'NEXUS Pay Banking', duration: '21 Days Left', slots: '15s every 4 mins', screens: 'Andheri & BKC', reach: '6.1M Impressions' },
                ].map((camp, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '20px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontWeight: 800, fontSize: '16px', color: '#FFF' }}>{camp.client}</span>
                      <span style={{ fontSize: '11px', color: '#00E5A8', background: 'rgba(0, 229, 168, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                        ACTIVE
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div>Remaining: <strong>{camp.duration}</strong></div>
                      <div>Rotation: <strong>{camp.slots}</strong></div>
                      <div>Locations: <strong>{camp.screens}</strong></div>
                      <div>Delivered: <strong style={{ color: '#00E5A8' }}>{camp.reach}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Remote Diagnostics */}
          {activeTab === 'diagnostics' && (
            <div style={{ padding: '32px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>POWER REDUNDANCY</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#00E5A8', marginTop: '4px' }}>Dual Grid + UPS</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Zero outage failover online</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>NETWORK CONNECTION</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#00D2FF', marginTop: '4px' }}>Dual 5G Private APN</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Latency: 12ms avg</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>HARDWARE SENSORS</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFB800', marginTop: '4px' }}>Thermal & Ambient Lux</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Auto-brightness active</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>SECURITY & DRM</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#7C5CFF', marginTop: '4px' }}>Hardware Encrypted</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Tamper-proof broadcast loop</div>
                </div>
              </div>
            </div>
          )}

          {/* Footer of CMS */}
          <div style={{
            padding: '16px 24px',
            background: 'rgba(5, 5, 8, 0.8)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E5A8' }} />
              <span>Broadcast Engine running firmware <strong>v4.8.2-LTS</strong> (Mumbai Cluster)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>Proof-of-play cryptographic hashing: <strong>ACTIVE</strong></span>
              <button
                onClick={onOpenContact}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#00E5A8',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Schedule Demo Walkthrough
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
