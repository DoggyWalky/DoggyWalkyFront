import React from 'react';
import Button from '../ui/Button';

export default function Login() {
  const NaverLogin = async () => {
    const NAVER_CLIENT_ID = 'YzcMnUhYjgc_1udqR96m';
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?scope=name,email,age,gender,birthday,birthyear,mobile&response_type=code&redirect_uri=http://localhost:8080/auth/naver/callback&client_id=${NAVER_CLIENT_ID}`;
    // const NAVER_AUTH_URL = `/auth/NAVER`;

    window.location.href = NAVER_AUTH_URL;
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}
