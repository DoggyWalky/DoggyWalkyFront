import React from 'react';

function FloatingButton() {
  return (
    <div className='fixed bottom-4 right-4 w-1/12'>
      <button className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
        <img
          className='scale-150 transform-gpu'
          src=' images/fab.png'
          alt='fab'
        />
      </button>
    </div>
  );
}

export default FloatingButton;
