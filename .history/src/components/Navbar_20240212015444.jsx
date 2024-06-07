import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppungBag } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <FiShoppungBag />
      </Link>
    </header>
  );
}
