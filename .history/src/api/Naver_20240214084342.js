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

return (
  <div>
    {user ? (
      <div>
        <h2>네이버 로그인 성공!</h2>
        <h3>사용자 이름</h3>
        <div>{user.name}</div>
        <h3>사용자 이메일</h3>
        <div>{user.email}</div>
        <h3>사용자 프로필사진</h3>
        <img src={user.profile_image} alt="프로필 사진" />
        <button onClick={naverLogout}>로그아웃</button>
      </div>
    ) : (
      // 네이버 로그인 버튼
      <div>
        <div id="naverIdLogin"></div>
      </div>  </div>
    )}

