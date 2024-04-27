import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiPencilSquare } from 'react-icons/hi2';
import Login from './member/Login';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      // 스크롤 위치에 따라 isScroll 상태값을 변경함
      setIsScroll(true);
    }
    if (window.scrollY === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    //스크롤 이벤트를 추가하고 제거함
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // 현재 페이지가 홈 페이지인지 여부를 판단하여 isHome 상태값을 변경함
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  return (
    <div
      className={`fixed z-50 top-0 w-full left-0 transition-all duration-200 ease-in-out bg-opacity-0 h-100  ${
        isScroll ? 'shadow-md bg-white bg-opacity-100  ' : '' //스크롤시 그림자,배경 생기게 변경
      }
      ${isHome ? 'text-white' : 'text-text'}`} //home이면 text색 흰색으로 아니면 어둡게 변경
    >
      <header
        className={`flex max-w-screen-xl mx-auto justify-between align-center pt-4 pb-3 h-full  ${
          isScroll ? 'text-text ' : '' //스크롤시 text어둡게 변경
        }`}
      >
        <Link to='/' /**이미지 클릭시 홈으로 이동 */>
          <div className='w-56'>
            <img className='w-full' src='images/logo.png' alt='logo' />
          </div>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
          <Link to='/Profile' className='text-lg' /**Profile로 이동 */>
            Profile
          </Link>
          <Link to='/Posts' className='text-lg' /**Post 이동 */>
            Post
          </Link>
          <Link to='/Posts/new' className='text-2xl'>
            <HiPencilSquare /*HiPencilSquare 클릭시 NewPost로 이동 */ />
          </Link>
          <Login />
        </nav>
      </header>
    </div>
  );
}
