// Login.js
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LoginEffect from './LoginEffect';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const authCode = searchParams.get('code');

  return (
    <>
      <LoginEffect authCode={authCode} navigate={navigate} setLoading={setLoading} />
      {loading ? (
        <p className='my-28'>로그인 중...</p>
      ) : (
        <div>hi</div>
      )}
    </>
  );
};

export default Login;
