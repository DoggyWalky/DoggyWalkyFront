import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';

function WalkInquiry() {
  // 버튼의 텍스트를 상태로 관리합니다.
  const [btnText, setBtnText] = useState('산책 종료하기');

  // 버튼 클릭 이벤트 핸들러 함수
  const handleButtonClick = () => {
    if (btnText === '산책 종료하기') {
      // 산책 종료하기 버튼을 클릭하면 텍스트를 리뷰 작성하기로 변경합니다.
      setBtnText('리뷰 작성하기');
    } else {
      // 리뷰 작성하기 버튼을 클릭하면 새 창을 엽니다.
      window.open('/ReviewInput', '_blank', 'width=400,height=600');
    }
  };

  return (
    <div className='my-28'>
      <MapContainer />
      <button id='btn' onClick={handleButtonClick}>
        {btnText}
      </button>
    </div>
  );
}

export default WalkInquiry;
