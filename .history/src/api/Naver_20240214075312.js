useEffect(() => {
  let naverLogin = new window.naver.LoginWithNaverId({
    clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
    callbackUrl: `http://localhost:3000/callback`,
    loginButton: { color: 'green', type: 3, height: '50' },
  });
  naverLogin.init();
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
  return (
    <div className='connect'>
      <div id='naverIdLogin' />
    </div>
  );
}, []);
