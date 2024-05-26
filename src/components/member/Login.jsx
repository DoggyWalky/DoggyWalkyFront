import React from 'react';
import Button from '../ui/Button';

export default function Login() {
  const NaverLogin = async () => {
    // http://localhost:8080/auth/naver/callback
    const NAVER_CLIENT_ID = 'YzcMnUhYjgc_1udqR96m';
    const callbackUrl = 'http://localhost:3000/NaverLogin'; // Callback URL
    const stateString = false;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${callbackUrl}&state=${stateString}`;
    // const NAVER_AUTH_URL = `/auth/NAVER`;

    window.location.href = NAVER_AUTH_URL;
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}
