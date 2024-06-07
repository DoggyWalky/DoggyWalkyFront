import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';
import Button from './ui/Button';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

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

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  return (
    <div
      className={`fixed z-50 top-0 w-full left-0 transition-all duration-200 ease-in-out bg-opacity-0 h-100  ${
        isScroll ? 'shadow-md bg-white bg-opacity-100  ' : ''
      }
      ${isHome ? 'text-white' : 'text-text'}`}
    >
      <header
        className={`flex max-w-screen-xl mx-auto justify-between align-center pt-4 pb-3 h-full  ${
          isScroll ? 'text-text ' : ''
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
          <Link to='/ModifyPost' className='text-lg'>
            <Button text={'Resister'} />
          </Link>
        </nav>
      </header>
    </div>
  );
}
