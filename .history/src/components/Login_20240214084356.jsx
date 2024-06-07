// Login.js
import React from 'react';

const Login = () => {
  const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
  const STATE = 'false';
  const NAVER_AUTH_URL = `http://localhost:5000/naver-token`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return <button onClick={NaverLogin}>네이버 로그인</button>;
};

export default Login;
