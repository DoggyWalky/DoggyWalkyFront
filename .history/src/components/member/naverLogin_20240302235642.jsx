import React from 'react';
import Button from '../ui/Button';

export default function NaverLogin() {
  const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const STATE = 'false';
    const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = NAVER_AUTH_URL;

    //        const code = new URL(window.location.href).searchParams.get('code');
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}
