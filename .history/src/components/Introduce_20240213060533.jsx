import React from 'react';
import { ReactTyped } from 'react-typed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollClipPath from '../hooks/useScrollClipPath';

const Introduce = () => {
  const animatedItem1 = useScrollFadeIn('left', 1, 0);
  const animatedImage = useScrollClipPath();

  return (
    <>
      <section className='py-20'>
        <div className='flex justify-between'>
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
      </section>
      <section className='py-20'>
        <div className='flex justify-between'>
          <div className='w-introduceImg ml-10'>
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
      </section>

      <section className='py-20 flex  justify-between '>
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
            {...animatedImage}
          />
        </div>
      </section>
    </>
  );
};

export default Introduce;
