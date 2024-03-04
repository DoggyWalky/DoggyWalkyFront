import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const sendTokenRequest = async () => {
      try {
        const authCode = searchParams.get('code');

        if (authCode) {
          // 서버로 인가코드 전송
          const response = await axios.post('http://localhost:8080/Login', {
            code: authCode,
          });

          // 토큰을 받아온 후에
          const accessToken = response.data.accessToken;

          // 받은 토큰을 헤더에 추가
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

    // 토큰 요청 함수 호출
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
