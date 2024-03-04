useEffect() => {
  const sendCodeToBackend = async () => {
    if (code) {
      try {
        const response = await axios.post(
          // 서버 엔드포인트로 GET 요청 보내기
          `{서버주소}?code=${code}`,
        );

        if (response.status === 200) {
          console.log(response);
          console.log(response.headers);
          const accessToken = response.headers.authorization; // Axios가 헤더를 직접 반환
          const userId = jwt_decode(accessToken).userId;
          const email = jwt_decode(accessToken).sub;
          localStorage.setItem('Id', email);
          localStorage.setItem('userId', userId);
          localStorage.setItem('Token', accessToken);
          alert('로그인이 성공했습니다.');
        } else {
          console.error('API 호출 실패:', response.statusText);
          navigate('/login');
        }
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    }
  };