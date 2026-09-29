import React, { useState } from 'react';
import { 
  MapPin, 
  Tv, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Compass, 
  Radio,
  Sliders,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

interface LocationItem {
  id: string;
  name: string;
  sub: string;
  zone: string;
  reach: string;
  screenSize: string;
  slotsAvailable: number;
  totalSlots: number;
  peakHours: string;
  demographics: string;
  type: string;
  coordinates: { x: number; y: number }; // percentage on map
  specs: string;
  luminance: string;
}

const LOCATIONS: LocationItem[] = [
  {
    id: 'bkc',
    name: 'BKC Financial District',
    sub: 'G-Block Main Arterial (Opp. Jio World Convention)',
    zone: 'South-Central Business District',
    reach: '420,000+ / day',
    screenSize: '20 × 10 ft (200 sq.ft)',
    slotsAvailable: 3,
    totalSlots: 12,
    peakHours: '8:30 AM - 11:30 AM & 5:30 PM - 10:00 PM',
    demographics: 'C-Suite Executives, Banking & Tech Professionals, HNIs',
    type: 'Outdoor Mega 4K LED',
    coordinates: { x: 54, y: 46 },
    specs: 'P2.5 Fine Pitch • 120Hz • Liquid Cooled',
    luminance: '8,500 Nits HDR'
  },
  {
    id: 'lower-parel',
    name: 'Lower Parel Luxury Concourse',
    sub: 'Senapati Bapat Marg (High Street Phoenix / Palladium Gate)',
    zone: 'Luxury Shopping & Corporate Hub',
    reach: '310,000+ / day',
    screenSize: '18 × 12 ft (216 sq.ft)',
    slotsAvailable: 2,
    totalSlots: 10,
    peakHours: '12:00 PM - 10:30 PM Continuous',
    demographics: 'High-Net-Worth Shoppers, Fashion Enthusiasts, Agency Leaders',
    type: 'Curved Anamorphic Atrium LED',
    coordinates: { x: 42, y: 64 },
    specs: 'P1.8 Anamorphic 3D Corner Curve',
    luminance: '6,500 Nits Indoor/Semi-Outdoor'
  },
  {
    id: 'worli',
    name: 'Worli Sea Face Arterial',
    sub: 'Coastal Road Southbound Interchange Junction',
    zone: 'Ultra-Prime South Mumbai Corridor',
    reach: '550,000+ / day',
    screenSize: '30 × 15 ft (450 sq.ft)',
    slotsAvailable: 4,
    totalSlots: 12,
    peakHours: '8:00 AM - 12:00 PM & 6:00 PM - 11:30 PM',
    demographics: 'South Mumbai Residents, Senior Executives, Luxury Car Owners',
    type: 'Mega Landmark Highway Gantry',
    coordinates: { x: 36, y: 72 },
    specs: 'P3.9 Ultra-Bright • Monsoon Cyclone Rated',
    luminance: '9,000 Nits Sunlight-Master'
  },
  {
    id: 'bandra',
    name: 'Bandra Linking Road',
    sub: 'Waterfield Road Crossway (Fashion High-Street)',
    zone: 'Western Suburbs Lifestyle Epicenter',
    reach: '290,000+ / day',
    screenSize: '16 × 10 ft (160 sq.ft)',
    slotsAvailable: 5,
    totalSlots: 12,
    peakHours: '4:00 PM - 11:00 PM (Heavy Weekend Footfall)',
    demographics: 'Gen-Z, Millennials, Creative Industry, Trendsetters',
    type: 'Dual Totem LED Displays',
    coordinates: { x: 46, y: 38 },
    specs: 'P2.8 High-Contrast Vibrant Matrix',
    luminance: '7,500 Nits'
  },
  {
    id: 'andheri',
    name: 'Andheri Western Express Junction',
    sub: 'WEH Flyover Concourse (Metro Line 1 & 7 Interchange)',
    zone: 'High-Density Transit Super-Interchange',
    reach: '680,000+ / day',
    screenSize: '40 × 20 ft (800 sq.ft)',
    slotsAvailable: 2,
    totalSlots: 14,
    peakHours: '7:30 AM - 11:30 AM & 5:00 PM - 11:00 PM',
    demographics: 'Corporate Commuters, Daily Transit Passengers, Mass Reach',
    type: 'Monumental Transit Skyboard',
    coordinates: { x: 50, y: 22 },
    specs: 'P4.0 Industrial Grade • Dual Redundant 5G',
    luminance: '8,800 Nits'
  },
  {
    id: 'airport',
    name: 'CSMIA Terminal 2 (VIP Concourse)',
    sub: 'International Departures & Arrivals Arterial Access',
    zone: 'Global Gateway & Aviation Concourse',
    reach: '850,000+ / day',
    screenSize: '25 × 12 ft (300 sq.ft)',
    slotsAvailable: 1,
    totalSlots: 8,
    peakHours: '24/7 Peak Aviation Volume',
    demographics: 'International Travelers, NRI Investors, Global Tourists',
    type: 'Ultra-Fine Pitch Airport Display',
    coordinates: { x: 58, y: 30 },
    specs: 'P1.5 MicroLED • 4K Cinematic Fidelity',
    luminance: '5,000 Nits Architectural'
  }
];

export const NetworkMap: React.FC<{ onOpenEstimator: (preselectedLocation?: string) => void }> = ({ onOpenEstimator }) => {
  const [selectedId, setSelectedId] = useState<string>('bkc');

  const selectedLoc = LOCATIONS.find((l) => l.id === selectedId) || LOCATIONS[0];

  return (
    <section 
      id="network"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#050508'
      }}
    >
      <div className="container-wide">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '14px' }}>
            <Radio size={14} className="pulse-dot" />
            <span>MUMBAI PRIME GRID</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            THE HERAMBA NETWORK. <br />
            <span className="text-gradient">WHERE ATTENTION ACTUALLY HAPPENS.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Your brand doesn’t need generic impressions. It needs the <em>right</em> impressions. 
            Target verified high-density corridors across Mumbai with guaranteed placement.
          </p>
        </div>

        {/* Location Quick Switcher Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedId(loc.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '999px',
                background: selectedId === loc.id ? '#00E5A8' : 'rgba(255, 255, 255, 0.05)',
                color: selectedId === loc.id ? '#000000' : 'var(--text-white)',
                border: selectedId === loc.id ? '1px solid #00E5A8' : '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: selectedId === loc.id ? '#000' : '#00E5A8'
              }} />
              <span>{loc.name.split(' ')[0]} {loc.name.split(' ')[1] || ''}</span>
            </button>
          ))}
        </div>

        {/* Interactive Map & Telemetry Dashboard Split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '30px',
          alignItems: 'stretch'
        }} id="network-grid">
          
          {/* LEFT: Stylized Interactive Mumbai DOOH Matrix Map */}
          <div style={{
            position: 'relative',
            minHeight: '520px',
            background: 'linear-gradient(180deg, #0d0d15 0%, #08080d 100%)',
            border: '1px solid rgba(0, 229, 168, 0.25)',
            borderRadius: '24px',
            padding: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 35px rgba(0, 229, 168, 0.1)'
          }}>
            {/* Map Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              paddingBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={16} color="#00E5A8" />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff' }}>
                  GREATER MUMBAI DOOH GRID // LIVE TELEMETRY
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                COORDINATES: 19.0760° N, 72.8777° E
              </div>
            </div>

            {/* Stylized Coastal & Transit Vector Graphic */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              background: 'radial-gradient(ellipse at 50% 50%, #151522 0%, #08080d 90%)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              overflow: 'hidden'
            }}>
              {/* Cyber Road Grids */}
              <svg 
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="roadGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00E5A8" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#7C5CFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Simulated Coastline */}
                <path 
                  d="M 120 420 Q 140 320, 160 260 T 180 180 T 210 100 T 240 20" 
                  fill="none" 
                  stroke="rgba(0, 210, 255, 0.2)" 
                  strokeWidth="3" 
                  strokeDasharray="4 4"
                />

                {/* Major Expressways (WEH / Coastal Road) */}
                <path 
                  d="M 260 20 L 250 140 L 230 240 L 200 320 L 170 380 L 150 420" 
                  fill="none" 
                  stroke="url(#roadGlow)" 
                  strokeWidth="3" 
                />

                {/* Arterial Connecting Bridges */}
                <path 
                  d="M 180 200 Q 230 220, 280 200" 
                  fill="none" 
                  stroke="rgba(124, 92, 255, 0.4)" 
                  strokeWidth="2" 
                />
                <path 
                  d="M 190 280 Q 240 270, 300 290" 
                  fill="none" 
                  stroke="rgba(0, 229, 168, 0.4)" 
                  strokeWidth="2" 
                />

                {/* Grid Dots */}
                {[...Array(20)].map((_, i) => (
                  <circle 
                    key={i} 
                    cx={(i * 37) % 400 + 40} 
                    cy={(i * 29) % 360 + 30} 
                    r="1.5" 
                    fill="rgba(255, 255, 255, 0.15)" 
                  />
                ))}
              </svg>

              {/* Pinpoint Location Markers */}
              {LOCATIONS.map((loc) => {
                const isSelected = loc.id === selectedId;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedId(loc.id)}
                    style={{
                      position: 'absolute',
                      left: `${loc.coordinates.x}%`,
                      top: `${loc.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      zIndex: isSelected ? 20 : 10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    {/* Pulsing ring around marker */}
                    <div style={{
                      position: 'relative',
                      width: isSelected ? '34px' : '24px',
                      height: isSelected ? '34px' : '24px',
                      borderRadius: '50%',
                      background: isSelected ? '#00E5A8' : 'rgba(12, 12, 18, 0.8)',
                      border: isSelected ? '3px solid #FFF' : '2px solid #00E5A8',
                      boxShadow: isSelected ? '0 0 25px #00E5A8' : '0 0 10px rgba(0, 229, 168, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <Tv size={isSelected ? 16 : 12} color={isSelected ? '#050505' : '#00E5A8'} />
                    </div>

                    {/* Location Badge Tag */}
                    <div style={{
                      marginTop: '6px',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: isSelected ? 'rgba(0, 0, 0, 0.9)' : 'rgba(5, 5, 8, 0.75)',
                      border: isSelected ? '1px solid #00E5A8' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: isSelected ? '#00E5A8' : 'var(--text-white)',
                      fontSize: '11px',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none'
                    }}>
                      {loc.name.split(' ')[0]}
                    </div>
                  </div>
                );
              })}

              {/* Map Footer overlay */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '11px',
                color: 'var(--text-dim)',
                background: 'rgba(5, 5, 8, 0.8)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5A8' }} />
                  Outdoor LED
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C5CFF' }} />
                  Indoor Curated
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Location Telemetry Detail Card */}
          <div style={{
            background: 'linear-gradient(165deg, rgba(20, 20, 30, 0.95) 0%, rgba(12, 12, 18, 0.98) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
          }}>
            <div>
              {/* Location Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(0, 229, 168, 0.12)',
                  border: '1px solid rgba(0, 229, 168, 0.3)',
                  color: '#00E5A8',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  {selectedLoc.zone}
                </span>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: selectedLoc.slotsAvailable > 2 ? '#00E5A8' : '#FFB800',
                  fontWeight: 600
                }}>
                  <Radio size={14} className="pulse-dot" />
                  <span>{selectedLoc.slotsAvailable} of {selectedLoc.totalSlots} Slots Free</span>
                </div>
              </div>

              {/* Title & Sub */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '28px',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '6px',
                letterSpacing: '-0.02em'
              }}>
                {selectedLoc.name}
              </h3>

              <div style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <MapPin size={14} color="#00E5A8" />
                {selectedLoc.sub}
              </div>

              {/* Metrics Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '28px'
              }}>
                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '16px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Daily Verified Reach</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#00E5A8', marginTop: '4px' }}>{selectedLoc.reach}</div>
                </div>

                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '16px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Screen Dimensions</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>{selectedLoc.screenSize}</div>
                </div>

                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '16px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Display Hardware</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>{selectedLoc.type}</div>
                </div>

                <div style={{
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '16px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Luminance</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#00D2FF', marginTop: '4px' }}>{selectedLoc.luminance}</div>
                </div>
              </div>

              {/* Demographics & Peak hours */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                  <TrendingUp size={16} color="#7C5CFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Audience Profile:</strong> {selectedLoc.demographics}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                  <Clock size={16} color="#FFB800" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Peak Exposure Hours:</strong> {selectedLoc.peakHours}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenEstimator(selectedLoc.name)}
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Book Slots at {selectedLoc.name.split(' ')[0]}</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 990px) {
          #network-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
