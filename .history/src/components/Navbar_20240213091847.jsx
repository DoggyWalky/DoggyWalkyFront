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
    <div className='flxed'>
      <header
        className={`flex justify-between border-b border-gray-300 pt-4 pb-3 transition-all duration-200 ease-in-out w-full h-100 z-100 ${
          isScroll ? 'shadow-md' : ''
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
    </div>
  );
}
