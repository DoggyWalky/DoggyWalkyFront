import React, { createContext, useContext, useState, useEffect } from 'react';
import { naverLogin } from '../api/userAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

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

            // 추가 작업 수행 가능

            // 로그인이 완료되면 Context를 통해 로그인 상태 업데이트
            login();
            navigate('/');
          }
        } catch (error) {
          console.error('토큰 요청 오류:', error);

          // 디버깅 정보 출력
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
    }, [authCode, navigate, setLoading]); // login 제거
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
