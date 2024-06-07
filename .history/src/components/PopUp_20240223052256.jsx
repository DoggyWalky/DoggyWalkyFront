import React from 'react';

export default function PopUp() {
  return (
    <div className='p-4  bg-lightYellow rounded-2xl  mb-40 max-w-lg mx-auto'>
      <div className='align-center mx-auto'>
        <section className=' text-lg  '>
          <img
            className='rounded-md w-64 h-64 mr-4'
            src='images/pet.jpg'
            alt='Pet'
          />
          <p>테리</p>
        </section>
      </div>
    </div>
  );
}
