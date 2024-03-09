import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // import useAuth from AuthContext.js

const Login = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const authCode = searchParams.get('code');
  const { useLoginEffect } = useAuth(); // destructure useLoginEffect from useAuth

  useLoginEffect(authCode, setLoading); // use useLoginEffect from AuthContext

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
