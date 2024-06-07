import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300'>
      <Link to='/'>
        <div className='w-90'>
          <img className='w-90' src='images/logo.png' alt='logo' />
        </div>
      </Link>
      <nav>
        <Link to='/Posts'>Post</Link>
      </nav>
    </header>
  );
}
