// Login.js
import React from 'react';

const Login = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
  const STATE = 'false';
  const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&&state=${STATE}&redirect_uri=${REDIRECT_URI}'`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <div className='flex h-96 justify-center items-center'>
        <button onClick={NaverLogin}>네이버 로그인</button>
      </div>
    </>
  );
};

export default Login;
