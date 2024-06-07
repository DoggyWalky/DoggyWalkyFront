import React from 'react';

export default function RegisterDetail() {
  return (
    <div
      className='
   flex-col py-10 w-1/3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl  
    fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 '
    >
      <p className='font-bold text-5xl'>Register</p>
      <div className='text-2xl mt-10'>
        <p>E-mail</p>
        <input
          className='mt-3 border-2 border-gray-400 rounded-xl'
          type='text'
        />

        <p className='mt-5'>Password</p>
        <input
          className='mt-3 border-2 border-gray-400 rounded-xl'
          type='password'
        />

        <p className='mt-5'>Nickname</p>
        <input
          className='mt-3 border-2 border-gray-400 rounded-xl'
          type='text'
        />

        <p className='mt-5'>PhonNumber</p>
        <input
          className='mt-3 border-2 border-gray-400 rounded-xl'
          type='number'
        />

        <p className='mt-5'>Adress</p>
        <input
          className='mt-3 border-2 border-gray-400 rounded-xl'
          type='text'
        />
      </div>
      <button className='py-1 px-8 mt-10 ml-2 text-2xl  border-2 border-black rounded-xl '>
        Register Now
      </button>
    </div>
  );
}
