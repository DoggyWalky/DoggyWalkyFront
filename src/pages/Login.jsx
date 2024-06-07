// Login.js
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LoginEffect from '../api/userAPI';

const Login = () => {
  // URL 쿼리 파라미터를 가져오기 위해 useSearchParams 훅 사용
  const [searchParams] = useSearchParams();
  // 프로그래밍 방식으로 라우팅하기 위해 useNavigate 훅 사용
  const navigate = useNavigate();
  // 로딩 상태를 관리하는 상태 변수
  const [loading, setLoading] = useState(true);

  // URL에서 'code' 쿼리 파라미터 가져오기
  const authCode = searchParams.get('code');

  return (
    <>
      <LoginEffect
        authCode={authCode} // 로그인 코드 전달
        navigate={navigate} // 페이지 이동 함수 전달
        setLoading={setLoading} // 로딩 상태 변경 함수 전달
      />
      <p>{authCode}</p>
      {loading ? <p className='my-28'>로그인 중...</p> : <div>hi</div>}
    </>
  );
};

export default Login;
