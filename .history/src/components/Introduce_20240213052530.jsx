import React from 'react';
import { ReactTyped } from 'react-typed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Introduce = () => {
  const animatedItem1 = useScrollFadeIn('left', 1, 0);
  const animatedItem2 = useScrollFadeIn('up', 1, 0.2);
  const animatedItem3 = useScrollFadeIn('up', 1, 0.3);

  return (
    <section>
      <div className='flex pt-20 justify-between'>
        <div className='relative text-center top-36 ml-20' {...animatedItem1}>
          <ReactTyped
            strings={['DoggyWalky']}
            typeSpeed={80}
            loop={false}
            showCursor={false}
            className='text-5xl font-bold'
          />
          <p className='text-2xl'>
            <br />
            We connect people with their dog
          </p>
        </div>
        <div className='w-introduceImg rounded-full overflow-hidden mr-10'>
          <img
            className='w-full'
            src='images/introduceImg1.jpg'
            alt='introduceImg1'
          />
        </div>
      </div>

      <div className='flex pt-20 justify-between mt-28'>
        <div className='w-introduceImg ml-10' {...animatedItem2}>
          <img
            className='w-full'
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

      <div className='flex pt-20 justify-between mt-36'>
        <div className='relative text-center top-32 ml-16' {...animatedItem3}>
          <h1 className='text-5xl font-bold'>실시간 이동 경로 확인</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
        <div className='w-introduceImg rounded-2 overflow-hidden mr-10'>
          <img
            className='w-full'
            src='images/introduceImg3.jpg'
            alt='introduceImg3'
          />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
