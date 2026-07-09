import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, email: 'demo@example.com', password: 'demo123', name: 'Demo User' }
    ];
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const login = (email, password) => {
    const foundUser = users.find(u => 
      u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsLoginModalOpen(false);
      return { success: true, message: 'Login successful!' };
    }
    
    return { success: false, message: 'Invalid email or password' };
  };

  const signup = (name, email, password, confirmPassword) => {
    if (!name || !email || !password || !confirmPassword) {
      return { success: false, message: 'All fields are required' };
    }
    
    if (password !== confirmPassword) {
      return { success: false, message: 'Passwords do not match' };
    }
    
    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters' };
    }
    
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      joinedAt: new Date().toISOString()
    };
    
    setUsers(prev => [...prev, newUser]);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    setIsLoginModalOpen(false);
    
    return { success: true, message: 'Account created successfully!' };
  };

  const logout = () => {
    setUser(null);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupMode(false);
  };

  const openSignupModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupMode(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const toggleMode = () => {
    setIsSignupMode(!isSignupMode);
  };

  return (
    <AuthContext.Provider value={{
      user,
      users,
      isLoginModalOpen,
      isSignupMode,
      login,
      signup,
      logout,
      openLoginModal,
      openSignupModal,
      closeLoginModal,
      toggleMode
    }}>
      {children}
    </AuthContext.Provider>
  );
};