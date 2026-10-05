import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

// Hardcoded user credentials
const VALID_USER = {
  email: 'gautam@gmail.com',
  password: 'gautam@1234',
  name: 'Gautam',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'login' | 'checkout' | 'order-success'
  const [authError, setAuthError] = useState('');
  const [redirectAfterLogin, setRedirectAfterLogin] = useState('home');

  const login = useCallback((email, password) => {
    setAuthError('');
    if (email === VALID_USER.email && password === VALID_USER.password) {
      setUser({ email: VALID_USER.email, name: VALID_USER.name });
      // Go to whatever page was intended after login
      setCurrentPage(redirectAfterLogin);
      return true;
    }
    setAuthError('Invalid email or password. Please try again.');
    return false;
  }, [redirectAfterLogin]);

  const logout = useCallback(() => {
    setUser(null);
    setCurrentPage('home');
  }, []);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    setAuthError('');
  }, []);

  // Require login before going to a page
  const requireAuth = useCallback((targetPage) => {
    if (user) {
      setCurrentPage(targetPage);
    } else {
      setRedirectAfterLogin(targetPage);
      setCurrentPage('login');
    }
  }, [user]);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{
      user, isLoggedIn, login, logout,
      currentPage, navigateTo, requireAuth,
      authError, setAuthError,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
