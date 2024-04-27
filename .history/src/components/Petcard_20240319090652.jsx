import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

function Petcard() {
  const openNewWindow = () => {
    window.open('/PetcardDetail', '_blank', 'width=600,height=400'); // /PetcardDetail 경로로 가로600 세로400인 새윈도우창으로 띄움
  };

  return (
    <div className='min-w-80'>
      <div className='flex items-center '>
        <button onClick={openNewWindow} /*//이미지 클릭시 새 윈도우창 열림 */>
          <img
            className='rounded-md w-28 h-28 mr-4'
            src='images/pet.jpg'
            alt='Pet'
          />
        </button>
        <p>테리</p>
      </div>
    </div>
  );
}

export default Petcard;
