'use client';
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, Store, HeartPulse, Laptop } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Heramba’s digital signage has been a great addition to our clinic! Given its high visibility in our waiting area, it has helped us educate patients through illustrative explanatory videos and digital creatives – both of which can be easily created and scheduled through their platform. Their service has been great, thanks to their team being approachable and ready to help!",
      author: "Clinic Operations Director",
      role: "Multi-Specialty Healthcare Clinic Chain",
      location: "Toronto, Canada",
      size: "100–500 employees",
      icon: <HeartPulse size={20} color="#FF772A" />
    },
    {
      quote: "Heramba is one of our Top 3 IT vendors. The team is very professional and has deployed their solution across 250+ retail stores nationwide. The solution itself is very easy to use, is in line with our business needs, and has the capability to be customized to meet our larger omni-channel retail goals.",
      author: "VP & Head of Marketing",
      role: "Apparel & Fashion Retail Chain",
      location: "Mumbai, India",
      size: "1,001–5,000 employees",
      icon: <Store size={20} color="#2B3445" />
    },
    {
      quote: "Determined to provide a delightful customer experience to our enterprise clients, we on-boarded Heramba as our primary Digital Signage partner. Heramba’s cloud-based platform helped us standardize content across 80 locations and enabled effortless remote monitoring. The portal is convenient, and changes can be made in real time.",
      author: "Managing Principal",
      role: "Enterprise IT Managed Service Reseller",
      location: "Dallas, USA",
      size: "50–200 employees",
      icon: <Laptop size={20} color="#FF772A" />
    },
    {
      quote: "Heramba has exceeded our expectations in every aspect. It's a powerful, user-friendly, and reliable solution that has transformed the way we showcase our new season collections. From the moment we integrated this software into our flagship stores, the impact on visual merchandising and walk-ins has been extraordinary.",
      author: "Chief Brand Officer",
      role: "Luxury Lifestyle & Watch Retailer",
      location: "Bengaluru, India",
      size: "500–1,000 employees",
      icon: <Building2 size={20} color="#2B3445" />
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" style={{
      backgroundColor: '#F8F9FA',
      padding: '95px 0',
      borderBottom: '1px solid #E2E5EA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <h2 style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            fontWeight: 800,
            color: '#191D24',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Trusted by Enterprise Operators Worldwide
          </h2>

          <p style={{ fontSize: '16px', color: '#717B8C', lineHeight: 1.6, margin: 0 }}>
            Hear how retail chains, clinics, and IT service providers scale their digital display networks with Heramba.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #E2E5EA',
          borderRadius: '16px',
          padding: '48px 44px',
          boxShadow: '0 16px 40px -8px rgba(43, 52, 69, 0.07)',
          position: 'relative'
        }}>
          {/* Top Bar with rating & icon */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: '#F8F9FA',
                border: '1px solid #E2E5EA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {current.icon}
              </div>
              <div style={{ display: 'flex', color: '#FF772A', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF772A" />
                ))}
              </div>
            </div>

            <Quote size={32} color="#E2E5EA" />
          </div>

          {/* Quote Text */}
          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 19px)',
            color: '#191D24',
            lineHeight: 1.65,
            fontStyle: 'normal',
            fontWeight: 500,
            marginBottom: '32px'
          }}>
            "{current.quote}"
          </p>

          {/* Author Details & Carousel Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #E8EBEF',
            paddingTop: '22px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#191D24' }}>
                {current.author}
              </div>
              <div style={{ fontSize: '13.5px', color: '#4A5260', marginTop: '2px', fontWeight: 600 }}>
                {current.role} • <strong>{current.location}</strong>
              </div>
              <div style={{ fontSize: '12px', color: '#717B8C', marginTop: '2px' }}>
                Deployment Scale: {current.size}
              </div>
            </div>

            {/* Slider Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid #D8DCE3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#2B3445',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 2px 6px rgba(25, 29, 36, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF772A';
                  e.currentTarget.style.color = '#FF772A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#D8DCE3';
                  e.currentTarget.style.color = '#2B3445';
                }}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <span style={{ fontSize: '13px', fontWeight: 700, color: '#4A5260', padding: '0 6px' }}>
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                onClick={handleNext}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid #D8DCE3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#2B3445',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 2px 6px rgba(25, 29, 36, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF772A';
                  e.currentTarget.style.color = '#FF772A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#D8DCE3';
                  e.currentTarget.style.color = '#2B3445';
                }}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
