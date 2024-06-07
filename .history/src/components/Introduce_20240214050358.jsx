import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollClipPath from '../hooks/useScrollClipPath';

const Introduce = () => {
  const animatedItem1 = useScrollFadeIn('right', 1, 0);
  const animatedImage = useScrollClipPath('left', 1, 0);

  return (
    <section className='relative left-1/2 transform -translate-x-1/2 w-screen ml-auto '>
      <section className=' justify-between items-center py-10 text-center '>
        <h2 className='text-brand pt-4 text-xl font-bold'>Our Services</h2>
        <div>
          <div>
            <h3>Passionate Dog Owners</h3>
            <p>
              Connect with dog owners who share your love for these wonderful
              companions.
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 flex items-center justify-between  bg-lightYello1'>
        <div className=' flex justify-between items-center py-10 w-max_width mx-auto'>
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
        </div>
      </section>

      <section className='py-10 flex items-center  justify-between '>
        <div className=' flex justify-between items-center py-10 w-max_width mx-auto'>
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
        </div>
      </section>
    </section>
  );
};

export default Introduce;
