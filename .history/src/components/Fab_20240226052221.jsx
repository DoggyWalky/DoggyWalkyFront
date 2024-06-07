import React from 'react';
import Chat from '../pages/Chat';

function FloatingButton() {
  const openNewWindow = () => {
    window.open('/chat', '_blank', 'width=600,height=600');
  };

  return (
    <div className='relative'>
      <div className='fixed bottom-4 right-4 w-1/12'>
        <button
          className='bg-lightYellow p-10 rounded-full'
          onClick={openNewWindow}
        >
          <img className='hover:scale-110' src='images/dogsfab.png' alt='fab' />
        </button>
      </div>
    </div>
  );
}

export default FloatingButton;
