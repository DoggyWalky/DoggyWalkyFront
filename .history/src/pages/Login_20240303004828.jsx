import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useHistory } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  const history = useHistory();

  useEffect(() => {
    const authCode = searchParams.get('code');
    const authState = searchParams.get('state');

    if (authCode) {
      // 서버로 인가코드 전송
      axios
        .post('/auth/naver/token', { code: authCode })
        .then((response) => {
          // 서버에서 받은 토큰 등의 응답을 처리
          console.log('토큰 및 기타 정보:', response.data);

          // 토큰을 로컬 스토리지에 저장 등의 추가 작업 수행 가능

          // 로그인이 완료되면 홈페이지 등으로 리다이렉트
          history.push('/');
        })
        .catch((error) => {
          console.error('토큰 요청 오류:', error);
        });
    }
  }, [searchParams, history]);

  return (
    <>
      <p className='my-28'>로그인 중...</p>
      {/* 인가코드 및 상태 출력 */}
    </>
  );
};

export default Login;
