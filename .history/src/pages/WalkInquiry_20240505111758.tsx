import React from 'react';
import MapContainer from '../components/MapContainer';
import Button from 'components/ui/Button';

function App() {
  return (
    <div className='my-28'>
      <MapContainer />
      <Button text={'산책 종료하기'} />
    </div>
  );
}

export default App;
