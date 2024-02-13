import React from 'react';
import { ReactTyped } from 'react-typed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { IoIosArrowDown } from 'react-icons/io';

export default function Banner() {
  const animatedItem = useScrollFadeIn('up', 1, 1);

  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen  h-[800px] bg-yellow-900 '>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute grid w-full bottom-4 text-center text-gray-50 drop-shadow-2xl justify-center'>
        <ReactTyped
          strings={['DoggyWalky']}
          typeSpeed={100}
          loop={false}
          showCursor={false}
          className='text-7xl font-bold'
        />
        <div className=' mx-auto' {...animatedItem}>
          <p className='text-2xl font-bold'>
            <br />
            is a revolutionary platform designed to bring together passionate
            dog owners
            <br /> and enthusiastic dog walkers, creating a seamless and
            enjoyable experience for both parties.
            <br />
          </p>
        </div>
        <IoIosArrowDown className=' mx-auto my-10' />
      </div>
    </section>
  );
}
