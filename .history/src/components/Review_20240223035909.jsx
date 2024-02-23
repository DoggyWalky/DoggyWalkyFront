import React from 'react';

export default function Review() {
  return (
    <div className='py-4  bg-gray-100 rounded-3xl '>
      <div className='ml-7'>
        <section>
          <dev className='flex '>
            <img
              className='rounded-full w-10 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p>테리</p>
          </dev>
        </section>
      </div>
    </div>
  );
}
