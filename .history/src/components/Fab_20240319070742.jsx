import React from 'react';

function FabButton() {
  const openNewWindow = () => {
    window.open('/chat', '_blank', 'width=600,height=600'); // /chat 경로로 가로600 세로600인 새윈도우창으로 띄움
  };

  return (
    <div className='relative'>
      <div className='fixed bottom-10 right-10 w-24 '>
        <button
          className='bg-lightYellow rounded-full p-3 '
          onClick={openNewWindow} //버튼 클릭시 새 윈도우창 열림
        >
          <img
            className='hover:scale-150 duration-300 w-full'
            src='images/dogsfab.png'
            alt='fab'
          />
        </button>
      </div>
    </div>
  );
}

export default FabButton;
