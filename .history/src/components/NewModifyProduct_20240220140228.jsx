import React from 'react';

export default function NewModifyProduct() {
  return (
    <section>
      <form className='flex flex-col px-12'>
        <input type='file' accept='image/*' name='file' required />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
      </form>
    </section>
  );
}
