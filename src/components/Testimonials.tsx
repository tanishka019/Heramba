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
      icon: <HeartPulse size={20} color="#C34811" />
    },
    {
      quote: "Heramba is one of our Top 3 IT vendors. The team is very professional and has deployed their solution across 250+ retail stores nationwide. The solution itself is very easy to use, is in line with our business needs, and has the capability to be customized to meet our larger omni-channel retail goals.",
      author: "VP & Head of Marketing",
      role: "Apparel & Fashion Retail Chain",
      location: "Mumbai, India",
      size: "1,001–5,000 employees",
      icon: <Store size={20} color="#0B369A" />
    },
    {
      quote: "Determined to provide a delightful customer experience to our enterprise clients, we on-boarded Heramba as our primary Digital Signage partner. Heramba’s cloud-based platform helped us standardize content across 80 locations and enabled effortless remote monitoring. The portal is convenient, and changes can be made in real time.",
      author: "Managing Principal",
      role: "Enterprise IT Managed Service Reseller",
      location: "Dallas, USA",
      size: "50–200 employees",
      icon: <Laptop size={20} color="#C34811" />
    },
    {
      quote: "Heramba has exceeded our expectations in every aspect. It's a powerful, user-friendly, and reliable solution that has transformed the way we showcase our new season collections. From the moment we integrated this software into our flagship stores, the impact on visual merchandising and walk-ins has been extraordinary.",
      author: "Chief Brand Officer",
      role: "Luxury Lifestyle & Watch Retailer",
      location: "Bengaluru, India",
      size: "500–1,000 employees",
      icon: <Building2 size={20} color="#0B369A" />
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
      backgroundColor: '#F7F5F2', /* Stone Linen light wash */
      padding: '90px 0',
      borderBottom: '1px solid #D9D1CA'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#C34811',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            PROVEN CLIENT SUCCESS
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#121826',
            marginBottom: '12px'
          }}>
            Thousands of Devices Deployed Globally for Esteemed Clients
          </h2>

          <p style={{ fontSize: '16px', color: '#5E6778' }}>
            WHAT OUR USERS ARE SAYING
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #D9D1CA',
          borderRadius: '16px',
          padding: '44px 40px',
          boxShadow: '0 10px 30px rgba(11, 54, 154, 0.05)',
          position: 'relative'
        }}>
          {/* Top Bar with rating & icon */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#F7F5F2',
                border: '1px solid #D9D1CA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {current.icon}
              </div>
              <div style={{ display: 'flex', color: '#C34811' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C34811" />
                ))}
              </div>
            </div>

            <Quote size={32} color="#D9D1CA" />
          </div>

          {/* Quote Text */}
          <p style={{
            fontSize: '18px',
            color: '#121826',
            lineHeight: 1.7,
            fontStyle: 'italic',
            marginBottom: '32px'
          }}>
            "{current.quote}"
          </p>

          {/* Author Details & Carousel Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #ECE7E1',
            paddingTop: '20px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0B369A' }}>
                {current.author}
              </div>
              <div style={{ fontSize: '13px', color: '#374151', marginTop: '2px', fontWeight: 600 }}>
                {current.role} • <strong>{current.location}</strong>
              </div>
              <div style={{ fontSize: '12px', color: '#5E6778', marginTop: '2px' }}>
                Organization: {current.size}
              </div>
            </div>

            {/* Slider Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #D9D1CA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0B369A',
                  transition: 'all 0.15s'
                }}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0B369A', padding: '0 8px' }}>
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                onClick={handleNext}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #D9D1CA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0B369A',
                  transition: 'all 0.15s'
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
