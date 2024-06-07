import React from 'react';
import MapContainer from '../components/MapContainer';

const openNewWindow = () => {
  window.open('/ReviewInput', '_blank', 'width=400,height=600'); // /ReviewInput 경로로 가로400 세로600인 새윈도우창으로 띄움
};

function WalkInquiry() {
  return (
    <div className='my-28'>
      <MapContainer />
      <button onClick={openNewWindow}>산책 종료하기</button>
    </div>
  );
}

export default WalkInquiry;
