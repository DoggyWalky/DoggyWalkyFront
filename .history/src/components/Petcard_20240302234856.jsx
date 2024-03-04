// /owners/{owner-id}/dogs 유저의 강아지 목록 가져오기

import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

function Petcard() {
  const [isPetCardOpen, setIsPetCardOpen] = useState(false);

  return (
    <div className='min-w-80'>
      <div className='flex items-center '>
        <button onClick={() => setIsPetCardOpen(!isPetCardOpen)}>
          <img
            className='rounded-md w-28 h-28 mr-4'
            src='images/pet.jpg'
            alt='Pet'
          />
        </button>
        <p>테리</p>
      </div>

      {isPetCardOpen && (
        <div className='fixed z-50 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
          <div className=' bg-lightYellow rounded-2xl'>
            <button
              className='flex mt-2  text-black font-bold px-4 rounded ml-auto mr-2'
              onClick={() => setIsPetCardOpen(false)}
            >
              X
            </button>
            <PetcardDetail />
          </div>
        </div>
      )}
    </div>
  );
}

export default Petcard;
