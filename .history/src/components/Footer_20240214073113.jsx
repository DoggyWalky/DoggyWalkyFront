import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='relative left-1/2 transform -translate-x-1/2 w-screen bg-blue h-48 text-center  '>
      <div className='w-full h-full grid justify-center items-center'>
        <p className='text-white font-bold text-xl'>
          <FaGithub />
          dkssudgktpdyd
        </p>
      </div>
    </div>
  );
}
