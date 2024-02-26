import React from 'react';

export default function Review() {
  return (
    <div className='py-4  bg-gray-100 rounded-3xl mb-5 mr-8 min-w-96 p-5'>
      <div>
        <section className=''>
          <dev className='flex items-center mb-3 '>
            <img
              className='rounded-full w-14 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p className='font-bold '>doggywalky_123</p>
            <div className='rating flex ml-auto mr-9 '>
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
          </dev>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eius
            aut repudiandae asperiores ipsa impedit quae pariatur, veniam ex
            accusamus, nulla est repellat soluta assumenda error sequi quam, quo
            fugit.
          </p>
        </section>
      </div>
    </div>
  );
}
