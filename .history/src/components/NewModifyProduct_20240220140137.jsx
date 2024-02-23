import React from 'react';

export default function NewModifyProduct() {
  return (
    <section>
      <form className='flex flex-col px-12'>
        <input type='file' accept='image/*' name='file' required />
        <input type='text' name='title' placeholder='제품명' required />
      </form>
    </section>
  );
}
