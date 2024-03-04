// /owners/{owner-id}/dogs 유저의 강아지 목록 가져오기

import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

function Petcard() {
  const openNewWindow = () => {
    window.open('/PetcardDetail', '_blank', 'width=600,height=400');
  };

  return (
    <div className='min-w-80'>
      <div className='flex items-center '>
        <button onClick={openNewWindow}>
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
