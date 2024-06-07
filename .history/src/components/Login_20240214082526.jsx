import React from 'react';

export default function Login() {
  const NAVER_CLIENT_ID = env.local.REACT_APP_CLIENT_ID; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = 'http://Localhost:3000/callback'; // Callback URL
  const STATE = 'flase';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return <Button onClick={NaverLogin}>네이버 로그인</Button>;
}
