const { naver } = window;

const naverLogin = new naver.LoginWithNaverId({
  clientId: 'rJOz4VuQkXYfVh49P3aO',
  callbackUrl: 'http://localhost:3000',
  isPopup: true,
  loginButton: {
    color: 'green',
    type: 3,
    height: 50,
  },
});
