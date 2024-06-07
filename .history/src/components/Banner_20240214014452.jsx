import React from 'react';
import { ReactTyped } from 'react-typed';

export default function Banner() {
  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen  h-[800px] bg-yellow-900 '>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute grid w-full bottom-32 text-center text-gray-50 drop-shadow-2xl justify-center'>
        <ReactTyped
          strings={['DoggyWalky']}
          typeSpeed={80}
          loop={false}
          showCursor={false}
          className='text-7xl font-bold'
        />
        <div className='w-3/5 mx-auto'>
          <p className='text-2xl'>
            <br />
            DoggyWalky is a revolutionary platform designed to bring together
            passionate dog owners and enthusiastic dog walkers, creating a
            seamless and enjoyable experience for both parties.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
