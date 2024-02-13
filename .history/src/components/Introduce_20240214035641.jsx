import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollClipPath from '../hooks/useScrollClipPath';

const Introduce = () => {
  const animatedItem1 = useScrollFadeIn('right', 1, 0);
  const animatedImage = useScrollClipPath('left', 1, 0);

  return (
    <>
      <section className=' flex justify-between items-center py-28'>
        <div className='text-center ml-16'>
          <h2 className='text-5xl font-bold'>DoggyWalky</h2>
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
      </section>
      <section className='py-28 flex items-center justify-between w-screen bg-lightYello1 left-1/2 transform -translate-x-1/2'>
        <div className='w-introduceImg ml-10' {...animatedImage}>
          <img
            className='w-full'
            src='images/introduceImg2.png'
            alt='introduceImg2'
          />
        </div>
        <div className=' text-center mr-16'>
          <h1 className='text-5xl font-bold'>간편하게</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
      </section>

      <section className='py-28 flex items-center  justify-between '>
        <div className='text-center ml-16' {...animatedItem1}>
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
      </section>
    </>
  );
};

export default Introduce;
