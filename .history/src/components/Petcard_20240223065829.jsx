import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

export default function Petcard() {
  const [isPetCardOpen, setIsPopupOpen] = useState(false);

  return (
    <dev className='flex items-center pb-5'>
      <button  onClick={() => setIsPopupOpen(!isPopupOpen)}>
        <img
          className='rounded-md w-28 h-28 mr-4'
          src='images/pet.jpg'
          alt='Pet'
        />
      </button>
      <p>테리</p>
    </dev>

    {isPetCardOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
       
            <PetcardDetail />
            <button
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setIsPopupOpen(false)}
            >
              닫기
            </button>
          </div>
       
      )}
    </div>
  );
}
