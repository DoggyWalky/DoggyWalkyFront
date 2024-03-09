// Login.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { useLoginEffect } = useAuth();

  const authCode = searchParams.get('code');

  useEffect(() => {
    useLoginEffect(authCode, setLoading);
  }, [authCode, useLoginEffect, setLoading]);

  return (
    <>
      {loading ? (
        <p className='my-28'>로그인 중...</p>
      ) : (
        <div>hi {authCode}</div>
      )}
    </>
  );
};

export default Login;
