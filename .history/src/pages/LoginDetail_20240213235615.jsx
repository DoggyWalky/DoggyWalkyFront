import React from 'react';

export default function LoginDetail() {
  return (
    <div className='flex relative justify-center items-center mt-44 '>
      <content className='ml-36 bg-gradient-to-tl from-rose-100 to-teal-100'>
        <p className='font-bold text-7xl'> DoggyWalky</p>
        <p className=' text-2xl mt-7 mr-20  '>
          Loremvelit nobis possimus beatae corporis vel ad fuga sit quibusdam
          voluptate eligendi optio inventore libero, ea esse, quae ducimus?
        </p>
      </content>
      <login className='mr-64 p-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl'>
        <p className='font-bold text-5xl'>Login</p>
        <div className=' text-2xl mt-10 '>
          <div>
            <h3>E-mail</h3>
            <input
              className='mt-3 border-2 border-gray-400 rounded-xl '
              type='text'
            />
          </div>
          <div className='mt-5'>
            <h3>Password</h3>
            <input
              className='mt-3 border-2 border-gray-400 rounded-xl '
              type='password'
            />
          </div>
        </div>
        <div className='text-2xl mt-10 '>
          <button className=' py-1 px-5 ml-2 mr-2  border-2 border-black rounded-xl '>
            Register
          </button>
          <button className='py-1 px-8   border-2 border-black rounded-xl '>
            Login
          </button>
        </div>
      </login>
    </div>
  );
}
