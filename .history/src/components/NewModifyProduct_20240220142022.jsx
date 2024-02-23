import React from 'react';

export default function NewModifyProduct() {
  return (
    <section className='flex mt-28 w-full h-4/5 items-center'>
      <form className='grid px-12 justify-center gap-8'>
        <input
          type='file'
          className='file-input file-input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
      </form>
    </section>
  );
}
