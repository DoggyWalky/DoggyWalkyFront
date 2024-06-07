import React from 'react';
import MapContainer from '../components/MapContainer';

const handleClick = () => {
  // 이동할 페이지의 경로를 지정합니다.
  const nextPage = '/Review';
};

function App() {
  return (
    <div className='my-28'>
      <MapContainer />
      <button onClick={handleClick}>산책 종료하기</button>
    </div>
  );
}

export default App;
