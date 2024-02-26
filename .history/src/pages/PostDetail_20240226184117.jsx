import React from 'react';
import { TbCategory2 } from 'react-icons/tb';

export default function PostDetail() {
  return (
    <>
      <div className='flex items-center mt-28'>
        <TbCategory2 />
        <p>분류 : 소형견</p>
      </div>
      <section className='flex flex-col md:flex-row p-4'>
        <img
          className=' w-full px-4 basis-7/12'
          src='/images/testPost.jpg'
          alt='test'
        />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2>뽀삐의 친구를 구합니다!</h2>
        </div>
      </section>
    </>
  );
}
