'use client';
import React, { useState } from 'react';
import { 
  X, 
  Check, 
  MapPin, 
  Tv, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  UploadCloud, 
  Send,
  Sliders,
  DollarSign
} from 'lucide-react';

interface CampaignEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedLocation?: string;
}

export const CampaignEstimatorModal: React.FC<CampaignEstimatorModalProps> = ({
  isOpen,
  onClose,
  preselectedLocation
}) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    preselectedLocation ? [preselectedLocation.toLowerCase().includes('bkc') ? 'bkc' : 'worli'] : ['bkc']
  );
  const [screenFormat, setScreenFormat] = useState<'mega-billboard' | 'mall-atrium' | 'transit-skyboard'>('mega-billboard');
  const [duration, setDuration] = useState<number>(14); // 7, 14, 30, 90 days
  const [slotType, setSlotType] = useState<'standard' | 'peak' | 'exclusive'>('standard');
  const [needsCreativeHelp, setNeedsCreativeHelp] = useState(true);

  // Form inputs
  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleLocation = (locId: string) => {
    if (selectedLocations.includes(locId)) {
      if (selectedLocations.length > 1) {
        setSelectedLocations(selectedLocations.filter((id) => id !== locId));
      }
    } else {
      setSelectedLocations([...selectedLocations, locId]);
    }
  };

  // Dynamic calculations based on selections
  const locationMultiplier = selectedLocations.length;
  const formatRate = screenFormat === 'mega-billboard' ? 1.4 : screenFormat === 'transit-skyboard' ? 1.2 : 1.0;
  const slotMultiplier = slotType === 'exclusive' ? 3.5 : slotType === 'peak' ? 1.5 : 1.0;

  const baseDailyImpressions = 320000;
  const totalEstimatedImpressions = Math.round(baseDailyImpressions * locationMultiplier * formatRate * (duration / 7) * 1.8);
  const totalUniqueReach = Math.round(totalEstimatedImpressions * 0.65);
  const totalPlays = duration * 24 * (slotType === 'exclusive' ? 240 : 60) * locationMultiplier;

  // INR Cost Estimate
  const estimatedCostMin = Math.round(duration * 28000 * locationMultiplier * formatRate * slotMultiplier);
  const estimatedCostMax = Math.round(estimatedCostMin * 1.25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '36px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#FFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
              <div className="badge-pill badge-live" style={{ marginBottom: '10px' }}>
                <Sliders size={13} className="pulse-dot" />
                <span>INTERACTIVE DOOH CAMPAIGN CALCULATOR</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                Configure & Book Your Screen Inventory
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Select prime locations, choose format & frequency, and get an instant audience reach and pricing estimate.
              </p>
            </div>

            {/* Step 1: Select Locations */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#FFF', display: 'block', marginBottom: '10px' }}>
                1. SELECT MUMBAI HUBS ({selectedLocations.length} SELECTED)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {[
                  { id: 'bkc', name: 'BKC Financial District', daily: '420K+ / day' },
                  { id: 'worli', name: 'Worli Sea Face Arterial', daily: '550K+ / day' },
                  { id: 'lower-parel', name: 'Lower Parel Luxury Mall', daily: '310K+ / day' },
                  { id: 'bandra', name: 'Bandra Linking Road', daily: '290K+ / day' },
                  { id: 'andheri', name: 'Andheri WEH Flyover', daily: '680K+ / day' },
                  { id: 'airport', name: 'CSMIA Terminal 2 VIP', daily: '850K+ / day' }
                ].map((loc) => {
                  const isChecked = selectedLocations.includes(loc.id);
                  return (
                    <div
                      key={loc.id}
                      onClick={() => toggleLocation(loc.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: isChecked ? 'rgba(0, 229, 168, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isChecked ? '1px solid #00E5A8' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: isChecked ? '#FFF' : '#C8C8D4' }}>{loc.name}</div>
                        <div style={{ fontSize: '11px', color: isChecked ? '#00E5A8' : 'var(--text-dim)', marginTop: '2px' }}>{loc.daily}</div>
                      </div>
                      {isChecked && <Check size={16} color="#00E5A8" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Screen Format & Flight Duration */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#FFF', display: 'block', marginBottom: '10px' }}>
                  2. SCREEN FORMAT
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'mega-billboard', label: 'Mega Outdoor LED (20×10 to 40×15 ft)' },
                    { id: 'transit-skyboard', label: 'Highway & Metro Transit Skyboard' },
                    { id: 'mall-atrium', label: 'Curved Luxury Mall Atrium Display' }
                  ].map((f) => (
                    <div
                      key={f.id}
                      onClick={() => setScreenFormat(f.id as any)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: screenFormat === f.id ? 'rgba(124, 92, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: screenFormat === f.id ? '1px solid #7C5CFF' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: screenFormat === f.id ? '#FFF' : 'var(--text-muted)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#FFF', display: 'block', marginBottom: '10px' }}>
                  3. CAMPAIGN FLIGHT DURATION
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {[
                    { days: 7, label: '7 Days Blitz' },
                    { days: 14, label: '14 Days Impact' },
                    { days: 30, label: '30 Days Domination' },
                    { days: 90, label: '90 Days Enterprise' }
                  ].map((d) => (
                    <div
                      key={d.days}
                      onClick={() => setDuration(d.days)}
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        background: duration === d.days ? 'rgba(0, 229, 168, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: duration === d.days ? '1px solid #00E5A8' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: duration === d.days ? '#00E5A8' : 'var(--text-muted)',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {d.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 24, 20, 0.95) 0%, rgba(10, 10, 15, 0.95) 100%)',
              border: '1px solid rgba(0, 229, 168, 0.35)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '28px',
              boxShadow: '0 10px 30px rgba(0, 229, 168, 0.1)'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: '#00E5A8', textTransform: 'uppercase', marginBottom: '14px' }}>
                ESTIMATED AUDIENCE TELEMETRY & CAMPAIGN VALUE
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>ESTIMATED TOTAL IMPRESSIONS</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
                    {totalEstimatedImpressions.toLocaleString()}+
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>UNIQUE AUDIENCE REACH</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#00E5A8', marginTop: '2px' }}>
                    {totalUniqueReach.toLocaleString()}+
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>TOTAL BROADCAST PLAYS</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#7C5CFF', marginTop: '2px' }}>
                    {totalPlays.toLocaleString()} Slots
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>ESTIMATED INVESTMENT</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFB800', marginTop: '2px' }}>
                    ₹{(estimatedCostMin / 100000).toFixed(2)}L - ₹{(estimatedCostMax / 100000).toFixed(2)}L
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                *Includes hardware playback, proof-of-play sensor audits, daytime/nighttime automated luminance balancing, and 5G cloud scheduling.
              </div>
            </div>

            {/* Contact Details & Submit */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Brand / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Tech, Zomato, Mercedes"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      background: '#09090e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marketing@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      background: '#09090e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      background: '#09090e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <input
                  type="checkbox"
                  id="creative-help"
                  checked={needsCreativeHelp}
                  onChange={(e) => setNeedsCreativeHelp(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#00E5A8', cursor: 'pointer' }}
                />
                <label htmlFor="creative-help" style={{ fontSize: '13px', color: 'var(--text-white)', cursor: 'pointer' }}>
                  I would also like Heramba's in-house motion studio to design/tune our anamorphic 3D or high-contrast ad creative.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '15px', fontWeight: 800 }}
              >
                <span>Request Slot Lock & Formal Quotation</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 229, 168, 0.15)',
              border: '2px solid #00E5A8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <Check size={32} color="#00E5A8" />
            </div>

            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', marginBottom: '10px' }}>
              Slot Allocation Request Received!
            </h3>

            <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Thank you, <strong>{brandName || 'Partner'}</strong>. Your campaign configuration for <strong>{selectedLocations.length} Mumbai Hubs</strong> ({duration} days) has been routed to our media planning desk.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: '12px',
              maxWidth: '420px',
              margin: '0 auto 30px auto',
              fontSize: '13px',
              color: 'var(--text-muted)'
            }}>
              <div>Reference ID: <strong style={{ color: '#00E5A8' }}>HRB-MUM-{Math.floor(1000 + Math.random() * 9000)}</strong></div>
              <div>Response Time: <strong>Within 2 Hours</strong></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919876543210?text=Hi%20Heramba,%20I%20just%20configured%20a%20DOOH%20campaign%20for%20${encodeURIComponent(brandName || 'my brand')}%20on%20your%20website.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '12px 28px' }}
              >
                <span>Instant WhatsApp Connect</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn btn-secondary"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
