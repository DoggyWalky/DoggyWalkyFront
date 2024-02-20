import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const LoginScroll = () => {
  const animatedLogin = useScrollFadeIn('up', 1, 0);

  const SocialLogin = () => {
    const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&state=cosegu`;

    const loginHandler = () => {
      window.location.href = NAVER_AUTH_URI;
    };

 

  return (
    
    <div className='flex relative justify-center items-center rounded-xl mt-32  py-20 bg-gradient-to-tl from-yellow-200 via-white to-cyan-200'>
      <content className='ml-36 '>
        <p className='font-bold text-7xl'> DoggyWalky</p>
        <p className=' text-2xl mt-7 mr-20  '>
          Loremvelit nobis possimus beatae corporis vel ad fuga sit quibusdam
          voluptate eligendi optio inventore libero, ea esse, quae ducimus?
        </p>
      </content>
      <div
        className='mr-64 p-4 border shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white rounded-xl '
        {...animatedLogin}
      >
         <S.BtnWrap>
        <S.Button onclick={loginHandler}>
          <SiNaver size='18px' className='icon' />
        </S.Button>
      </S.BtnWrap>
        <p className='font-bold text-5xl'>Login</p>
        <div className=' text-2xl mt-10 '>
          <div>
            <h3>E-mail</h3>
            <input
              className='mt-3 border-2 border-gray-400 rounded-xl '
              type='text'
            />
          </div>
          <div className='mt-5'>
            <h3>Password</h3>
            <input
              className='mt-3 border-2 border-gray-400 rounded-xl '
              type='password'
            />
          </div>
        </div>
        <div className='text-2xl mt-10 '>
          <button className=' py-1 px-5 ml-2 mr-2  border-2 border-black rounded-xl '>
            Register
          </button>
          <button className='py-1 px-8   border-2 border-black rounded-xl '>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;