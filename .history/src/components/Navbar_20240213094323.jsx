import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    }
    if (window.scrollY === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    // <div className='sticky z-1000 transition-all duration-200 ease-in-out top-0 w-full left-0'>
    <header
      className={`flex justify-between border-b border-gray-300 pt-4 pb-3 ${
        isScroll
          ? 'fixed top-0 left-0 bg-white shadow-md w-full mx-auto z-1000 '
          : ''
      }`}
    >
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
    // </div>
  );
}
