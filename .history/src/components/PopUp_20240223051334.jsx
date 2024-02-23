import React from 'react';

export default function PopUp() {
  return (
    <div className='py-4  bg-lightYellow rounded-lg'>
      <div className='ml-7'>
        <p className='font-semibold text-xl text-left mb-3 '>등록된 강아지</p>
        <section className='grid grid-cols-2 text-lg font-semibold  '>
          <dev className='flex items-center'>
            <img
              className='rounded-md w-28 h-28 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p>테리</p>
          </dev>
          <dev className='flex items-center'>
            <img
              className='rounded-md w-28 h-28 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p>라이언</p>
          </dev>
        </section>
      </div>
    </div>
  );
}
