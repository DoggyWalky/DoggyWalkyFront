import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='relative left-1/2 transform -translate-x-1/2 w-screen bg-blue h-48 text-center text-white  '>
      <div className='w-full h-full grid justify-center items-center'>
        <FaGithub />
        <p>dkssudgktpdyd</p>
      </div>
    </div>
  );
}
