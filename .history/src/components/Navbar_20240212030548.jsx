import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300'>
      <Link to='/'>
        <div className='w-72'>
          <img className='w-full' src='images/logo.png' alt='logo' />
        </div>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/Posts' className='text-xl'>
          Post
        </Link>
      </nav>
    </header>
  );
}
