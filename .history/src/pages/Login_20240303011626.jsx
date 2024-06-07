import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const authCode = searchParams.get('code');
    const authState = searchParams.get('state');

    const sendTokenRequest = async () => {
      try {
        if (authCode) {
          // 서버로 인가코드 전송
          const response = await axios.post(
            'http://localhost:8080/auth/naver/callback',
            {
              code: authCode,
            }
          );

          // 받은 토큰들
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;

          // 토큰들을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          // axios에서 토큰을 자동으로 사용할 수 있도록 설정
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${accessToken}`;

          // 토큰을 로컬 스토리지에 저장 등의 추가 작업 수행 가능

          // 로그인이 완료되면 홈페이지 등으로 이동
          navigate('/');
        }
      } catch (error) {
        console.error('토큰 요청 오류:', error);

        // 추가 디버깅 정보 출력
        if (error.response) {
          console.error(
            '서버 응답:',
            error.response.status,
            error.response.data
          );
        }

        // 오류를 더 자세히 확인하기 위해 네트워크 탭에서 요청 및 응답 확인
      }
    };

    sendTokenRequest();
  }, [searchParams, navigate]);

  return (
    <>
      <p className='my-28'>로그인 중...</p>
      {/* 인가코드 및 상태 출력 */}
    </>
  );
};

export default Login;
