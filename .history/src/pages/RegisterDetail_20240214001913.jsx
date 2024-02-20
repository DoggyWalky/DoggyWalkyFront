import React from 'react';

export default function RegisterDetail() {
  return (
    <div className='flex flex-col items-center mt-6 py-10 w-1/3 m-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl'>
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
