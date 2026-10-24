'use client';
/**
 * AuthContext.tsx — Global auth state for Heramba
 *
 * Wraps the app with a React Context so any component can read
 * the current user and call auth actions without prop-drilling.
 *
 * ADMIN PORTAL USAGE:
 * In any admin component:
 *   const { user } = useAuth();
 *   if (user?.role !== 'admin') redirect('/auth/login');
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  HUser,
  getCurrentUser,
  signOut as authSignOut,
} from '@/lib/auth';

interface AuthContextValue {
  user: HUser | null;
  isLoading: boolean;
  /** Call this after a successful sign-in/sign-up to refresh context */
  refreshUser: () => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading: true,
  refreshUser: () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<HUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(() => {
    setUser(getCurrentUser());
  }, []);

  useEffect(() => {
    refreshUser();
    setIsLoading(false);

    // Listen for storage changes (multi-tab support)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'heramba_auth_user') {
        refreshUser();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [refreshUser]);

  const handleSignOut = useCallback(async () => {
    await authSignOut();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, refreshUser, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
