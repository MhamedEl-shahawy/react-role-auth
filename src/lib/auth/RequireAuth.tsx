import React from 'react';
import { useAuth } from './AuthContext';
import { Role } from './types';

interface RequireAuthProps {
  children: React.ReactNode;
  roles: Role | Role[];
  fallback?: React.ReactNode;
}

export function RequireAuth({ children, roles, fallback = null }: RequireAuthProps) {
  const { hasRole } = useAuth();

  if (!hasRole(roles)) {
    return fallback;
  }

  return <>{children}</>;
}