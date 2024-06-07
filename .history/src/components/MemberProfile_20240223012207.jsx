import React from 'react';

export default function MemberProfile() {
  return (
    <div>
      <div className='relative mt-28 z-20 '>
        <img
          className='max-w-xs mx-auto rounded-md '
          src='images/pet.jpg'
          alt='Pet'
        />
      </div>
      <div className='relative h-96  z-10 bg-gray-100 rounded-3xl'></div>
    </div>
  );
}
