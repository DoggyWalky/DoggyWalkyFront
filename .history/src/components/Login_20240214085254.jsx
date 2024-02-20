// Login.js
import React from 'react';

const Login = () => {
  const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
  const STATE = 'false';
  const NAVER_AUTH_URL = `http://localhost:5000/naver-token`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <div className='h-96 justify-center items-center'>
        <button onClick={NaverLogin}>네이버 로그인</button>
      </div>
    </>
  );
};

export default Login;
