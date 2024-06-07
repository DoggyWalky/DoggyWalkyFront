import React from 'react';
import MapContainer from '../components/MapContainer';

function WalkInquiry() {
  // WalkInquiry 컴포넌트 내부에서만 useState를 호출합니다.
  const [btnText, setBtnText] = React.useState('산책 종료하기');

  const changeBtnName = () => {
    setBtnText('산책 종료되었습니다');
  };

  return (
    <div className='my-28'>
      <MapContainer />
      <button id='btn' onClick={changeBtnName}>
        {btnText}
      </button>
    </div>
  );
}

export default WalkInquiry;
