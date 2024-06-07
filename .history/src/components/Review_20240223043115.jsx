import React from 'react';

export default function Review() {
  return (
    <div className='py-4  bg-gray-100 rounded-3xl '>
      <div className='ml-7'>
        <section>
          <dev className='flex items-center justify-stretch'>
            <img
              className='rounded-full w-14 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p className='font-bold '>doggywalky_123</p>
            <div className='rating  '>
              <input
                type='radio'
                name='rating-4'
                className='mask mask-star-2 bg-brand'
              />
              <input
                type='radio'
                name='rating-4'
                className='mask mask-star-2 bg-brand'
                checked
              />
              <input
                type='radio'
                name='rating-4'
                className='mask mask-star-2 bg-brand'
              />
              <input
                type='radio'
                name='rating-4'
                className='mask mask-star-2 bg-brand'
              />
              <input
                type='radio'
                name='rating-4'
                className='mask mask-star-2 bg-brand'
              />
            </div>
            <p></p>
          </dev>
        </section>
      </div>
    </div>
  );
}
