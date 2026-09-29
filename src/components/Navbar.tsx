import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #D9D1CA',
      boxShadow: scrolled ? '0 4px 20px rgba(11, 54, 154, 0.06)' : 'none',
      transition: 'box-shadow 0.2s ease'
    }}>
      <div className="container-wide" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            textDecoration: 'none',
            color: '#111827' 
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: '#C34811', /* BURNT TERRACOTTA */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 3px 10px rgba(195, 72, 17, 0.3)'
          }}>
            <Tv size={22} />
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#0B369A' /* GALLERY BLUE */
            }}>
              HERAMBA<span style={{ color: '#C34811' }}>.</span>
            </div>
            <div style={{
              fontSize: '10px',
              color: '#5E6778',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '3px'
            }}>
              Digital Signage Solutions
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '26px'
          }}
          id="desktop-nav"
        >
          {[
            { label: 'Solutions', id: 'solutions' },
            { label: 'Features', id: 'features' },
            { label: 'Sectors & Verticals', id: 'sectors' },
            { label: 'What You Get', id: 'what-you-get' },
            { label: 'Advantages', id: 'advantages' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#374151',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C34811'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={() => alert('Heramba Cloud CMS Login Portal: Redirecting to app.heramba.in...')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0B369A',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '8px 12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C34811'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#0B369A'}
          >
            Customer Login
          </button>

          <button
            onClick={onOpenTrial}
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            <span>Get a Free Trial</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: '#F7F5F2',
              border: '1px solid #D9D1CA',
              color: '#0B369A',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            id="mobile-nav-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #D9D1CA',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {[
            { label: 'Solutions', id: 'solutions' },
            { label: 'Our Host of Features', id: 'features' },
            { label: 'Sectors & Verticals', id: 'sectors' },
            { label: 'What You Get (Hardware + Cloud)', id: 'what-you-get' },
            { label: 'Heramba Advantages', id: 'advantages' },
            { label: 'Client Testimonials', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' },
            { label: 'Contact Us', id: 'contact' }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '10px 0',
                fontSize: '16px',
                fontWeight: 600,
                color: '#121826',
                borderBottom: '1px solid #F7F5F2',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get a Free Trial
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 990px) {
          #desktop-nav {
            display: none !important;
          }
          #mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
