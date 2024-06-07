import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Search() {
  const animatedItem = useScrollFadeIn('up', 1, 0.5);
  return (
    <section className=' relative'>
      <div className='relative text-center mx-auto mt-28 max-w-2xl z-20 opacity-90'>
        <img
          className=' w-full rounded-md'
          src='images/testPost.jpg'
          alt='Search'
        />
      </div>
      <div className='relative h-96 -top-40 z-10 bg-gray-100 rounded-3xl'>
        <form
          className=' relative w-full max-w-3xl mx-auto -bottom-60 bg-white px-4 pt-2 pb-4 rounded-full'
          {...animatedItem}
        >
          <div className='  flex  items-center border-b border-teal-500 px-2 text-md '>
            <IoSearchSharp className='text-2xl text-gray-500' />

            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  leading-tight focus:outline-none'
              type='text'
              placeholder='어떤 강아지와 산책하고 싶으신가요?'
              aria-label='Full name'
            />
            {/* <button
                class='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
                type='button'
              >
                Sign Up
              </button> */}
            <button
              className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-md py-1 px-2 rounded'
              type='button'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
