import React from 'react';

export default function NewModifyProduct() {
  return (
    <section className='mt-28'>
      <form className='flex flex-col px-12'>
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
