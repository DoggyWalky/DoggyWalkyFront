import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

function Petcard() {
  const [isPetCardOpen, setIsPetCardOpen] = useState(false);

  const openNewWindow = () => {
    window.open('', 'PetcardDetailWindow', 'width=600,height=400');
    setIsPetCardOpen(true);
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

      {isPetCardOpen && (
        <div className='fixed z-50 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
          <div className=' bg-lightYellow rounded-2xl'>
            <PetcardDetail />
          </div>
        </div>
      )}
    </div>
  );
}

export default Petcard;
