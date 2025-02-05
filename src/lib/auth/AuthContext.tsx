import React, { createContext, useContext } from 'react';
import { AuthContextType, Role, User } from './types';

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  user: User | null;
  children: React.ReactNode;
}

export function AuthProvider({ user, children }: AuthProviderProps) {
  const hasRole = (roles: Role | Role[]) => {
    if (!user) return false;
    const requiredRoles = Array.isArray(roles) ? roles : [roles];
    return requiredRoles.some(role => user.roles.includes(role));
  };

  const value = {
    user,
    hasRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}