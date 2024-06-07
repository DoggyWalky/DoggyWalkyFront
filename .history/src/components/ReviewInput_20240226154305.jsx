import React from 'react';

export default function ReviewInput() {
  return (
    <div>
      <div className='flex m-3 border-b-2 border-gray-300 pb-3'>
        <p className='font-bold text-4xl  '>Review</p>
        <img src='images/logo.png' alt='logo ' className='w-56 ml-auto mr-3' />
      </div>
      <div className='justify-center items-center mx-auto w-5/6'>
        <input
          type='text'
          placeholder='리뷰 제목을 입력해주세요.'
          className='input input-bordered mt-3 w-fit'
        />
      </div>
    </div>
  );
}
