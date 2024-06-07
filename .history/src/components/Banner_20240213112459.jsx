import React from 'react';
import { ReactTyped } from 'react-typed';

export default function Banner() {
  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen  h-[800px] bg-yellow-900 '>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute w-full bottom-32 text-center text-gray-50 drop-shadow-2xl'>
        <ReactTyped
          strings={['DoggyWalky']}
          typeSpeed={80}
          loop={false}
          showCursor={false}
          className='text-6xl font-bold'
        />
        <p className='text-2xl'>Best Products, High Quality</p>
      </div>
    </section>
  );
}
