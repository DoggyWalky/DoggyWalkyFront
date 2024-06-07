import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Login() {
  const [searchParams] = useSearchParams();

  const authCode = searchParams.get('code');
  const authState = searchParams.get('state');
  return (
    <>
      <p className=' my-28'>로그인 중...</p>
      <div>{authCode}</div>
      <div>{authState}</div>
    </>
  );
}
