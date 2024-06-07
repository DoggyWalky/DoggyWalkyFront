import React, { useState } from 'react';

function FloatingButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='fixed bottom-4 right-4 w-1/12'>
      <button
        className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        <img className='hover:scale-110' src=' images/fab.png' alt='fab' />
      </button>
    </div>
  );
}

export default FloatingButton;
