import React from 'react';
import MapContainer from '../components/MapContainer';
import { unstable_HistoryRouter } from 'react-router-dom';

function App() {
  const history = unstable_HistoryRouter();

  const handleClick = () => {
    // 이동할 페이지의 경로를 지정합니다.
    const nextPage = '/Review';

    // 다른 페이지로 이동합니다.
    history.push(nextPage);
  };

  return (
    <div className='my-28'>
      <MapContainer />
      <button onClick={handleClick}>산책 종료하기</button>
    </div>
  );
}

export default App;
