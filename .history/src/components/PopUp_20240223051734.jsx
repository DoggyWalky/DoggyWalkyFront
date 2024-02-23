import React from 'react';

export default function PopUp() {
  return (
    <div className='p-4  bg-lightYellow rounded-2xl mb-40 w-2/4'>
      <div className='ml-7'>
        <section className=' text-lg  '>
          <img
            className='rounded-md w-52 h-28 mr-4'
            src='images/pet.jpg'
            alt='Pet'
          />
          <p>테리</p>
        </section>
      </div>
    </div>
  );
}
