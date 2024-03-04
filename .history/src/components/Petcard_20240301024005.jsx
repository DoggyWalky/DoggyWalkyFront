import React, { useState } from 'react';
import PetcardDetail from './PetcardDetail';

const openPetcardDetailWindow = () => {
  window.open('/PetcardDetail', '_blank', 'width=600,height=400');
  setIsPetCardOpen(true);
};

return (
  <div className='min-w-80'>
    <div className='flex items-center '>
      <button onClick={openPetcardDetailWindow}>
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

export default Petcard;
