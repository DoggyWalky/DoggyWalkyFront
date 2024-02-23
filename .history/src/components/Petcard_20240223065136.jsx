import React from 'react';

export default function Petcard() {
  return (
    <dev className='flex items-center pb-5'>
      <button>
        <img
          className='rounded-md w-28 h-28 mr-4'
          src='images/pet.jpg'
          alt='Pet'
        />
      </button>
      <p>테리</p>
    </dev>
  );
}
