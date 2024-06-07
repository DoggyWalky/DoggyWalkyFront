import React from 'react';
import { ReactTyped } from 'react-typed';

export default function Introduce() {
  return (
    <section>
      <div className='flex pt-20 justify-between'>
        <div className='relative text-center top-32 ml-16'>
          <ReactTyped
            strings={['DoggyWalky']}
            typeSpeed={50} //타이핑 속도
            backSpeed={25} //타이핑 지우는 속도
            loop={false} //반복할건지
            showCursor={false}
            className='text-5xl font-bold'
          />
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

      <div className='flex pt-20 justify-between mt-28'>
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

      <div className='flex pt-20 justify-between mt-36'>
        <div className='relative text-center top-32 ml-16'>
          <h1 className='text-5xl font-bold'>실시간 이동 경로 확인</h1>
          <br />
          <p className='text-2xl'>We connect people with their dog</p>
        </div>
        <div className='w-introduceImg rounded-2 overflow-hidden mr-10'>
          <img
            className='w-full '
            src='images/introduceImg3.jpg'
            alt='introduceImg3'
          />
        </div>
      </div>
    </section>
  );
}
