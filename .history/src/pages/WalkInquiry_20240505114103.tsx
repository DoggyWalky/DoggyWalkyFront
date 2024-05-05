import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';

function WalkInquiry() {
  // 버튼의 텍스트를 상태로 관리합니다.
  const [btnText, setBtnText] = useState('산책 종료하기');

  // 리뷰 작성하기 버튼 클릭 이벤트 핸들러 함수
  const handleReviewClick = () => {
    // 버튼의 텍스트가 '리뷰 작성하기'이면 '산책 종료되었습니다'로 변경하고,
    // 버튼의 텍스트가 '산책 종료되었습니다'이면 새 창을 엽니다.
    if (btnText === '리뷰 작성하기') {
      setBtnText('산책 종료되었습니다');
    } else {
      // 새 창을 열고 ReviewInput 페이지를 로드합니다.
      window.open('/ReviewInput', '_blank', 'width=400,height=600');
    }
  };

  return (
    <div className='my-28'>
      <MapContainer />
      <button id='btn' onClick={handleReviewClick}>
        {btnText}
      </button>
    </div>
  );
}

export default WalkInquiry;
