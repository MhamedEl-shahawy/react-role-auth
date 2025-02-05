# React Role Auth

A lightweight, type-safe role-based access control provider for React applications.

## Features

- 👥 Role-based access control
- 🛡️ Protected route/component wrapper
- ⚛️ Modern React hooks API
- 📦 Zero dependencies (except React)

## Installation

```bash
npm i react-role-auth-msh
```

## Usage

1. Wrap your app with AuthProvider:

```tsx
import { AuthProvider } from "react-role-auth-msh";

const user = {
  id: "1",
  email: "user@example.com",
  roles: ["admin", "user"],
};

function App() {
  return (
    <AuthProvider user={user}>
      <YourApp />
    </AuthProvider>
  );
}
```

2. Protect content with RequireAuth:

```tsx
import { RequireAuth } from "react-role-auth-msh";

function AdminPanel() {
  return (
    <RequireAuth roles="admin" fallback={<p>Access denied</p>}>
      <h1>Admin Panel</h1>
    </RequireAuth>
  );
}
```

## API Reference

### AuthProvider

The main provider component that manages role-based access control.

```tsx
<AuthProvider user={userObject}>
  <App />
</AuthProvider>
```

### useAuth Hook

```tsx
const {
  user, // Current user object or null
  hasRole, // Function to check user roles
} = useAuth();
```

### RequireAuth Component

```tsx
<RequireAuth
  roles: Role | Role[]     // Required roles
  fallback?: ReactNode     // Content to show if unauthorized
>
  {children}
</RequireAuth>
```

### Types

```tsx
type Role = "admin" | "user" | "guest";

interface User {
  id: string;
  email: string;
  roles: Role[];
}
```

## License

MIT
