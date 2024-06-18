import { useEffect } from 'react';
import axiosInstance from './api';

const LoginEffect = ({ authCode, navigate, setLoading }) => {
  useEffect(() => {
    const sendTokenRequest = async () => {
      try {
        if (authCode) {
          const response = await axiosInstance.get(
            `/auth/naver/callback?code=${authCode}`
          );

          const { accessToken, refreshToken } = response.data;

          // 토큰을 안전하게 저장합니다 (HttpOnly 쿠키 사용을 고려해보세요)
          localStorage.setItem('Authorization', accessToken);
          localStorage.setItem('Refresh', refreshToken);

          // 추가 작업 수행 가능

          // 로그인이 완료되면 홈페이지로 이동
          navigate('/');
        }
      } catch (error) {
        console.error('토큰 요청 오류:', error);

        // 디버깅 정보 출력
        if (error.response) {
          console.error(
            '서버 응답:',
            error.response.status,
            error.response.data
          );
        }
      } finally {
        setLoading(false);
      }
    };

    sendTokenRequest();
  }, [authCode, navigate, setLoading]);

  return null;
};

export default LoginEffect;
//useState로 상태를 가지고있어야하는데  못함
//로컬스토리지엔있겠지만
//프로바이더로 하위컨포넌트에게 전달해야하는데 콘덱스트를 사용한 프로바이더도 필요
