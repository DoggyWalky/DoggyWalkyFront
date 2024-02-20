import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'NfuiqEV4HltgQ4mfdiO6',
      callbackUrl: 'http://127.0.0.1:5500',
      loginButton: { color: 'green', type: 2, height: 40 },
    });

    naverLogin.init();
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        const nickName = naverLogin.user.getNickName();
        const age = naverLogin.user.getAge();
        const birthday = naverLogin.user.getBirthday();

        if (nickName === null || nickName === undefined) {
          alert('별명이 필요합니다. 정보제공을 동의해주세요.');
          naverLogin.reprompt();
          return;
        } else {
          setLoginStatus();
        }
      }
    });
    console.log(naverLogin);
  }, []);

  function setLoginStatus() {
    const message_area = document.getElementById('message');
    message_area.innerHTML = (
      <div>
        <h3> Login 성공 </h3>
        <div>user Nickname : {naverLogin.user.nickname}</div>
        <div>user Age(범위) : {naverLogin.user.age}</div>
        <div>user Birthday : {naverLogin.user.birthday}</div>
      </div>
    );

    const button_area = document.getElementById('button_area');
    button_area.innerHTML = <button id='btn_logout'>로그아웃</button>;

    const logout = document.getElementById('btn_logout');
    logout.addEventListener('click', (e) => {
      naverLogin.logout();
      location.replace('http://127.0.0.1:5500');
    });
  }

  return (
    <div className='container'>
      <h1>Naver Login API 사용하기</h1>
      <div className='login-area'>
        <div id='message'>로그인 버튼을 눌러 로그인 해주세요.</div>
        <div id='button_area'>
          <div id='naverIdLogin'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
