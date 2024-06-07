import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <FiShoppingBag />
      </Link>
    </header>
  );
}
