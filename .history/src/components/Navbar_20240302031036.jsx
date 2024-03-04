import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';
import Button from './ui/Button';
import axios from 'axios';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Callback URL
    const STATE = 'false';
    const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = NAVER_AUTH_URL;

    const code = new URL(window.location.href).searchParams.get('code');

    async function sendCode() {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/auth/{socialLoginType}/callback'
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <Link to='/Profile' className='text-lg'>
            Profile
          </Link>
          <Link to='/Posts' className='text-lg'>
            Post
          </Link>
          <Link to='/Posts/new' className='text-2xl'>
            <HiPencilSquare />
          </Link>
          <Button onClick={NaverLogin} text={'Login'} />
        </nav>
      </header>
    </div>
  );
}
