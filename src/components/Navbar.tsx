'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tv, Menu, X, ArrowRight, Sliders, LogIn, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AuthModal } from '@/components/AuthModal';
import { UserMenu } from '@/components/UserMenu';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
}

const NAV_ITEMS = [
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Features',   href: '/features' },
  { label: 'Sectors',    href: '/sectors' },
  { label: 'Pricing',    href: '/pricing' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenContact }) => {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [authOpen, setAuthOpen]           = useState(false);
  const { user, isLoading }               = useAuth();
  const pathname                          = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const handleContact = () => {
    setMobileOpen(false);
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <header className="anim-slide-down" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(10,10,10,0.96)' : 'rgba(10,10,10,0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled
          ? '1px solid #2A2A2A'
          : '1px solid rgba(255,255,255,0.06)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}>
        <div className="container-wide" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#FFE600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Tv size={18} color="#000000" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              lineHeight: 1
            }}>
              HERAMBA<span style={{ color: '#FFE600' }}>.</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav id="desktop-nav" style={{ display:'flex', alignItems:'center', gap:'2px' }}>
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '7px 14px',
                    borderRadius: '6px',
                    color: active ? '#FFE600' : '#AAAAAA',
                    transition: 'color 0.18s ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? '#FFE600' : '#AAAAAA')}
                >
                  {label}
                </Link>
              );
            })}

            <button
              onClick={handleContact}
              style={{
                background:'none', border:'none', cursor:'pointer',
                fontSize:'14px', fontWeight:500,
                padding:'7px 14px', borderRadius:'6px',
                color:'#AAAAAA', transition:'color 0.18s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#AAAAAA')}
            >
              Contact
            </button>

            {/* Divider */}
            <div style={{ width:'1px', height:'18px', background:'#2A2A2A', margin:'0 8px' }} />

            <Link
              href="/simulator"
              style={{
                textDecoration:'none', fontSize:'13px', fontWeight:600,
                display:'inline-flex', alignItems:'center', gap:'5px',
                padding:'6px 12px', borderRadius:'6px',
                color: isActive('/simulator') ? '#000' : '#888888',
                backgroundColor: isActive('/simulator') ? '#FFE600' : 'transparent',
                border: '1px solid #2A2A2A',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FFE600';
                e.currentTarget.style.color = '#FFE600';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#2A2A2A';
                e.currentTarget.style.color = isActive('/simulator') ? '#000' : '#888888';
              }}
            >
              <Sparkles size={13} color={isActive('/simulator') ? '#000' : '#FFE600'} />
              Simulator
            </Link>

            <Link
              href="/control-room"
              style={{
                textDecoration:'none', fontSize:'13px', fontWeight:600,
                display:'inline-flex', alignItems:'center', gap:'5px',
                padding:'6px 12px', borderRadius:'6px',
                color: isActive('/control-room') ? '#000' : '#FFE600',
                backgroundColor: isActive('/control-room') ? '#FFE600' : 'rgba(255,230,0,0.1)',
                border: '1px solid rgba(255,230,0,0.3)',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FFE600';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = isActive('/control-room') ? '#FFE600' : 'rgba(255,230,0,0.1)';
                e.currentTarget.style.color = isActive('/control-room') ? '#000' : '#FFE600';
              }}
            >
              <span style={{
                width:'5px', height:'5px', borderRadius:'50%',
                backgroundColor: '#10B981', display:'inline-block',
                boxShadow: '0 0 6px #10B981'
              }} />
              <Sliders size={13} />
              Live CMS
            </Link>
          </nav>

          {/* ── Right ── */}
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            {!isLoading && (
              user
                ? <UserMenu />
                : (
                  <button
                    onClick={() => setAuthOpen(true)}
                    style={{
                      background:'none', border:'none', cursor:'pointer',
                      color:'#888888', fontSize:'14px', fontWeight:500,
                      display:'flex', alignItems:'center', gap:'5px',
                      padding:'6px 10px', transition:'color 0.18s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
                  >
                    <LogIn size={15} />
                    Login
                  </button>
                )
            )}

            <button
              onClick={onOpenTrial}
              style={{
                background: '#FFE600',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'background 0.18s ease, transform 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#F0D800';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#FFE600';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Free Trial
              <ArrowRight size={13} strokeWidth={2.5} />
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display:'none', background:'none',
                border:'1px solid #2A2A2A', color:'#FFFFFF',
                padding:'7px', borderRadius:'6px', cursor:'pointer',
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div style={{
            backgroundColor:'#0A0A0A',
            borderTop:'1px solid #1A1A1A',
            padding:'16px 24px 20px',
            display:'flex', flexDirection:'column', gap:'4px'
          }}>
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display:'block', padding:'11px 12px',
                  borderRadius:'6px', textDecoration:'none',
                  fontSize:'15px', fontWeight:600,
                  color: isActive(href) ? '#FFE600' : '#CCCCCC',
                  backgroundColor: isActive(href) ? 'rgba(255,230,0,0.1)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={handleContact}
              style={{
                display:'block', padding:'11px 12px', width:'100%', textAlign:'left',
                borderRadius:'6px', background:'none', border:'none',
                fontSize:'15px', fontWeight:600, color:'#CCCCCC', cursor:'pointer',
              }}
            >
              Contact
            </button>
            <div style={{ height:'1px', background:'#1A1A1A', margin:'8px 0' }} />
            <button
              onClick={() => { setMobileOpen(false); onOpenTrial(); }}
              style={{
                background:'#FFE600', color:'#000', border:'none',
                borderRadius:'6px', padding:'12px', fontSize:'14px',
                fontWeight:700, cursor:'pointer', width:'100%',
              }}
            >
              Start Free Trial
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1100px) {
          #desktop-nav { display: none !important; }
          #mobile-nav-toggle { display: flex !important; }
        }
      `}</style>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};
