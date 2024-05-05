import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';

function WalkInquiry() {
  const [btnText, setBtnText] = useState('산책 종료하기');

  const handleButtonClick = () => {
    if (btnText === '산책 종료하기') {
      setBtnText('리뷰 작성하기');
    } else {
      window.open('/Review', '_blank', 'width=400,height=600');
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
