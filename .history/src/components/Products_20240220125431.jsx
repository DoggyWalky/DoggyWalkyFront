import React from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-10 p-6 mb-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </>
  );
}
