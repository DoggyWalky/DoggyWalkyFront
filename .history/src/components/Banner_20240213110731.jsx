import React from 'react';

export default function Banner() {
  return (
    <section className='fixed left-0  h-[800px] bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>Shop With US</h2>
        <p className='text-2xl'>Best Products, High Quality</p>
      </div>
    </section>
  );
}
