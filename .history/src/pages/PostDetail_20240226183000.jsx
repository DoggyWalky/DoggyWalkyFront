import React from 'react';
import { TbCategory2 } from 'react-icons/tb';

export default function PostDetail() {
  return (
    <>
      <div className='flex items-center mt-28'>
        <TbCategory2 />
        <p>분류 : 소형견</p>
      </div>
      <section>
        <img src='images/exPet.jpg' alt='test' />
      </section>
    </>
  );
}
