import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <img src='./public/images' alt='logo' />
      </Link>
    </header>
  );
}
