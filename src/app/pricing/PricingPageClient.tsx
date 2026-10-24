'use client';
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { FreeTrialModal } from '@/components/FreeTrialModal';
import { Check, ArrowRight, HelpCircle, Star, Zap } from 'lucide-react';

type BillingCycle = 'monthly' | 'annual';

interface Plan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceUnit: string;
  highlight: boolean;
  badge?: string;
  features: string[];
  cta: string;
  ctaStyle: 'primary' | 'blue' | 'outline-blue';
}

export default function PricingPageClient() {
  const [billing, setBilling] = useState<BillingCycle>('annual');
  const [trialOpen, setTrialOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'For small businesses getting started',
      monthlyPrice: 799,
      annualPrice: 499,
      priceUnit: '/ screen / month',
      highlight: false,
      features: [
        'Up to 5 screens',
        'Cloud CMS dashboard access',
        'Playlist & scheduling engine',
        'Image, video & web content support',
        'Offline edge-caching playback',
        'Basic analytics dashboard',
        'Email support (48h response)',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'outline-blue',
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'For growing businesses scaling fast',
      monthlyPrice: 1299,
      annualPrice: 849,
      priceUnit: '/ screen / month',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Up to 50 screens',
        'Everything in Starter',
        'Social media feed integrations',
        'PowerBI & Google Sheets widgets',
        'Dayparting & rule-based automation',
        'Remote device monitoring & reboot',
        'Role-based user access control',
        'Audience impression analytics',
        'Priority chat support (8h response)',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'primary',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For large networks demanding full control',
      monthlyPrice: null,
      annualPrice: null,
      priceUnit: 'custom pricing',
      highlight: false,
      features: [
        'Unlimited screens',
        'Everything in Growth',
        'AI-driven personalization engine',
        'POS & ERP deep integrations',
        'Custom widget & API development',
        'SSO / SAML enterprise login',
        'Emergency broadcast override',
        'Dedicated account manager',
        '24/7 phone & SLA support',
        'On-site implementation & training',
      ],
      cta: 'Contact Sales',
      ctaStyle: 'blue',
    },
  ];

  const faqs = [
    {
      q: 'Is there a free trial available?',
      a: 'Yes — all plans come with a 14-day free trial. No credit card required to get started. You\'ll get full access to the Growth plan features during your trial period.',
    },
    {
      q: 'What does "per screen" mean exactly?',
      a: 'One license covers one physical display (or screen zone). Each screen runs one Heramba Player device. You can add or remove screens from your subscription at any time from the dashboard.',
    },
    {
      q: 'Can I mix and match plans across locations?',
      a: 'Yes. Enterprise customers can assign different plan tiers to different site locations. Contact our sales team for a custom multi-location pricing arrangement.',
    },
    {
      q: 'What happens if I exceed my screen limit?',
      a: 'You\'ll receive an in-app notification before reaching your limit. You can upgrade your plan instantly from the dashboard with immediate effect and prorated billing.',
    },
    {
      q: 'Do you offer hardware bundled pricing?',
      a: 'Yes. Heramba offers turnkey hardware packages including the player device and commercial displays at negotiated OEM pricing. Contact sales for a complete hardware + software bundle quote.',
    },
    {
      q: 'How does annual billing work?',
      a: 'Annual plans are billed as a single upfront payment and offer up to 40% savings compared to month-to-month billing. You\'ll also receive priority onboarding and dedicated support.',
    },
  ];

  const addOns = [
    { name: 'Custom Widget Development', price: '₹25,000 one-time', desc: 'Bespoke integrations with your existing POS, ERP, CRM, or proprietary data systems.' },
    { name: 'Content Design Package', price: '₹12,000 / month', desc: 'Dedicated graphic design team for ongoing creative production, animation, and campaign assets.' },
    { name: 'On-Site Installation', price: '₹4,500 per screen', desc: 'Professional mounting, cabling, commissioning, and handover training at your location.' },
    { name: 'Extended Warranty', price: '₹2,000 / screen / year', desc: 'Extended 5-year hardware warranty with on-site replacement SLA for Heramba Player devices.' },
  ];

  function formatPrice(p: number | null): React.ReactNode {
    if (p === null) return <span style={{ fontSize: '28px', fontWeight: 800, color: '#0B369A' }}>Custom</span>;
    return (
      <>
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#5E6778', verticalAlign: 'top', marginTop: '8px', display: 'inline-block' }}>₹</span>
        <span style={{ fontSize: '44px', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)' }}>{p.toLocaleString('en-IN')}</span>
      </>
    );
  }

  return (
    <PageLayout
      badge="Transparent Pricing"
      heading="Simple, Predictable Per-Screen Pricing"
      subheading="No hidden fees, no complicated tiers. Pay per screen, cancel anytime. Start with a 14-day free trial — no credit card needed."
      pageName="Pricing"
    >
      {/* Billing Toggle */}
      <section style={{ backgroundColor: '#F7F5F2', borderBottom: '1px solid #D9D1CA', padding: '32px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0', background: '#FFFFFF', border: '1.5px solid #D9D1CA', borderRadius: '12px', padding: '4px', boxShadow: '0 2px 8px rgba(18,24,38,0.06)' }}>
            {(['monthly', 'annual'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBilling(cycle)}
                style={{
                  padding: '10px 24px', borderRadius: '9px', border: 'none', cursor: 'pointer',
                  fontSize: '14px', fontWeight: 700, transition: 'all 0.2s',
                  background: billing === cycle ? '#0B369A' : 'transparent',
                  color: billing === cycle ? '#FFF' : '#5E6778',
                  boxShadow: billing === cycle ? '0 2px 8px rgba(11,54,154,0.3)' : 'none',
                }}
              >
                {cycle === 'monthly' ? 'Monthly' : 'Annual'}
                {cycle === 'annual' && (
                  <span style={{ marginLeft: '8px', fontSize: '11px', fontWeight: 700, backgroundColor: billing === 'annual' ? 'rgba(255,255,255,0.2)' : 'rgba(195,72,17,0.15)', color: billing === 'annual' ? '#FFF' : '#C34811', padding: '2px 7px', borderRadius: '6px' }}>
                    Save 40%
                  </span>
                )}
              </button>
            ))}
          </div>
          {billing === 'annual' && (
            <div style={{ marginTop: '10px', fontSize: '13px', color: '#C34811', fontWeight: 600 }}>
              🎉 Special Offer: Get 50% off your first year when you start a trial today
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '72px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'start' }}>
            {plans.map((plan) => {
              const price = billing === 'annual' ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  className={plan.highlight ? '' : 'light-card'}
                  style={{
                    padding: '36px 32px',
                    borderRadius: '16px',
                    display: 'flex', flexDirection: 'column', gap: '20px',
                    position: 'relative', overflow: 'hidden',
                    border: plan.highlight ? '2px solid #C34811' : '1px solid #E5E0D8',
                    boxShadow: plan.highlight ? '0 16px 48px rgba(195,72,17,0.18)' : undefined,
                    background: plan.highlight ? 'linear-gradient(170deg, #FFFDFB 0%, #FFF8F4 100%)' : '#FFFFFF',
                    transform: plan.highlight ? 'scale(1.03)' : 'none',
                  }}
                >
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#C34811', color: '#FFF', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '99px' }}>
                      <Star size={10} fill="#FFF" /> {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#121826', margin: '0 0 4px' }}>{plan.name}</h3>
                    <p style={{ fontSize: '13px', color: '#5E6778', margin: 0 }}>{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div>
                    <div style={{ color: plan.highlight ? '#C34811' : '#121826', lineHeight: 1 }}>
                      {formatPrice(price)}
                    </div>
                    {price !== null && (
                      <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '4px', fontWeight: 500 }}>
                        {plan.priceUnit}
                        {billing === 'annual' && <span style={{ marginLeft: '6px', color: '#C34811', fontWeight: 700 }}>billed annually</span>}
                      </div>
                    )}
                    {price === null && (
                      <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>Contact us for a tailored quote</div>
                    )}
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    {plan.features.map((feat, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#374151' }}>
                        <Check size={15} color={plan.highlight ? '#C34811' : '#0B369A'} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => plan.id === 'enterprise' ? (window.location.href = '/#contact') : setTrialOpen(true)}
                    id={`pricing-cta-${plan.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      width: '100%', padding: '13px', borderRadius: '10px',
                      fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                      border: plan.ctaStyle === 'outline-blue' ? '1.5px solid #0B369A' : 'none',
                      background: plan.ctaStyle === 'primary' ? 'linear-gradient(135deg, #C34811, #A83D0D)'
                        : plan.ctaStyle === 'blue' ? '#0B369A'
                        : 'transparent',
                      color: plan.ctaStyle === 'outline-blue' ? '#0B369A' : '#FFF',
                      boxShadow: plan.ctaStyle === 'primary' ? '0 4px 16px rgba(195,72,17,0.35)'
                        : plan.ctaStyle === 'blue' ? '0 4px 16px rgba(11,54,154,0.3)' : 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {plan.cta} <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ backgroundColor: '#F7F5F2', padding: '72px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#C34811', textTransform: 'uppercase', marginBottom: '8px' }}>ADD-ON SERVICES</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#121826', marginBottom: '10px' }}>Enhance Your Deployment</h2>
            <p style={{ fontSize: '15px', color: '#5E6778', margin: 0 }}>Optional professional services to complement your subscription plan.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {addOns.map((ao, i) => (
              <div key={i} className="light-card" style={{ padding: '28px 24px', background: '#FFF', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#121826', margin: 0, flex: 1, paddingRight: '12px' }}>{ao.name}</h3>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#C34811', whiteSpace: 'nowrap' }}>{ao.price}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{ao.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '72px 0', borderBottom: '1px solid #D9D1CA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#C34811', textTransform: 'uppercase', marginBottom: '8px' }}>PRICING FAQ</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#121826' }}>Common Pricing Questions</h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1.5px solid #E5E0D8', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={16} color="#C34811" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#121826' }}>{faq.q}</span>
                  </div>
                  <span style={{ fontSize: '20px', color: '#9CA3AF', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 18px 48px', fontSize: '14px', color: '#4B5563', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F7F5F2', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(195,72,17,0.1)', border: '1px solid rgba(195,72,17,0.25)', borderRadius: '99px', padding: '5px 14px', fontSize: '12px', fontWeight: 700, color: '#C34811', marginBottom: '16px', letterSpacing: '0.06em' }}>
            <Zap size={12} /> 14-DAY FREE TRIAL
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#121826', marginBottom: '12px' }}>
            Ready to Start? No Credit Card Needed.
          </h2>
          <p style={{ fontSize: '16px', color: '#5E6778', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
            Get full Growth plan access free for 14 days. Deploy on your existing screens today.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setTrialOpen(true)} className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '16px' }}>
              Start Free Trial <ArrowRight size={16} />
            </button>
            <a href="/#contact" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '16px', borderColor: '#0B369A', color: '#0B369A' }}>
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </PageLayout>
  );
}
