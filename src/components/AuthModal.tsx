'use client';
/**
 * AuthModal.tsx — Heramba Login / Sign Up Modal
 *
 * Features:
 * - Tab-based toggle: Login ↔ Sign Up
 * - Google OAuth button (mock now, real with Supabase)
 * - Email + password forms with validation
 * - "Forgot password" flow
 * - Animated transitions between views
 * - Fully branded with Heramba palette
 * - On success: refreshes AuthContext and closes
 */

import React, { useState, useEffect } from 'react';
import {
  X, Mail, Lock, User, Eye, EyeOff, ArrowRight,
  Loader2, CheckCircle, AlertCircle, Tv
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  resetPassword,
} from '@/lib/auth';

type View = 'login' | 'signup' | 'forgot';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: View;
}

// ─── Google Icon SVG ──────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

// ─── Input Component ──────────────────────────────────────────────────────────
interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  rightEl?: React.ReactNode;
  error?: string;
  autoComplete?: string;
}

function InputField({ id, type, label, value, onChange, placeholder, icon, rightEl, error, autoComplete }: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
          color: focused ? '#C34811' : '#9CA3AF', transition: 'color 0.2s', pointerEvents: 'none'
        }}>
          {icon}
        </div>
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 14px 12px 42px',
            paddingRight: rightEl ? '44px' : '14px',
            border: `1.5px solid ${error ? '#EF4444' : focused ? '#C34811' : '#E5E0D8'}`,
            borderRadius: '10px',
            fontSize: '14px',
            color: '#121826',
            backgroundColor: '#FDFCFB',
            outline: 'none',
            transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: focused ? '0 0 0 3px rgba(195,72,17,0.12)' : 'none',
          }}
        />
        {rightEl && (
          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
            {rightEl}
          </div>
        )}
      </div>
      {error && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#EF4444', fontSize: '12px' }}>
          <AlertCircle size={12} /> {error}
        </div>
      )}
    </div>
  );
}

// ─── Main Modal ───────────────────────────────────────────────────────────────
export function AuthModal({ isOpen, onClose, defaultView = 'login' }: AuthModalProps) {
  const { refreshUser } = useAuth();
  const [view, setView] = useState<View>(defaultView);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // Field-level errors
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  // Reset state on view change
  useEffect(() => {
    setError(null); setSuccess(null);
    setName(''); setEmail(''); setPassword(''); setConfirm('');
    setNameErr(''); setEmailErr(''); setPasswordErr(''); setConfirmErr('');
  }, [view]);

  // Reset on open
  useEffect(() => {
    if (isOpen) setView(defaultView);
  }, [isOpen, defaultView]);

  // Trap scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  // ── Validation ──
  function validateLogin(): boolean {
    let ok = true;
    setEmailErr(''); setPasswordErr('');
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setEmailErr('Enter a valid email.'); ok = false; }
    if (password.length < 6) { setPasswordErr('Password must be at least 6 characters.'); ok = false; }
    return ok;
  }

  function validateSignup(): boolean {
    let ok = true;
    setNameErr(''); setEmailErr(''); setPasswordErr(''); setConfirmErr('');
    if (name.trim().length < 2) { setNameErr('Name must be at least 2 characters.'); ok = false; }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setEmailErr('Enter a valid email.'); ok = false; }
    if (password.length < 8) { setPasswordErr('Password must be at least 8 characters.'); ok = false; }
    if (password !== confirm) { setConfirmErr("Passwords don't match."); ok = false; }
    return ok;
  }

  // ── Handlers ──
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!validateLogin()) return;
    setLoading(true); setError(null);
    const { user, error: err } = await signInWithEmail(email, password);
    setLoading(false);
    if (err || !user) { setError(err ?? 'Login failed.'); return; }
    refreshUser();
    setSuccess(`Welcome back, ${user.name || user.email}!`);
    setTimeout(onClose, 1500);
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!validateSignup()) return;
    setLoading(true); setError(null);
    const { user, error: err } = await signUpWithEmail(email, password, name.trim());
    setLoading(false);
    if (err || !user) { setError(err ?? 'Sign up failed.'); return; }
    refreshUser();
    setSuccess(`Account created! Welcome, ${user.name}!`);
    setTimeout(onClose, 1600);
  }

  async function handleGoogle() {
    setGoogleLoading(true); setError(null);
    const { user, error: err } = await signInWithGoogle();
    setGoogleLoading(false);
    if (err || !user) { setError(err ?? 'Google sign-in failed.'); return; }
    refreshUser();
    setSuccess(`Signed in with Google! Welcome, ${user.name}.`);
    setTimeout(onClose, 1500);
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setEmailErr('Enter a valid email.'); return; }
    setLoading(true); setError(null);
    await resetPassword(email);
    setLoading(false);
    setSuccess('If an account exists, a reset link will be sent to your email.');
  }

  // ── Shared divider ──
  const Divider = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '4px 0' }}>
      <div style={{ flex: 1, height: '1px', background: '#E5E0D8' }} />
      <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>or continue with email</span>
      <div style={{ flex: 1, height: '1px', background: '#E5E0D8' }} />
    </div>
  );

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: 'rgba(18,24,38,0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '100%', maxWidth: '460px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow: '0 32px 80px rgba(11,54,154,0.22), 0 8px 24px rgba(195,72,17,0.1)',
        overflow: 'hidden',
        animation: 'slideUp 0.3s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative',
      }}>

        {/* ── Header band ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0B369A 0%, #1a4fbe 60%, #C34811 130%)',
          padding: '32px 32px 28px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* decorative circles */}
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '60px', width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(195,72,17,0.15)' }} />

          {/* Logo + close */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '9px', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Tv size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#FFF', letterSpacing: '-0.02em' }}>
                HERAMBA<span style={{ color: '#FFA67A' }}>.</span>
              </span>
            </div>
            <button
              onClick={onClose}
              id="auth-modal-close"
              aria-label="Close"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', padding: '6px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'background 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={16} />
            </button>
          </div>

          {/* Title */}
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.025em', margin: 0 }}>
              {view === 'login' && 'Welcome back'}
              {view === 'signup' && 'Create your account'}
              {view === 'forgot' && 'Reset your password'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '5px' }}>
              {view === 'login' && 'Sign in to access your Heramba dashboard'}
              {view === 'signup' && 'Join thousands of businesses using Heramba'}
              {view === 'forgot' && "We'll send a reset link to your inbox"}
            </p>
          </div>
        </div>

        {/* ── Tabs (Login / Sign Up) ── */}
        {view !== 'forgot' && (
          <div style={{ display: 'flex', borderBottom: '1px solid #E5E0D8', backgroundColor: '#FAFAF9' }}>
            {(['login', 'signup'] as const).map((v) => (
              <button
                key={v}
                id={`auth-tab-${v}`}
                onClick={() => setView(v)}
                style={{
                  flex: 1, padding: '14px', border: 'none', cursor: 'pointer', background: 'transparent',
                  fontSize: '14px', fontWeight: 700,
                  color: view === v ? '#C34811' : '#6B7280',
                  borderBottom: `2.5px solid ${view === v ? '#C34811' : 'transparent'}`,
                  transition: 'all 0.2s',
                  marginBottom: '-1px',
                }}
              >
                {v === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>
        )}

        {/* ── Body ── */}
        <div style={{ padding: '28px 32px 32px' }}>

          {/* Success message */}
          {success && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '14px', marginBottom: '20px' }}>
              <CheckCircle size={18} color="#16A34A" />
              <span style={{ fontSize: '13px', color: '#166534', fontWeight: 500 }}>{success}</span>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '14px', marginBottom: '20px' }}>
              <AlertCircle size={18} color="#DC2626" />
              <span style={{ fontSize: '13px', color: '#991B1B', fontWeight: 500 }}>{error}</span>
            </div>
          )}

          {/* ── LOGIN VIEW ── */}
          {view === 'login' && !success && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Google Button */}
              <button
                id="auth-google-signin"
                onClick={handleGoogle}
                disabled={googleLoading}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '13px', border: '1.5px solid #E5E0D8', borderRadius: '10px',
                  backgroundColor: googleLoading ? '#F9F9F9' : '#FFFFFF', cursor: googleLoading ? 'default' : 'pointer',
                  fontSize: '14px', fontWeight: 600, color: '#374151',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 4px rgba(18,24,38,0.06)',
                }}
                onMouseEnter={(e) => { if (!googleLoading) { e.currentTarget.style.borderColor = '#C34811'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(195,72,17,0.12)'; }}}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E0D8'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(18,24,38,0.06)'; }}
              >
                {googleLoading ? <Loader2 size={18} className="spin" /> : <GoogleIcon />}
                {googleLoading ? 'Signing in with Google…' : 'Continue with Google'}
              </button>

              <Divider />

              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InputField id="login-email" type="email" label="Email address" value={email}
                  onChange={setEmail} placeholder="you@company.com" icon={<Mail size={15} />}
                  error={emailErr} autoComplete="email" />
                <InputField id="login-password" type={showPassword ? 'text' : 'password'} label="Password"
                  value={password} onChange={setPassword} placeholder="Your password" icon={<Lock size={15} />}
                  error={passwordErr} autoComplete="current-password"
                  rightEl={
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex' }}>
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  } />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setView('forgot')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C34811', fontSize: '13px', fontWeight: 600 }}>
                    Forgot password?
                  </button>
                </div>

                <button
                  id="auth-login-submit"
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '13px', borderRadius: '10px', border: 'none',
                    background: loading ? '#E5E0D8' : 'linear-gradient(135deg, #C34811, #A83D0D)',
                    color: '#FFF', fontSize: '15px', fontWeight: 700, cursor: loading ? 'default' : 'pointer',
                    boxShadow: loading ? 'none' : '0 4px 16px rgba(195,72,17,0.35)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {loading ? <><Loader2 size={16} className="spin" /> Signing in…</> : <><span>Sign In</span><ArrowRight size={16} /></>}
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
                Don&apos;t have an account?{' '}
                <button onClick={() => setView('signup')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0B369A', fontWeight: 700 }}>
                  Sign up free
                </button>
              </p>
            </div>
          )}

          {/* ── SIGNUP VIEW ── */}
          {view === 'signup' && !success && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <button
                id="auth-google-signup"
                onClick={handleGoogle}
                disabled={googleLoading}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '13px', border: '1.5px solid #E5E0D8', borderRadius: '10px',
                  backgroundColor: googleLoading ? '#F9F9F9' : '#FFFFFF', cursor: googleLoading ? 'default' : 'pointer',
                  fontSize: '14px', fontWeight: 600, color: '#374151',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 4px rgba(18,24,38,0.06)',
                }}
                onMouseEnter={(e) => { if (!googleLoading) { e.currentTarget.style.borderColor = '#C34811'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(195,72,17,0.12)'; }}}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E0D8'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(18,24,38,0.06)'; }}
              >
                {googleLoading ? <Loader2 size={18} className="spin" /> : <GoogleIcon />}
                {googleLoading ? 'Signing up with Google…' : 'Sign up with Google'}
              </button>

              <Divider />

              <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <InputField id="signup-name" type="text" label="Full Name" value={name} onChange={setName}
                  placeholder="Your full name" icon={<User size={15} />} error={nameErr} autoComplete="name" />
                <InputField id="signup-email" type="email" label="Work Email" value={email} onChange={setEmail}
                  placeholder="you@company.com" icon={<Mail size={15} />} error={emailErr} autoComplete="email" />
                <InputField id="signup-password" type={showPassword ? 'text' : 'password'} label="Password"
                  value={password} onChange={setPassword} placeholder="Min. 8 characters" icon={<Lock size={15} />}
                  error={passwordErr} autoComplete="new-password"
                  rightEl={
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex' }}>
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  } />
                <InputField id="signup-confirm" type={showConfirm ? 'text' : 'password'} label="Confirm Password"
                  value={confirm} onChange={setConfirm} placeholder="Re-enter password" icon={<Lock size={15} />}
                  error={confirmErr} autoComplete="new-password"
                  rightEl={
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex' }}>
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  } />

                {/* Password strength indicator */}
                {password.length > 0 && (
                  <div>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                      {[1,2,3,4].map((i) => (
                        <div key={i} style={{
                          flex: 1, height: '3px', borderRadius: '2px',
                          backgroundColor: password.length >= i * 3 ? (password.length >= 12 ? '#16A34A' : password.length >= 8 ? '#F59E0B' : '#EF4444') : '#E5E0D8',
                          transition: 'background-color 0.3s',
                        }} />
                      ))}
                    </div>
                    <span style={{ fontSize: '11px', color: password.length >= 12 ? '#16A34A' : password.length >= 8 ? '#D97706' : '#DC2626' }}>
                      {password.length >= 12 ? 'Strong password' : password.length >= 8 ? 'Moderate — add symbols for strength' : 'Weak password'}
                    </span>
                  </div>
                )}

                <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5, margin: 0 }}>
                  By signing up you agree to Heramba&apos;s{' '}
                  <span style={{ color: '#0B369A', fontWeight: 600, cursor: 'pointer' }}>Terms of Service</span>
                  {' '}and{' '}
                  <span style={{ color: '#0B369A', fontWeight: 600, cursor: 'pointer' }}>Privacy Policy</span>.
                </p>

                <button
                  id="auth-signup-submit"
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '13px', borderRadius: '10px', border: 'none',
                    background: loading ? '#E5E0D8' : 'linear-gradient(135deg, #0B369A, #082975)',
                    color: '#FFF', fontSize: '15px', fontWeight: 700, cursor: loading ? 'default' : 'pointer',
                    boxShadow: loading ? 'none' : '0 4px 16px rgba(11,54,154,0.35)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {loading ? <><Loader2 size={16} className="spin" /> Creating account…</> : <><span>Create Account</span><ArrowRight size={16} /></>}
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
                Already have an account?{' '}
                <button onClick={() => setView('login')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C34811', fontWeight: 700 }}>
                  Sign in
                </button>
              </p>
            </div>
          )}

          {/* ── FORGOT PASSWORD VIEW ── */}
          {view === 'forgot' && !success && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <form onSubmit={handleForgot} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InputField id="forgot-email" type="email" label="Email address" value={email}
                  onChange={setEmail} placeholder="you@company.com" icon={<Mail size={15} />}
                  error={emailErr} autoComplete="email" />

                <button
                  id="auth-forgot-submit"
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '13px', borderRadius: '10px', border: 'none',
                    background: loading ? '#E5E0D8' : 'linear-gradient(135deg, #C34811, #A83D0D)',
                    color: '#FFF', fontSize: '15px', fontWeight: 700, cursor: loading ? 'default' : 'pointer',
                    boxShadow: loading ? 'none' : '0 4px 16px rgba(195,72,17,0.35)',
                    transition: 'all 0.2s',
                  }}
                >
                  {loading ? <><Loader2 size={16} className="spin" /> Sending…</> : 'Send Reset Link'}
                </button>
              </form>

              <button onClick={() => setView('login')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                ← Back to Sign In
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes spin { to { transform: rotate(360deg) } }
        .spin { animation: spin 0.7s linear infinite; }
      `}</style>
    </div>
  );
}
