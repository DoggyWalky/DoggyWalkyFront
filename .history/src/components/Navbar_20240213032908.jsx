import React from 'react';
import { Link } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';
import { FaPencilAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 pt-4 pb-3'>
      <Link to='/'>
        <div className='w-60'>
          <img className='w-full' src='images/logo.png' alt='logo' />
        </div>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/Posts' className='text-lg'>
          Post
        </Link>
        <Link to='/Posts/new' className='text-2xl'>
          <HiPencilSquare />
        </Link>
      </nav>
    </header>
  );
}
