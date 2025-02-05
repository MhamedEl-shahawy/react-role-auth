export type Role = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  email: string;
  roles: Role[];
}

export interface AuthContextType {
  user: User | null;
  hasRole: (roles: Role | Role[]) => boolean;
}