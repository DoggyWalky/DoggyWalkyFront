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
          onClick={() => setIsNewWindowOpen(!isNewWindowOpen)}
        >
          <img className='hover:scale-110' src=' images/fab.png' alt='fab' />
        </button>
      </div>

      {isNewWindowOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='bg-white p-8'>
            <Chat />
            <button
              className='mt-4  text-black font-bold py-2 px-4 rounded'
              onClick={() => setIsNewWindowOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
