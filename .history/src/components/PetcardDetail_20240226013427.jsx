import React from 'react';

export default function PetcardDetail() {
  return (
    <div className='p-4  '>
      <div className='align-center'>
        <section className=' text-lg  '>
          <img
            className='rounded-md w-64 h-64 mr-4 mx-auto'
            src='images/pet.jpg'
            alt='Pet'
          />
          <p>테리</p>
        </section>
      </div>
    </div>
  );
}
