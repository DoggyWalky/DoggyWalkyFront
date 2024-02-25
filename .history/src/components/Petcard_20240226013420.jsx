import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

function Petcard() {
  const [isPetCardOpen, setIsPetCardOpen] = useState(false);

  return (
    <div>
      <div className='flex items-center pb-5'>
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
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className=' bg-lightYellow rounded-2xl'>
            <PetcardDetail />
            <button
              className='mt-4  text-black font-bold py-2 px-4 rounded'
              onClick={() => setIsPetCardOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Petcard;
