import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <img src='/path/to/your/image.png' alt='Your Image Alt Text' />
      </Link>
    </header>
  );
}
