'use client';
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Moon, 
  Maximize2, 
  Sliders, 
  Radio, 
  Sparkles, 
  Eye, 
  Clock, 
  Cpu, 
  CheckCircle,
  Type,
  RefreshCw,
  Tv
} from 'lucide-react';

interface CampaignData {
  id: string;
  brand: string;
  category: string;
  tagline: string;
  subtext: string;
  ctaText: string;
  accentColor: string;
  secondaryColor: string;
  bgGradient: string;
  renderType: 'watch' | 'car' | 'perfume' | 'fintech' | 'movie';
}

const CAMPAIGNS: CampaignData[] = [
  {
    id: 'c1',
    brand: 'AURA NOVA',
    category: 'LUXURY HOROLOGY',
    tagline: 'PRECISION IN EVERY MILLISECOND.',
    subtext: 'Aerospace Grade Titanium • Sapphire Tourbillon • Limited to 200 Pieces',
    ctaText: 'EXPERIENCE THE TIMEPIECE',
    accentColor: '#00E5A8',
    secondaryColor: '#FFB800',
    bgGradient: 'radial-gradient(ellipse at 60% 40%, #0d2820 0%, #050508 80%)',
    renderType: 'watch'
  },
  {
    id: 'c2',
    brand: 'VOLT HYPERION GT',
    category: 'NEXT-GEN AUTOMOTIVE',
    tagline: '1,200 HP. ZERO EMISSIONS. SILENT FURY.',
    subtext: '0-100 KM/H IN 1.8 SECONDS • DUAL SOLID-STATE MOTORS • NOW IN MUMBAI',
    ctaText: 'RESERVE PRIVATE TEST DRIVE',
    accentColor: '#00D2FF',
    secondaryColor: '#7C5CFF',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, #091e38 0%, #050508 80%)',
    renderType: 'car'
  },
  {
    id: 'c3',
    brand: 'LUMEN HAUTE PARFUM',
    category: 'PARIS • MUMBAI',
    tagline: 'SCENT OF THE UNREACHABLE.',
    subtext: 'Rare Black Oud & Iris Florentina • Handcrafted Crystal Flask',
    ctaText: 'DISCOVER AT PALLADIUM',
    accentColor: '#E2B155',
    secondaryColor: '#FF7E67',
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #291a0c 0%, #060507 80%)',
    renderType: 'perfume'
  },
  {
    id: 'c4',
    brand: 'NEXUS PAY',
    category: 'GLOBAL FINTECH',
    tagline: 'MONEY MOVES AT THE SPEED OF LIGHT.',
    subtext: 'Zero Foreign Exchange Markups • Instant Remittance in 80+ Currencies',
    ctaText: 'DOWNLOAD THE APP • GET ₹1000 BONUS',
    accentColor: '#7C5CFF',
    secondaryColor: '#00E5A8',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, #1e1236 0%, #040407 80%)',
    renderType: 'fintech'
  },
  {
    id: 'c5',
    brand: 'TITAN DAWN: 2088',
    category: 'IN CINEMAS & IMAX 3D',
    tagline: 'THE UNIVERSE WILL NEVER BE THE SAME.',
    subtext: 'Experience the 3D Anamorphic Spectacle • Directed by Christopher Nolan',
    ctaText: 'BOOK TICKETS ON BOOKMYSHOW',
    accentColor: '#FF3366',
    secondaryColor: '#FF9900',
    bgGradient: 'radial-gradient(ellipse at 50% 30%, #300c18 0%, #050508 80%)',
    renderType: 'movie'
  }
];

export const BillboardSimulator: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isNightMode, setIsNightMode] = useState(true);
  const [progress, setProgress] = useState(0);
  const [customBrandName, setCustomBrandName] = useState('');
  const [customTagline, setCustomTagline] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 100;
    const totalTime = 6000; // 6 seconds per ad
    const step = (interval / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % CAMPAIGNS.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? CAMPAIGNS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
  };

  const activeCampaign = CAMPAIGNS[currentIndex];

  return (
    <section 
      id="simulator"
      style={{
        padding: '100px 0',
        position: 'relative',
        background: isNightMode ? '#07070b' : '#14141d',
        transition: 'background 0.5s ease',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '500px',
        background: `radial-gradient(circle, ${activeCampaign.accentColor}15 0%, transparent 70%)`,
        filter: 'blur(100px)',
        pointerEvents: 'none',
        transition: 'background 0.8s ease'
      }} />

      <div className="container-wide">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-live" style={{ marginBottom: '16px' }}>
            <Radio size={14} className="pulse-dot" />
            <span>INTERACTIVE SCREEN ENGINE</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            SEE YOUR AD ON A <br />
            <span className="text-gradient">REAL DIGITAL BILLBOARD.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Experience Heramba's proprietary ultra-bright LED broadcast engine. 
            Test live campaigns, preview anamorphic 3D depth, or inject your own brand slogan in real time.
          </p>
        </div>

        {/* Billboard Frame & City Environment Container */}
        <div style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '24px',
          background: isNightMode 
            ? 'linear-gradient(180deg, #12121a 0%, #09090d 100%)' 
            : 'linear-gradient(180deg, #22222d 0%, #15151e 100%)',
          borderRadius: '28px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.85), 0 0 50px rgba(0, 229, 168, 0.1)'
        }}>

          {/* Top Control Bar of Screen */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            {/* Left Hardware Identifier */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'rgba(0, 229, 168, 0.1)',
                border: '1px solid rgba(0, 229, 168, 0.3)',
                color: '#00E5A8',
                fontSize: '12px',
                fontWeight: 700
              }}>
                <span className="pulse-dot" />
                HERAMBA-BKC-MEGA-01 [LIVE STREAM]
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Location: <strong>BKC Arterial G-Block, Mumbai</strong>
              </span>
            </div>

            {/* Right Quick Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Day/Night Toggle */}
              <button
                onClick={() => setIsNightMode(!isNightMode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: 'var(--text-white)',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isNightMode ? <Moon size={14} color="#00D2FF" /> : <Sun size={14} color="#FFB800" />}
                {isNightMode ? 'Night City' : 'Daylight 8500 nits'}
              </button>

              {/* Custom Ad Injector Toggle */}
              <button
                onClick={() => setIsCustomMode(!isCustomMode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isCustomMode ? '#00E5A8' : 'rgba(255, 255, 255, 0.06)',
                  color: isCustomMode ? '#000' : 'var(--text-white)',
                  border: isCustomMode ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Type size={14} />
                {isCustomMode ? 'Using Custom Brand' : 'Test Your Brand'}
              </button>
            </div>
          </div>

          {/* Custom Brand Input Drawer if enabled */}
          {isCustomMode && (
            <div style={{
              background: 'rgba(0, 229, 168, 0.06)',
              border: '1px solid rgba(0, 229, 168, 0.3)',
              borderRadius: '14px',
              padding: '16px',
              marginTop: '16px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ fontSize: '11px', color: '#00E5A8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  YOUR BRAND NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. TESLA, ZOMATO, APPLE"
                  value={customBrandName}
                  onChange={(e) => setCustomBrandName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#09090e',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ flex: '2 1 300px' }}>
                <label style={{ fontSize: '11px', color: '#00E5A8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  CAMPAIGN HEADLINE / SLOGAN
                </label>
                <input
                  type="text"
                  placeholder="e.g. DRIVE THE FUTURE TODAY • NOW LAUNCHING IN MUMBAI"
                  value={customTagline}
                  onChange={(e) => setCustomTagline(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#09090e',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                onClick={() => {
                  setCustomBrandName('');
                  setCustomTagline('');
                  setIsCustomMode(false);
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  alignSelf: 'flex-end'
                }}
              >
                Reset to Presets
              </button>
            </div>
          )}

          {/* PHYSICAL BILLBOARD HARDWARE STRUCTURE */}
          <div style={{
            position: 'relative',
            marginTop: '24px',
            borderRadius: '20px',
            background: '#08080C',
            border: '8px solid #1C1C26',
            boxShadow: `0 25px 60px rgba(0,0,0,0.9), 0 0 40px ${activeCampaign.accentColor}25`,
            overflow: 'hidden'
          }}>
            
            {/* LED Screen Display Bezel */}
            <div 
              className="screen-scanline"
              style={{
                position: 'relative',
                height: '460px',
                background: activeCampaign.bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 24px',
                transition: 'background 0.8s ease'
              }}
            >
              <div className="screen-reflection" />

              {/* Dynamic Simulated Ad Content */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '960px',
                textAlign: 'center'
              }}>
                {/* Brand Category Tag */}
                <div style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  letterSpacing: '0.25em',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: activeCampaign.accentColor,
                  background: 'rgba(0, 0, 0, 0.6)',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: `1px solid ${activeCampaign.accentColor}40`,
                  marginBottom: '20px'
                }}>
                  {isCustomMode ? 'YOUR EXCLUSIVE CAMPAIGN' : activeCampaign.category}
                </div>

                {/* Brand Name */}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 6vw, 76px)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  textShadow: `0 0 35px ${activeCampaign.accentColor}60`
                }}>
                  {isCustomMode && customBrandName ? customBrandName : activeCampaign.brand}
                </div>

                {/* Slogan */}
                <h3 style={{
                  fontSize: 'clamp(20px, 3.5vw, 36px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#F0F0F8',
                  maxWidth: '780px',
                  margin: '0 auto 16px auto',
                  lineHeight: 1.2
                }}>
                  {isCustomMode && customTagline ? customTagline : activeCampaign.tagline}
                </h3>

                {/* Subtext info */}
                <p style={{
                  fontSize: '15px',
                  color: '#B0B0C4',
                  maxWidth: '640px',
                  margin: '0 auto 28px auto'
                }}>
                  {isCustomMode ? 'Live broadcast across Heramba Mumbai High-Footfall DOOH Grid.' : activeCampaign.subtext}
                </p>

                {/* Simulated Interactive CTA Button */}
                <div style={{ display: 'inline-flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{
                    padding: '12px 28px',
                    borderRadius: '999px',
                    background: activeCampaign.accentColor,
                    color: '#050505',
                    fontSize: '14px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: `0 0 25px ${activeCampaign.accentColor}80`
                  }}>
                    {isCustomMode ? 'BOOK THIS AD SLOT' : activeCampaign.ctaText}
                  </div>

                  <div style={{
                    padding: '12px 24px',
                    borderRadius: '999px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFF',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Radio size={14} color="#00E5A8" />
                    Slot Frequency: 15s / 4x per hr
                  </div>
                </div>
              </div>

              {/* Corner Watermarks */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '11px',
                fontWeight: 600,
                zIndex: 10
              }}>
                <Tv size={14} />
                HERAMBA DISPLAY NETWORK
              </div>

              <div style={{
                position: 'absolute',
                top: '12px',
                left: '16px',
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '11px',
                fontFamily: 'monospace',
                zIndex: 10
              }}>
                REFRESH: 120HZ // 4K UHD // LATENCY: 2MS
              </div>
            </div>

            {/* Realistic Bottom Billboard Gantry Bar with Logo */}
            <div style={{
              background: '#12121A',
              padding: '12px 24px',
              borderTop: '2px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  color: '#00E5A8', 
                  fontWeight: 800, 
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-heading)'
                }}>
                  HERAMBA
                </span>
                <span>• HEAVY INDUSTRIAL LED GANTRY • 20 × 10 FT</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={14} color="#00E5A8" />
                <span>ACTIVE LIQUID COOLING: 23.4°C</span>
              </div>
            </div>
          </div>

          {/* Interactive Playback Control Panel */}
          <div style={{
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(14, 14, 20, 0.95)',
            padding: '16px 24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            {/* Play/Pause & Nav buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handlePrev}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Previous Campaign"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: isPlaying ? '#00E5A8' : 'rgba(255, 255, 255, 0.12)',
                  border: 'none',
                  color: isPlaying ? '#050505' : '#FFF',
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
                aria-label={isPlaying ? 'Pause Playback' : 'Start Playback'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#FFF" />}
              </button>

              <button
                onClick={handleNext}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFF',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Next Campaign"
              >
                <ChevronRight size={18} />
              </button>

              {/* Progress bar of current 15s slot */}
              <div style={{ width: '140px', marginLeft: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-dim)', marginBottom: '4px' }}>
                  <span>ROTATION</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: activeCampaign.accentColor,
                    transition: 'width 0.1s linear'
                  }} />
                </div>
              </div>
            </div>

            {/* Campaign Selector Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {CAMPAIGNS.map((camp, idx) => (
                <button
                  key={camp.id}
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(idx);
                    setIsCustomMode(false);
                  }}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '8px',
                    background: currentIndex === idx && !isCustomMode ? 'rgba(0, 229, 168, 0.15)' : 'transparent',
                    border: currentIndex === idx && !isCustomMode ? '1px solid #00E5A8' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: currentIndex === idx && !isCustomMode ? '#00E5A8' : 'var(--text-muted)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {camp.brand}
                </button>
              ))}
            </div>

            {/* Book This Screen CTA */}
            <div>
              <button
                onClick={onOpenEstimator}
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                <Sparkles size={15} />
                Book This Screen
              </button>
            </div>
          </div>

          {/* Telemetry Grid under Simulator */}
          <div style={{
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            padding: '16px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '14px'
          }}>
            {[
              { label: 'Pixel Pitch', val: 'P2.5 Fine SMD' },
              { label: 'Luminance', val: '8,500 Nits HDR' },
              { label: 'Screen Dimension', val: '20 × 10 Feet' },
              { label: 'Average Daily Traffic', val: '420,000+ Vehicles' },
              { label: 'Available Prime Slots', val: '4 Slots Left This Month' },
            ].map((t, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{t.label}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F0', marginTop: '2px' }}>{t.val}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
