import { useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // jwt-decode 모듈을 import합니다.

useEffect(() => {
  const sendCodeToBackend = async () => {
    if (code) {
      try {
        const response = await axios.post(
          // 서버 엔드포인트로 POST 요청을 보냅니다.
          `{http://lacal:3000/}?code=${code}` // 서버 엔드포인트를 적절히 변경해주세요.
          // 요청 바디에 code를 포함시킵니다.
        );

        if (response.status === 200) {
          console.log(response);
          console.log(response.headers);
          const accessToken = response.headers.authorization; // 헤더에서 authorization 정보를 가져옵니다.
          const userId = jwt_decode(accessToken).userId; // 토큰을 해석하여 userId를 가져옵니다.
          const email = jwt_decode(accessToken).sub; // 토큰을 해석하여 이메일을 가져옵니다.
          localStorage.setItem('Id', email);
          localStorage.setItem('userId', userId);
          localStorage.setItem('Token', accessToken);
          alert('로그인이 성공했습니다.');
        } else {
          console.error('API 호출 실패:', response.statusText);
          Navigate('/login'); // Navigate 함수를 사용하여 로그인 페이지로 이동합니다.
        }
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    }
  };

  sendCodeToBackend(); // 함수를 호출하여 코드를 백엔드로 전송합니다.
}); // 코드가 변경될 때마다 실행됩니다.
