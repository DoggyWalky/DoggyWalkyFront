import React from 'react';
import Button from '../ui/Button';

export default function Login() {
  const NaverLogin = () => {
    const { isLoggedIn } = useAuth();
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?scope=name,email,age,gender,birthday,birthyear,mobile&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${NAVER_CLIENT_ID}`;

    if (!isLoggedIn) {
      window.location.href = NAVER_AUTH_URL;
    }

    //        const code = new URL(window.location.href).searchParams.get('code');
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}

// Login.js
import React from 'react';
import Button from '../ui/Button';
import { useAuth } from './AuthContext';

const Login = () => {
  const { isLoggedIn } = useAuth();

  const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const NAVER_AUTH_URL = https://nid.naver.com/oauth2.0/authorize?scope=name,email,age,gender,birthday,birthyear,mobile&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${NAVER_CLIENT_ID}ㅇ;

    if (!isLoggedIn) {
      window.location.href = NAVER_AUTH_URL;
    }
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
};

export default Login;