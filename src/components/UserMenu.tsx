'use client';
/**
 * UserMenu.tsx — Heramba navbar user avatar + dropdown
 * Shown in place of "Customer Login" button when user is signed in.
 *
 * ADMIN PORTAL:
 * When user.role === 'admin', shows an "Admin Portal" link.
 * This link will route to /admin once that portal is built.
 */

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, User, Settings, Shield, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0] ?? '')
    .join('')
    .toUpperCase();
}

export function UserMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!user) return null;

  const initials = getInitials(user.name || user.email);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        id="user-menu-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(11,54,154,0.06)', border: '1.5px solid rgba(11,54,154,0.15)',
          borderRadius: '10px', padding: '6px 10px 6px 6px',
          cursor: 'pointer', transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C34811'; e.currentTarget.style.background = 'rgba(195,72,17,0.06)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(11,54,154,0.15)'; e.currentTarget.style.background = 'rgba(11,54,154,0.06)'; }}
      >
        {/* Avatar */}
        <div style={{
          width: '30px', height: '30px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #0B369A, #C34811)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFF', fontSize: '11px', fontWeight: 700, flexShrink: 0,
        }}>
          {initials}
        </div>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#121826', maxWidth: '90px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.name.split(' ')[0] || 'Account'}
        </span>
        <ChevronDown size={13} color="#6B7280" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', right: 0,
          width: '230px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E0D8',
          borderRadius: '14px',
          boxShadow: '0 16px 40px rgba(18,24,38,0.14)',
          overflow: 'hidden',
          zIndex: 200,
          animation: 'dropdownIn 0.18s cubic-bezier(0.16,1,0.3,1)',
        }}>
          {/* User info header */}
          <div style={{ padding: '14px 16px 12px', borderBottom: '1px solid #F3F0EC' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: 'linear-gradient(135deg, #0B369A, #C34811)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FFF', fontSize: '13px', fontWeight: 700,
              }}>
                {initials}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#121826', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</div>
              </div>
            </div>
            {/* Role badge */}
            <div style={{ marginTop: '8px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                padding: '3px 8px', borderRadius: '6px',
                backgroundColor: user.role === 'admin' ? 'rgba(195,72,17,0.1)' : 'rgba(11,54,154,0.08)',
                color: user.role === 'admin' ? '#C34811' : '#0B369A',
                border: `1px solid ${user.role === 'admin' ? 'rgba(195,72,17,0.2)' : 'rgba(11,54,154,0.15)'}`,
              }}>
                {user.role === 'admin' && <Shield size={9} />}
                {user.role}
              </span>
              {user.provider === 'google' && (
                <span style={{ marginLeft: '5px', fontSize: '10px', color: '#9CA3AF', fontWeight: 500 }}>via Google</span>
              )}
            </div>
          </div>

          {/* Menu items */}
          <div style={{ padding: '6px' }}>
            <MenuItem icon={<User size={14} />} label="My Account" onClick={() => setOpen(false)} />
            <MenuItem icon={<Settings size={14} />} label="Settings" onClick={() => setOpen(false)} />

            {/* Admin Portal link — shown only for admins */}
            {user.role === 'admin' && (
              <Link href="/admin" style={{ textDecoration: 'none' }}>
                <MenuItem icon={<Shield size={14} />} label="Admin Portal" accent onClick={() => setOpen(false)} />
              </Link>
            )}

            <div style={{ height: '1px', background: '#F3F0EC', margin: '4px 0' }} />

            <MenuItem
              icon={<LogOut size={14} />}
              label="Sign Out"
              danger
              onClick={async () => {
                setOpen(false);
                await signOut();
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

// ── Helper sub-component ──
interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  accent?: boolean;
}

function MenuItem({ icon, label, onClick, danger, accent }: MenuItemProps) {
  const [hovered, setHovered] = useState(false);
  const color = danger ? '#DC2626' : accent ? '#C34811' : '#374151';
  const bg = hovered ? (danger ? '#FEF2F2' : accent ? 'rgba(195,72,17,0.08)' : '#F7F5F2') : 'transparent';

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
        padding: '9px 10px', borderRadius: '8px', border: 'none',
        background: bg, cursor: 'pointer', textAlign: 'left',
        fontSize: '13px', fontWeight: 600, color,
        transition: 'all 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ opacity: 0.8 }}>{icon}</span>
      {label}
    </button>
  );
}
