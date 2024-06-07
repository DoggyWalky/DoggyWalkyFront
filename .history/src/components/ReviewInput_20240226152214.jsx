import React from 'react';

export default function ReviewInput() {
  return (
    <div>
      <div className='flex m-3 border-b-2 border-gray-300 pb-3'>
        <p className='font-bold text-4xl  '>Review</p>
        <img src='images/logo.png' alt='logo ' className='w-56 ml-auto mr-3' />
      </div>
      <div>
        <p>제목 : </p>
        <input type='text' alt='title' />
      </div>
    </div>
  );
}
