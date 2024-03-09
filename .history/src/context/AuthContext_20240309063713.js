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

            // 추가 작업 수행 가능

            login();
            navigate('/');
          }
        } catch (error) {
          console.error('토큰 요청 오류:', error);

          if (error.response) {
            console.error(
              '서버 응답:',
              error.response.status,
              error.response.data
            );
          }
        } finally {
          setLoading(false);
        }
      };

      sendTokenRequest();
    }, [authCode, navigate, setLoading]); // setUser를 의존성 배열에서 제외
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
