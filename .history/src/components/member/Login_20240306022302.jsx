import React from 'react';
import Button from '../ui/Button';

export default function Login() {
  const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?scope=name,email,age,gender,birthday,birthyear,mobile&response_type=code&redirect_uri=http://localhost:8080/auth/naver/callback&client_id=YzcMnUhYjgc_1udqR96m`;

    window.location.href = NAVER_AUTH_URL;

    //        const code = new URL(window.location.href).searchParams.get('code');
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}
