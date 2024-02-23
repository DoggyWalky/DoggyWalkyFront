import React from 'react';

function FloatingButton() {
  return (
    <div className='fixed bottom-4 right-4'>
      <button className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
        <img className='hover:opacity-90' src=' images/fab.png' alt='fab' />
      </button>
    </div>
  );
}

export default FloatingButton;
