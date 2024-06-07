import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const clientID = 'naver-developers-tj1992'; // 네아로 클라이언트 아이디
    const callbackURL = 'http://localhost:3000/callback'; // 네아로에서 설정한 CallBack URL
    const resKey = {
      id: '동일인 식별 정보',
      nickname: '사용자 별명',
      name: '사용자 이름',
      email: '사용자 메일 주소',
      gender: '성별(F: 여성,M: 남성, U: 확인불가 )',
      age: '사용자 연령대',
      birthday: '사용자 생일(MM-DD 형식)',
      profile_image: '사용자 프로필 사진 URL',
      birthyear: '출생연도',
      mobile: '휴대전화번호',
    };

    const naverSignInCallback = () => {
      Object.entries(resKey).forEach(([key, des]) => {
        let value = naver_id_login.getProfileData(key);
        if (typeof value === 'undefined') {
          value = '알수없음';
        }
        // 결과를 처리하는 로직
      });

      window.self.close();
    };

    try {
      // 네이버 사용자 프로필 조회
      const naver_id_login = new naver_id_login(clientID, callbackURL);
      naver_id_login.get_naver_userprofile(naverSignInCallback);
    } catch (e) {
      alert('네이버 로그인 인증에 실패하였습니다.');
      window.self.close();
    }
  }, []);

  return null; // 이 컴포넌트는 화면에 보여지지 않으므로 null을 반환합니다.
};

export default Callback;
