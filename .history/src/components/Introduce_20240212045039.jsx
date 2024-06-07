import React from 'react';

export default function Introduce() {
  return (
    <section>
      <div className='flex pt-20 justify-between'>
        <div className='relative text-center top-32 ml-16'>
          <h1 className='text-5xl font-bold'>DoggyWalky</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
        <div className='w-introduceImg rounded-full overflow-hidden mr-10'>
          <img
            className='w-full '
            src='images/introduceImg1.jpg'
            alt='introduceImg1'
          />
        </div>
      </div>

      <div className='relative flex pt-20 justify-between top-15'>
        <div className='w-introduceImg ml-10'>
          <img
            className='w-full '
            src='images/introduceImg2.png'
            alt='introduceImg2'
          />
        </div>
        <div className='relative text-center top-32 mr-16'>
          <h1 className='text-5xl font-bold'>간편하게</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
      </div>

      <div className='relative flex pt-20 justify-between top-20'>
        <div className='relative text-center top-32 ml-16'>
          <h1 className='text-5xl font-bold'>DoggyWalky</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
        <div className='w-introduceImg rounded-full overflow-hidden mr-10'>
          <img
            className='w-full '
            src='images/introduceImg1.jpg'
            alt='introduceImg1'
          />
        </div>
      </div>
    </section>
  );
}
