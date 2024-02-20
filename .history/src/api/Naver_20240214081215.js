import { useEffect } from 'react';

const { naver } = window;

const naverLogin = new naver.LoginWithNaverId({
  clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
  callbackUrl: 'http://localhost:3000/callback',
  isPopup: true,
  loginButton: {
    color: 'green',
    type: 3,
    height: 50,
  },
});

useEffect(() => {
  naverLogin.init();
  console.log('init!');
}, []);
