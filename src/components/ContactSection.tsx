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
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            REACH OUT
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Get in Touch
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            Speak directly with our digital signage solution consultants or schedule a tailored demonstration.
          </p>
        </div>

        {/* Split Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }} id="contact-grid">
          
          {/* Left: Contact Form */}
          <div className="light-card" style={{ padding: '36px', borderColor: '#D9D1CA' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#121826', marginBottom: '8px' }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: '14px', color: '#5E6778', marginBottom: '24px' }}>
              Our enterprise signage specialists typically respond within 2 business hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '6px' }}>
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
                        padding: '11px 14px',
                        borderRadius: '6px',
                        border: '1px solid #D9D1CA',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '6px' }}>
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
                        padding: '11px 14px',
                        borderRadius: '6px',
                        border: '1px solid #D9D1CA',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#121826', display: 'block', marginBottom: '6px' }}>
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
                      padding: '11px 14px',
                      borderRadius: '6px',
                      border: '1px solid #D9D1CA',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '13px', fontSize: '15px' }}
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#F7F5F2',
                  border: '1px solid #D9D1CA',
                  color: '#0B369A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <CheckCircle2 size={30} color="#0B369A" />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#121826', marginBottom: '8px' }}>
                  Thank you, {name}!
                </h4>
                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                  We have received your request. A digital signage specialist will reach out to <strong>{email}</strong> shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right: Direct Contact & Office Locations in Gallery Blue & Terracotta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Quick Contact Box */}
            <div className="light-card" style={{ padding: '28px', borderColor: '#D9D1CA' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Phone size={18} color="#C34811" />
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0B369A' }}>
                  Direct Phone Lines
                </span>
              </div>
              <div style={{ fontSize: '14px', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>Main Desk: <strong style={{ color: '#121826' }}>022 6964 5923</strong></div>
                <div>Sales Support: <strong style={{ color: '#121826' }}>+91 73308 76025</strong></div>
                <div>Email: <a href="mailto:info@heramba.in" style={{ color: '#C34811', textDecoration: 'none', fontWeight: 600 }}>info@heramba.in</a></div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #ECE7E1' }}>
                <a
                  href="https://wa.me/917330876025?text=Hi%20Heramba,%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20signage."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', color: '#0B369A', borderColor: '#D9D1CA', background: '#F7F5F2' }}
                >
                  <MessageSquare size={15} color="#C34811" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Global Offices Box */}
            <div className="light-card" style={{ padding: '28px', borderColor: '#D9D1CA' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Building size={18} color="#0B369A" />
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0B369A' }}>
                  Regional Offices
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#C34811' }}>Mumbai (HQ):</strong>
                  <p style={{ color: '#5E6778', margin: '2px 0 0 0' }}>
                    409, Arun Chambers, Tardeo Road, Mumbai 400 034
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#0B369A' }}>Hyderabad:</strong>
                  <p style={{ color: '#5E6778', margin: '2px 0 0 0' }}>
                    Plot 52, Lakshmi Nagar Colony, Shaikpet / Jubilee Hills, Hyderabad 500 008
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#0B369A' }}>Bengaluru:</strong>
                  <p style={{ color: '#5E6778', margin: '2px 0 0 0' }}>
                    B3024, DLF Westend Heights, Akshaya Nagar, Bengaluru 560 068
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#0B369A' }}>North America (Canada & USA):</strong>
                  <p style={{ color: '#5E6778', margin: '2px 0 0 0' }}>
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
          }
        }
      `}</style>
    </section>
  );
};
