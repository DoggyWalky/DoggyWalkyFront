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
          className='text-7xl font-bold'
        />
        <p className='text-2xl'>
          <br />
          PawsWalk is a revolutionary platform designed to bring together
          passionate dog owners and enthusiastic dog walkers, creating a
          seamless and enjoyable experience for both parties.
          <br />
          Our platform aims to address the needs of busy pet owners who may not
          always have the time to take their furry friends for a stroll, and the
          dog lovers who are eager to spend quality time with adorable
          companions.
        </p>
      </div>
    </section>
  );
}
