import React, { useState } from 'react';
import Chat from '../pages/Chat';

function FloatingButton() {
  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false);

  const openNewWindow = () => {
    setIsNewWindowOpen(true);
  };

  return (
    <div className='relative'>
      <div className='fixed bottom-4 right-4 w-1/12'>
        <button
          className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={openNewWindow}
        >
          <img className='hover:scale-110' src='images/fab.png' alt='fab' />
        </button>
      </div>

      {isNewWindowOpen && <Chat />}
    </div>
  );
}

export default FloatingButton;
