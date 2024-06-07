import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='relative left-1/2 transform -translate-x-1/2 w-screen bg-blue h-48 text-center'>
      <div className='w-full h-full grid justify-center items-center'>
        <div className=' flex text-white font-bold text-xl'>
          <FaGithub className='text-2xl mr-2' />
          <a
            href='https://github.com/DoggyWalky'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-lightYellow1'
          >
            https://github.com/DoggyWalky
          </a>
        </div>
      </div>
    </div>
  );
}
