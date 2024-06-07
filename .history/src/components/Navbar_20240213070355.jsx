import React from 'react';
import { Link } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 pt-4 pb-3'>
      <Link to='/'>
        <div className='w-56'>
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
        <Link to='/Login' className='text-lg'>
          Login
        </Link>
        <Link to='/Register' className='text-lg'>
          Register
        </Link>
      </nav>
    </header>
  );
}
