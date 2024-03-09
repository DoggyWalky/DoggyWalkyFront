// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { naverLogin } from '../api/userAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  const useLoginEffect = (authCode, navigate, setLoading) => {
    useEffect(() => {
      const sendTokenRequest = async () => {
        try {
          if (authCode) {
            const response = await naverLogin(authCode);

            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            setUser(response.data);

            // Additional actions can be performed here

            login();
            navigate('/');
          }
        } catch (error) {
          console.error('Token request error:', error);

          if (error.response) {
            console.error(
              'Server response:',
              error.response.status,
              error.response.data
            );
          }
        } finally {
          setLoading(false);
        }
      };

      sendTokenRequest();
    }, [authCode, navigate, setLoading]); // Removed setUser from the dependency array
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, useLoginEffect }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
