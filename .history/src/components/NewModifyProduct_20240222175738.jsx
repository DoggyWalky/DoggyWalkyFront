import React from 'react';

export default function NewModifyProduct() {
  return (
    <section className='flex w-full h-screen  items-center justify-center'>
      <form className='grid px-12 justify-center gap-8'>
        <input
          type='text'
          placeholder='제목을 입력해주세요.'
          className='input input-bordered w-full max-w-xs'
        />
        <div>
          <input
            type='radio'
            name='radio-2'
            className='radio radio-primary'
            checked
          />
          <font></font>
          <input type='radio' name='radio-2' className='radio radio-primary' />
        </div>
        <input
          type='file'
          placeholder='강아지 사진을 업로드해주세요.'
          className='file-input file-input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='알바비를 입력해주세요.'
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='내용을 입력해주세요'
          className='input input-bordered w-full max-w-xs'
        />
      </form>
    </section>
  );
}
