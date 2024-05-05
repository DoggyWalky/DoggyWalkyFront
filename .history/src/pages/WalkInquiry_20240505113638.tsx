import React from 'react';
import MapContainer from '../components/MapContainer';

// const openNewWindow = () => {
//   window.open('/ReviewInput', '_blank', 'width=400,height=600'); // /ReviewInput 경로로 가로400 세로600인 새윈도우창으로 띄움
// };

// 버튼의 텍스트를 상태로 관리합니다.
const [btnText, setBtnText] = useState('산책 종료하기');

// 버튼 클릭 이벤트 핸들러 함수
const changeBtnName = () => {
  // 버튼의 텍스트를 변경합니다.
  setBtnText('산책 종료되었습니다');
};

function WalkInquiry() {
  return (
    <div className='my-28'>
      <MapContainer />
      <button id='btn' onClick={changeBtnName}></button>
    </div>
  );
}

export default WalkInquiry;
