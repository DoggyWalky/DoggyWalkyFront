import React from 'react';

function FabButton() {
  const openNewWindow = () => {
    window.open('/chat', '_blank', 'width=600,height=600');
  };

  return (
    <div className='relative'>
      <div className='fixed bottom-4 right-4 w-28 '>
        <button
          className='bg-lightYellow rounded-full p-3 '
          onClick={openNewWindow}
        >
          <img
            className='hover:scale-150 duration-300 pb-2'
            src='images/dogsfab.png'
            alt='fab'
          />
        </button>
      </div>
    </div>
  );
}

export default FabButton;
