import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Building, 
  UtensilsCrossed, 
  Briefcase, 
  HeartPulse, 
  Film, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  keyUseCases: string[];
  recommendedHardware: string;
  provenImpact: string;
  accent: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'retail',
    name: 'Retail & Fashion',
    icon: <ShoppingBag size={24} color="#00E5A8" />,
    tagline: 'Instant Footfall Lift & Flash Promotion Takeovers',
    description: 'Transform store entrances and high-street shopping corridors into dynamic visual magnets. Synchronize real-time discounts, new seasonal arrivals, and interactive 3D product unveilings.',
    keyUseCases: [
      'Seasonal collection launch campaigns',
      'Flash sale countdowns & dynamic QR triggers',
      'Interactive capacitive touch window displays',
      'Mall atrium synchronous video wall takeover'
    ],
    recommendedHardware: 'Digital Standees & Curved Mall Atrium Screens',
    provenImpact: '+42% higher storefront walk-ins compared to static vinyl',
    accent: '#00E5A8'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Luxury Living',
    icon: <Building size={24} color="#7C5CFF" />,
    tagline: 'Monumental Visibility for High-Value Property Launches',
    description: 'Luxury residences demand majestic visual presentation. Display ultra-high-definition architectural fly-throughs, floor plans, and sunrise panoramas on monumental highway billboards.',
    keyUseCases: [
      'Pre-launch investor teasers across BKC & Worli',
      'Hyper-realistic 4K architectural fly-throughs',
      'Experience center interactive video walls',
      'VIP lounge immersive projection environments'
    ],
    recommendedHardware: 'Monumental P2.5 Outdoor LED & Executive Video Walls',
    provenImpact: '8.4x greater brand recall among prospective luxury buyers',
    accent: '#7C5CFF'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Dining',
    icon: <UtensilsCrossed size={24} color="#FFB800" />,
    tagline: 'Atmospheric Luxury & Dynamic Sensory Menus',
    description: 'Elevate hotels, 5-star resorts, and luxury lounges with ambient digital art and automated dayparting menus that transition seamlessly from breakfast to evening craft cocktail atmospheres.',
    keyUseCases: [
      'Grand lobby architectural video art matrices',
      'Automated time-based menu dayparting',
      'VIP event welcoming & banquet signage',
      'Rooftop lounge weather-resilient display totems'
    ],
    recommendedHardware: 'Fine-Pitch MicroLED & Ultra-Slim Signage Totems',
    provenImpact: '+28% increase in high-margin beverage & dinner ordering',
    accent: '#FFB800'
  },
  {
    id: 'corporate',
    name: 'Corporate & Tech Campuses',
    icon: <Briefcase size={24} color="#00D2FF" />,
    tagline: 'Brand Dominance in Executive Business Districts',
    description: 'Position your B2B SaaS, enterprise consulting, or banking brand directly in front of CEOs and key decision-makers across BKC, Lower Parel, and Cyber City hubs.',
    keyUseCases: [
      'B2B software & financial services thought leadership',
      'Executive boardrooms & global operations command centers',
      'Campus-wide emergency broadcasts and announcements',
      'IPO, acquisition & milestone celebrations'
    ],
    recommendedHardware: 'Zero-Bezel MicroLED Walls & Financial Hub Billboards',
    provenImpact: 'Unmatched C-Suite daily impression frequency',
    accent: '#00D2FF'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    icon: <HeartPulse size={24} color="#FF5F56" />,
    tagline: 'Calming Visuals, Clear Wayfinding & Public Health',
    description: 'Alleviate patient anxiety in multi-specialty hospital concourses and clinics with tranquil dynamic visuals, intuitive interactive floor navigation, and doctor directory schedules.',
    keyUseCases: [
      'Multi-level interactive 3D wayfinding kiosks',
      'Real-time doctor OPD availability rosters',
      'Preventative health wellness dynamic broadcasting',
      'Pediatric ward interactive entertainment screens'
    ],
    recommendedHardware: 'Antimicrobial Touch Standees & 4K Lobby Displays',
    provenImpact: '65% reduction in reception wayfinding queries',
    accent: '#FF5F56'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Events',
    icon: <Film size={24} color="#E040FB" />,
    tagline: 'Blockbuster Trailers & Live Anamorphic Spectacles',
    description: 'Capture adrenaline and anticipation with 3D anamorphic billboards that make movie characters and concert artists burst out of the frame into the city skyline.',
    keyUseCases: [
      'High-impact movie premiere anamorphic countdowns',
      'Concert & festival live ticket sales triggers',
      'Multiplex digital box-office video matrices',
      'Gaming tournament stadium LED perimeter boards'
    ],
    recommendedHardware: 'Anamorphic 3D Corner Billboards & Curved Mega Arrays',
    provenImpact: '3.1M+ organic viral social media shares per campaign',
    accent: '#E040FB'
  }
];

export const Industries: React.FC<{ onOpenContact: () => void; onOpenEstimator: () => void }> = ({ onOpenContact, onOpenEstimator }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('retail');

  const current = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <section 
      id="industries"
      style={{
        padding: '110px 0',
        position: 'relative',
        background: '#09090e'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <span>INDUSTRY APPLICATIONS</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '18px'
          }}>
            BUILT FOR EVERY PLACE <br />
            <span className="text-gradient">PEOPLE LOOK.</span>
          </h2>

          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Every industry demands a unique visual strategy. Discover how Heramba digital displays drive measurable business results across diverse sectors.
          </p>
        </div>

        {/* Industry Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                background: selectedIndustry === ind.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedIndustry === ind.id ? '#FFFFFF' : 'var(--text-muted)',
                border: selectedIndustry === ind.id ? `1px solid ${ind.accent}` : '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Industry Detail Card */}
        <div style={{
          background: 'linear-gradient(165deg, rgba(22, 22, 32, 0.95) 0%, rgba(12, 12, 18, 0.98) 100%)',
          border: `1px solid ${current.accent}40`,
          borderRadius: '24px',
          padding: '44px',
          boxShadow: `0 30px 80px rgba(0, 0, 0, 0.8), 0 0 45px ${current.accent}15`,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: `${current.accent}18`,
              border: `1px solid ${current.accent}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {current.icon}
            </div>

            <div style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: current.accent,
              marginBottom: '6px'
            }}>
              {current.name} Vertical
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '12px',
              lineHeight: 1.15
            }}>
              {current.tagline}
            </h3>

            <p style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '24px'
            }}>
              {current.description}
            </p>

            {/* Impact Metric Banner */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 20px',
              borderRadius: '12px',
              background: 'rgba(0, 0, 0, 0.5)',
              border: `1px solid ${current.accent}30`,
              marginBottom: '28px'
            }}>
              <TrendingUp size={20} color={current.accent} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFF' }}>
                {current.provenImpact}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenEstimator}
                className="btn btn-primary"
                style={{
                  background: current.accent,
                  boxShadow: `0 4px 20px ${current.accent}40`
                }}
              >
                Plan a Campaign in {current.name.split(' ')[0]}
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onOpenContact}
                className="btn btn-secondary"
              >
                Request Case Study
              </button>
            </div>
          </div>

          {/* Right Use Case List & Hardware Specs */}
          <div style={{
            background: 'rgba(7, 7, 12, 0.7)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '32px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              marginBottom: '18px'
            }}>
              Core Applications & Deployments:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {current.keyUseCases.map((uc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color={current.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: '#E8E8F2', lineHeight: 1.5 }}>
                    {uc}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                Recommended Hardware Architecture:
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFF', marginTop: '4px' }}>
                {current.recommendedHardware}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
