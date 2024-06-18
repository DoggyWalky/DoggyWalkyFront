import React from 'react';
import Button from '../ui/Button';
import axiosInstance from '../../api/api';
import axios from 'axios';

export default function Login() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const callbackUrl = process.env.REACT_APP_CALLBACK_URL; // Callback URL
  const scope = process.env.REACT_APP_SCOPE

  const NaverLogin = async () => {
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?scope=${scope}&response_type=code&redirect_uri=${callbackUrl}&client_id=${clientId}`
    window.location.href=naverAuthUrl;
    
  };

  return <Button onClick={NaverLogin} text={'Login'} />;
}
