import React from 'react';

export default function Introduce() {
  return (
    <section>
      <div>
        <div>
          <h1 className='text-5xl font-bold'>DoggyWalky</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
        <div className='w-introduceImg'>
          <img
            className='w-full'
            src='images/introduceImg1.jpg'
            alt='introduceImg1'
          />
        </div>
      </div>
    </section>
  );
}
