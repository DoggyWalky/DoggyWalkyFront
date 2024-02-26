import React from 'react';

export default function Review() {
  return (
    <div className='py-4  bg-gray-100 rounded-3xl mb-5 mr-8 w-1/2 p-5'>
      <div>
        <section className=''>
          <dev className='flex items-center  mb-3 '>
            <img
              className='rounded-full w-14 mr-4'
              src='images/pet.jpg'
              alt='Pet'
            />
            <p className='font-bold '>doggywalky_123</p>
            <div className='rating flex ml-auto mr- '>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dignissimos, commodi maiores molestias nisi id rem eum mollitia
            eius, at magni natus tempora esse officia magnam numquam.
            Architecto, ratione tempora.
          </p>
        </section>
      </div>
    </div>
  );
}
