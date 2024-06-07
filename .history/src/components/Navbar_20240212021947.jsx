import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <h1 className='text-2xl'>dkssud</h1>
        <img src='../public/images/logo.png' alt='logo' />
      </Link>
    </header>
  );
}
