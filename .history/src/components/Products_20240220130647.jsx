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
      <div className='flex justify-center my-20'>
        <div className='join'>
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='1'
            checked
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='2'
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='3'
          />
          <input
            className='join-item btn btn-square'
            type='radio'
            name='options'
            aria-label='4'
          />
        </div>
      </div>
    </>
  );
}
