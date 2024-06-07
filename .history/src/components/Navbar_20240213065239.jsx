import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between border-b border-gray-300 pt-4 pb-3 ${
        isScrolled ? 'fixed top-0 left-0 bg-white shadow-md w-full z-10' : ''
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
  );
};

export default Navbar;
