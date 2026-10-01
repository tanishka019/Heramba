'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [screens, setScreens] = useState('1–5 Screens');
  const [vertical, setVertical] = useState('Retail Outlet');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '36px', maxWidth: '580px' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F7F5F2',
            border: '1px solid #D9D1CA',
            color: '#0B369A',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div className="badge-pill" style={{ marginBottom: '8px' }}>
                <Zap size={13} fill="#C34811" color="#C34811" />
                <span>14-DAY RISK-FREE ACCESS</span>
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#121826' }}>
                Get Your Free Trial
              </h2>
              <p style={{ fontSize: '14px', color: '#5E6778', marginTop: '4px' }}>
                Deploy Heramba cloud digital signage on up to 3 screens. No credit card required.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Company / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cafe Bistro Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@cafebistro.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Number of Displays
                  </label>
                  <select
                    value={screens}
                    onChange={(e) => setScreens(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      background: '#FFF',
                      outline: 'none'
                    }}
                  >
                    <option value="1–5 Screens">1–5 Screens</option>
                    <option value="6–20 Screens">6–20 Screens</option>
                    <option value="21–50 Screens">21–50 Screens</option>
                    <option value="50+ Displays (Enterprise)">50+ Displays (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '4px' }}>
                    Industry Sector
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      background: '#FFF',
                      outline: 'none'
                    }}
                  >
                    <option value="Retail Outlet">Retail Outlet</option>
                    <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                    <option value="Healthcare & Hospital">Healthcare & Hospital</option>
                    <option value="Corporate Office">Corporate Office</option>
                    <option value="Manufacturing Plant">Manufacturing Plant</option>
                    <option value="Advertising & DOOH">Advertising & DOOH</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#5E6778' }}>
                <ShieldCheck size={16} color="#0B369A" />
                <span>Your details are protected under ISO 27001 data privacy standards.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '6px' }}
              >
                <span>Activate Free Trial</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#F7F5F2',
              border: '1px solid #D9D1CA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: '#0B369A'
            }}>
              <CheckCircle2 size={32} color="#0B369A" />
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#121826', marginBottom: '8px' }}>
              Free Trial Activated!
            </h3>

            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px auto' }}>
              Welcome aboard, <strong>{name}</strong>! Your account for <strong>{company}</strong> has been provisioned. We have sent your trial login credentials and screen pairing code to <strong>{email}</strong>.
            </p>

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
        )}

      </div>
    </div>
  );
};
