function SideNav() {
  const { naver } = window;

  const Login = () => {
    Naver();
    UserProfile();
  };

  useEffect(Login, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: '4MhQd67NJONrPkqRDQd1',
      callbackUrl: 'http://localhost:3000/',
      isPopup: false,
      loginButton: { color: 'green', type: 1, height: 30 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const UserProfile = () => {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const token = location.split('&')[0];
      console.log('token: ', token);
      fetch(`${API}/account/sign-in`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('access_token', res.token);
          setUserData({
            nickname: res.nickname,
            image: res.image,
          });
        })
        .catch((err) => console.log('err : ', err));
    }
  };

  return (
    <SideLogin className='login'>
      <UserInfo>
        <SideText>로그인</SideText>
      </UserInfo>
      <LoginLink onClick={Login} id='naverIdLogin' />
    </SideLogin>
  );
}
