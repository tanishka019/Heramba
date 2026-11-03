'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Pause, VolumeX, Volume2, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenContact }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted]     = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      overflow: 'hidden',
    }}>

      {/* ── BACKGROUND VIDEO ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <video
          ref={videoRef}
          src="/assets/heramba-hero.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Overlay — light vignette, heavy only at top and bottom for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            180deg,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.12) 35%,
            rgba(0,0,0,0.12) 60%,
            rgba(0,0,0,0.72) 100%
          )`,
        }} />
      </div>

      {/* ── HERO CONTENT ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
      }}>

        {/* Eyebrow */}
        <p className="anim-fade-up-1" style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#FFE600',
          marginBottom: '20px',
          opacity: 0.9,
        }}>
          Digital Signage &nbsp;·&nbsp; DOOH &nbsp;·&nbsp; Video Walls
        </p>

        {/* Headline */}
        <h1 className="anim-fade-up-2" style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.08,
          letterSpacing: '-0.04em',
          marginBottom: '24px',
          color: '#FFFFFF',
          textShadow: '0 2px 24px rgba(0,0,0,0.85)',
        }}>
          Every Screen.{' '}
          <span style={{ color: '#FFE600' }}>Every&nbsp;City.</span>
          <br />One Platform.
        </h1>

        {/* Subtitle */}
        <p className="anim-fade-up-3" style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: '620px',
          margin: '0 auto 40px auto',
          lineHeight: 1.65,
          fontWeight: 400,
          textShadow: '0 1px 12px rgba(0,0,0,0.8)',
        }}>
          Heramba powers transit screens, retail corridors and rooftop billboards —
          all from a single cloud CMS with sub-second sync.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up-4" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          {/* Primary */}
          <button
            onClick={onOpenTrial}
            style={{
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '6px',
              backgroundColor: '#FFE600',
              color: '#000000',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.18s ease, background-color 0.18s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#F5DC00';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FFE600';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start Free Trial
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>

          {/* Secondary */}
          <button
            onClick={onOpenContact}
            style={{
              padding: '14px 28px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '6px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'border-color 0.18s ease, color 0.18s ease, transform 0.18s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFE600';
              e.currentTarget.style.color = '#FFE600';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* ── VIDEO CONTROLS (bottom-right, minimal) ── */}
      <div style={{
        position: 'absolute',
        bottom: '28px',
        right: '28px',
        zIndex: 10,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '9999px',
        backgroundColor: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
      }}>
        <button
          onClick={handleTogglePlay}
          title={isPlaying ? 'Pause' : 'Play'}
          style={{ background:'none', border:'none', color:'rgba(255,255,255,0.7)', cursor:'pointer', display:'flex', alignItems:'center', padding:'2px', transition:'color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#FFE600'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
        </button>

        <button
          onClick={handleToggleMute}
          title={isMuted ? 'Unmute' : 'Mute'}
          style={{ background:'none', border:'none', color:'rgba(255,255,255,0.7)', cursor:'pointer', display:'flex', alignItems:'center', padding:'2px', transition:'color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#FFE600'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
        </button>
      </div>

      {/* ── SCROLL INDICATOR (bottom-center) ── */}
      <div style={{
        position: 'absolute',
        bottom: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        opacity: 0.5,
        animation: 'heroScrollBounce 2s ease-in-out infinite',
      }}>
        <ChevronDown size={20} color="#FFE600" />
      </div>

      {/* ── BOTTOM YELLOW ACCENT LINE ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #FFE600 50%, transparent 100%)',
        opacity: 0.6,
        zIndex: 5,
      }} />

      <style>{`
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
};
