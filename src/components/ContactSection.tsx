'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Building 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      backgroundColor: '#FFFFFF',
      padding: '95px 0',
      borderBottom: '1px solid #E2E5EA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px auto' }}>
          <h2 style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            fontWeight: 800,
            color: '#191D24',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Get in Touch With Our Specialists
          </h2>

          <p style={{ fontSize: '16px', color: '#717B8C', lineHeight: 1.6, margin: 0 }}>
            Speak directly with our digital signage solution consultants or schedule a tailored enterprise demonstration.
          </p>
        </div>

        {/* Split Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '44px',
          alignItems: 'start'
        }} id="contact-grid">
          
          {/* Left: Contact Form */}
          <div className="light-card" style={{
            padding: '40px',
            borderColor: '#E2E5EA',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(43, 52, 69, 0.05)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#191D24', marginBottom: '8px' }}>
              Send Us an Inquiry
            </h3>
            <p style={{ fontSize: '14px', color: '#717B8C', marginBottom: '26px' }}>
              Our enterprise signage specialists typically respond within 2 business hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#191D24', display: 'block', marginBottom: '7px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #D8DCE3',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      transition: 'border-color 0.2s, box-shadow 0.2s'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF772A';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 119, 42, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D8DCE3';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} id="contact-two-col">
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#191D24', display: 'block', marginBottom: '7px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D8DCE3',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                        transition: 'border-color 0.2s, box-shadow 0.2s'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#FF772A';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 119, 42, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D8DCE3';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#191D24', display: 'block', marginBottom: '7px' }}>
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
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D8DCE3',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                        transition: 'border-color 0.2s, box-shadow 0.2s'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#FF772A';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 119, 42, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D8DCE3';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#191D24', display: 'block', marginBottom: '7px' }}>
                    How can we help you? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your screen requirements, locations, or hardware setup..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #D8DCE3',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                      transition: 'border-color 0.2s, box-shadow 0.2s'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF772A';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 119, 42, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D8DCE3';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderRadius: '8px',
                    backgroundColor: '#FF772A',
                    color: '#FFFFFF',
                    boxShadow: '0 6px 20px rgba(255, 119, 42, 0.28)'
                  }}
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(255, 119, 42, 0.09)',
                  border: '1px solid rgba(255, 119, 42, 0.25)',
                  color: '#FF772A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <CheckCircle2 size={32} color="#FF772A" />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#191D24', marginBottom: '8px' }}>
                  Thank you, {name}!
                </h4>
                <p style={{ fontSize: '14px', color: '#717B8C', lineHeight: 1.6, marginBottom: '24px' }}>
                  We have received your inquiry. A digital signage consultant will contact <strong>{email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ borderRadius: '8px' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right: Direct Contact & Office Locations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Quick Contact Box */}
            <div className="light-card" style={{
              padding: '30px',
              borderColor: '#E2E5EA',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 119, 42, 0.09)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF772A'
                }}>
                  <Phone size={18} />
                </div>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#191D24' }}>
                  Direct Phone Lines
                </span>
              </div>
              <div style={{ fontSize: '14px', color: '#4A5260', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>Main Desk: <strong style={{ color: '#191D24' }}>022 6964 5923</strong></div>
                <div>Sales Support: <strong style={{ color: '#191D24' }}>+91 73308 76025</strong></div>
                <div>Email: <a href="mailto:info@heramba.in" style={{ color: '#FF772A', textDecoration: 'none', fontWeight: 600 }}>info@heramba.in</a></div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid #E8EBEF' }}>
                <a
                  href="https://wa.me/917330876025?text=Hi%20Heramba,%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20signage."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    color: '#2B3445',
                    borderColor: '#D8DCE3',
                    borderRadius: '8px',
                    fontWeight: 700
                  }}
                >
                  <MessageSquare size={15} color="#FF772A" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Global Offices Box */}
            <div className="light-card" style={{
              padding: '30px',
              borderColor: '#E2E5EA',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(43, 52, 69, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(43, 52, 69, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2B3445'
                }}>
                  <Building size={18} />
                </div>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#191D24' }}>
                  Regional Offices
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#FF772A', fontSize: '13.5px' }}>Mumbai (HQ):</strong>
                  <p style={{ color: '#717B8C', margin: '3px 0 0 0', lineHeight: 1.5 }}>
                    409, Arun Chambers, Tardeo Road, Mumbai 400 034
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#2B3445', fontSize: '13.5px' }}>Hyderabad:</strong>
                  <p style={{ color: '#717B8C', margin: '3px 0 0 0', lineHeight: 1.5 }}>
                    Plot 52, Lakshmi Nagar Colony, Shaikpet / Jubilee Hills, Hyderabad 500 008
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#2B3445', fontSize: '13.5px' }}>Bengaluru:</strong>
                  <p style={{ color: '#717B8C', margin: '3px 0 0 0', lineHeight: 1.5 }}>
                    B3024, DLF Westend Heights, Akshaya Nagar, Bengaluru 560 068
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#2B3445', fontSize: '13.5px' }}>North America (Canada &amp; USA):</strong>
                  <p style={{ color: '#717B8C', margin: '3px 0 0 0', lineHeight: 1.5 }}>
                    20 Shore Breeze Drive, Toronto, M8V 0C7 • Phone: +1 437 986 2288
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #contact-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
