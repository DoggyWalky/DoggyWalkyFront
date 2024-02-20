import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
      callbackUrl: `http://localhost:3000/callback`,
      loginButton: { color: 'green', type: 3, height: '50' },
    });

    naverLogin.init();

    // 예시로 로그아웃을 실행하고, 로그인 상태를 확인하고 있습니다.
    // 원하는 기능에 따라 코드를 수정하셔야 합니다.
    naverLogin.logout();
    try {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log(naverLogin.user);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // useEffect에서 반환하는 것은 JSX가 아닙니다.
  // JSX는 함수 컴포넌트의 반환값으로 사용됩니다.
  // 따라서 반환값이 없거나, 부수 효과를 수행하는 코드만 포함해야 합니다.
  return null;
};

export default MyComponent;
