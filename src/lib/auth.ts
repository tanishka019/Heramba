/**
 * auth.ts — Heramba Auth Abstraction Layer
 *
 * PURPOSE:
 * This file provides a thin, typed wrapper over authentication logic.
 * Currently uses localStorage-based mock auth so the UI works without a backend.
 *
 * TO SWITCH TO SUPABASE:
 * 1. Run: npm install @supabase/supabase-js
 * 2. Create src/lib/supabaseClient.ts:
 *      import { createClient } from '@supabase/supabase-js'
 *      export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
 * 3. Replace each function body below with the corresponding Supabase call.
 *    The function signatures, return types, and error shapes stay the same.
 *
 * ADMIN PORTAL NOTES:
 * - User metadata (name, role, avatar_url) is stored in user.user_metadata in Supabase.
 * - You can add a `role` field to user_metadata to distinguish admin vs. customer.
 * - Use Supabase Row Level Security (RLS) policies to protect admin-only tables.
 * - Admin portal can query supabase.auth.admin.listUsers() via a server-side API route.
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface HUser {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  role: 'customer' | 'admin';
  provider: 'email' | 'google';
  createdAt: string;
}

export interface AuthResult {
  user: HUser | null;
  error: string | null;
}

// ─── Mock Storage Key ────────────────────────────────────────────────────────

const STORAGE_KEY = 'heramba_auth_user';
const USERS_KEY   = 'heramba_registered_users'; // simulates a users table

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getRegisteredUsers(): Record<string, { passwordHash: string; user: HUser }> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function saveRegisteredUsers(users: Record<string, { passwordHash: string; user: HUser }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/** Very naive "hash" — replace with bcrypt/Supabase when going live. */
function mockHash(password: string): string {
  return btoa(password + '_heramba_salt');
}

function generateId(): string {
  return `mock_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Auth Functions ───────────────────────────────────────────────────────────

/**
 * Sign up with email + password.
 *
 * SUPABASE EQUIVALENT:
 *   const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name, role: 'customer' } } })
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  name: string,
): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 800)); // simulate network

  const users = getRegisteredUsers();
  if (users[email]) {
    return { user: null, error: 'An account with this email already exists.' };
  }

  const user: HUser = {
    id: generateId(),
    email,
    name,
    avatarUrl: null,
    role: 'customer',
    provider: 'email',
    createdAt: new Date().toISOString(),
  };

  users[email] = { passwordHash: mockHash(password), user };
  saveRegisteredUsers(users);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

  return { user, error: null };
}

/**
 * Sign in with email + password.
 *
 * SUPABASE EQUIVALENT:
 *   const { data, error } = await supabase.auth.signInWithPassword({ email, password })
 */
export async function signInWithEmail(
  email: string,
  password: string,
): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 800));

  const users = getRegisteredUsers();
  const record = users[email];

  if (!record || record.passwordHash !== mockHash(password)) {
    return { user: null, error: 'Invalid email or password.' };
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(record.user));
  return { user: record.user, error: null };
}

/**
 * Sign in with Google OAuth.
 * Currently opens a simulated flow. Replace body with Supabase OAuth redirect.
 *
 * SUPABASE EQUIVALENT:
 *   const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google',
 *     options: { redirectTo: `${window.location.origin}/auth/callback` } })
 */
export async function signInWithGoogle(): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 1200));

  // MOCK: simulate a Google OAuth user
  const mockGoogleUser: HUser = {
    id: generateId(),
    email: 'demo.google@example.com',
    name: 'Google Demo User',
    avatarUrl: null,
    role: 'customer',
    provider: 'google',
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockGoogleUser));
  return { user: mockGoogleUser, error: null };
}

/**
 * Sign out the current user.
 *
 * SUPABASE EQUIVALENT:
 *   await supabase.auth.signOut()
 */
export async function signOut(): Promise<void> {
  await new Promise((r) => setTimeout(r, 300));
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get the currently signed-in user (from session/storage).
 *
 * SUPABASE EQUIVALENT:
 *   const { data: { session } } = await supabase.auth.getSession()
 *   const user = session?.user ?? null
 */
export function getCurrentUser(): HUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as HUser) : null;
  } catch {
    return null;
  }
}

/**
 * Send a password reset email.
 *
 * SUPABASE EQUIVALENT:
 *   const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: '...' })
 */
export async function resetPassword(email: string): Promise<{ error: string | null }> {
  await new Promise((r) => setTimeout(r, 800));
  const users = getRegisteredUsers();
  if (!users[email]) {
    // Don't reveal if account exists or not (security best practice)
    return { error: null };
  }
  // In Supabase this sends a real email; here we just simulate success
  return { error: null };
}
