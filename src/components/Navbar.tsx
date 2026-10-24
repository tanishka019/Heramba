'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tv,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Sliders,
  LogIn,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AuthModal } from '@/components/AuthModal';
import { UserMenu } from '@/components/UserMenu';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
}

// Primary nav items — each is a distinct page route
const NAV_ITEMS = [
  { label: 'Home',       href: '/' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Features',   href: '/features' },
  { label: 'Sectors',    href: '/sectors' },
  { label: 'Pricing',    href: '/pricing' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenContact }) => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen]         = useState(false);
  const { user, isLoading }             = useAuth();
  const pathname                        = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  }

  function handleContactClick() {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('contact');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.location.href = '/#contact';
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(226, 229, 234, 0.85)',
      boxShadow: scrolled ? '0 8px 30px -4px rgba(43, 52, 69, 0.07)' : 'none',
      transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
    }}>
      <div className="container-wide" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px',
      }}>

        {/* ── Brand Logo ── */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            backgroundColor: '#FF772A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(255, 119, 42, 0.35)',
          }}>
            <Tv size={22} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: '#191D24' }}>
              HERAMBA<span style={{ color: '#FF772A' }}>.</span>
            </div>
            <div style={{ fontSize: '10px', color: '#717B8C', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>
              Digital Signage Solutions
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} id="desktop-nav">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: active ? '#FF772A' : '#4A5260',
                  backgroundColor: active ? 'rgba(255, 119, 42, 0.09)' : 'transparent',
                  transition: 'all 0.18s',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#FF772A';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 119, 42, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#4A5260';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
                {active && (
                  <span style={{
                    position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)',
                    width: '4px', height: '4px', borderRadius: '50%',
                    backgroundColor: '#FF772A',
                  }} />
                )}
              </Link>
            );
          })}

          {/* Contact — scrolls to home#contact */}
          <button
            onClick={handleContactClick}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center',
              padding: '8px 14px', borderRadius: '8px',
              fontSize: '14px', fontWeight: 700, color: '#4A5260',
              transition: 'all 0.18s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FF772A'; e.currentTarget.style.backgroundColor = 'rgba(255, 119, 42, 0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#4A5260'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            Contact
          </button>

          {/* Divider */}
          <div style={{ width: '1px', height: '24px', background: '#E2E5EA', margin: '0 8px' }} />

          {/* Interactive sub-app routes */}
          <Link
            href="/simulator"
            style={{
              textDecoration: 'none', fontSize: '13px', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              backgroundColor: isActive('/simulator') ? '#2B3445' : 'rgba(43, 52, 69, 0.07)',
              color: isActive('/simulator') ? '#FFF' : '#2B3445',
              padding: '6px 12px', borderRadius: '6px', transition: 'all 0.2s ease',
            } as React.CSSProperties}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2B3445'; e.currentTarget.style.color = '#FFF'; }}
            onMouseLeave={(e) => {
              if (!isActive('/simulator')) {
                e.currentTarget.style.backgroundColor = 'rgba(43, 52, 69, 0.07)';
                e.currentTarget.style.color = '#2B3445';
              }
            }}
          >
            <Sparkles size={13} />
            <span>3D Simulator</span>
          </Link>

          <Link
            href="/control-room"
            style={{
              textDecoration: 'none', fontSize: '13px', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              backgroundColor: isActive('/control-room') ? '#FF772A' : 'rgba(255, 119, 42, 0.08)',
              color: isActive('/control-room') ? '#FFF' : '#FF772A',
              border: '1px solid rgba(255, 119, 42, 0.2)',
              padding: '6px 12px', borderRadius: '6px', transition: 'all 0.2s ease',
            } as React.CSSProperties}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF772A'; e.currentTarget.style.color = '#FFF'; }}
            onMouseLeave={(e) => {
              if (!isActive('/control-room')) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 119, 42, 0.08)';
                e.currentTarget.style.color = '#FF772A';
              }
            }}
          >
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isActive('/control-room') ? '#FFFFFF' : '#10B981',
              boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.25)',
              display: 'inline-block'
            }} />
            <Sliders size={13} />
            <span>Live CMS</span>
          </Link>
        </nav>

        {/* ── Right CTA Actions ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {!isLoading && (
            user ? (
              <UserMenu />
            ) : (
              <button
                id="navbar-login-btn"
                onClick={() => setAuthOpen(true)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'none', border: 'none',
                  color: '#2B3445', fontSize: '14px', fontWeight: 700,
                  cursor: 'pointer', padding: '8px 12px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF772A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#2B3445'}
              >
                <LogIn size={15} />
                Login
              </button>
            )
          )}

          <button
            onClick={onOpenTrial}
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            <span>Free Trial</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none', background: '#F8F9FA', border: '1px solid #E2E5EA',
              color: '#2B3445', padding: '8px', borderRadius: '6px', cursor: 'pointer',
            }}
            id="mobile-nav-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E5EA',
          padding: '16px 20px 20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block', padding: '12px 14px',
                  borderRadius: '8px', textDecoration: 'none',
                  fontSize: '16px', fontWeight: 700,
                  color: active ? '#FF772A' : '#191D24',
                  backgroundColor: active ? 'rgba(255, 119, 42, 0.08)' : 'transparent',
                  borderLeft: active ? '3px solid #FF772A' : '3px solid transparent',
                  transition: 'all 0.15s',
                }}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact */}
          <button
            onClick={handleContactClick}
            style={{
              display: 'block', padding: '12px 14px', width: '100%', textAlign: 'left',
              borderRadius: '8px', background: 'none', border: 'none',
              fontSize: '16px', fontWeight: 700, color: '#191D24',
              borderLeft: '3px solid transparent', cursor: 'pointer',
            }}
          >
            Contact
          </button>

          <div style={{ height: '1px', background: '#E2E5EA', margin: '8px 0' }} />

          {/* Sub-app routes */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link href="/simulator" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', backgroundColor: 'rgba(43,52,69,0.08)', color: '#2B3445', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>
              3D Simulator
            </Link>
            <Link href="/control-room" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', backgroundColor: 'rgba(255,119,42,0.09)', color: '#FF772A', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>
              Live CMS
            </Link>
          </div>

          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get a Free Trial
            </button>
            {!user && (
              <button
                onClick={() => { setMobileMenuOpen(false); setAuthOpen(true); }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', borderColor: '#2B3445', color: '#2B3445' }}
              >
                <LogIn size={15} /> Customer Login
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          #desktop-nav { display: none !important; }
          #mobile-nav-toggle { display: flex !important; }
        }
      `}</style>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
};
