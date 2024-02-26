import React from 'react';

function FloatingButton() {
  const openNewWindow = () => {
    window.open('/chat', '_blank', 'width=600,height=600');
  };

  return (
    <div className='relative'>
      <div className='fixed bottom-10 right-10 w-16 h-16 '>
        <button
          className='bg-lightYellow rounded-full p-3 '
          onClick={openNewWindow}
        >
          <img
            className='hover:scale-150 duration-300 pb-2 w-full'
            src='images/dogsfab.png'
            alt='fab'
          />
        </button>
      </div>
    </div>
  );
}

export default FloatingButton;
