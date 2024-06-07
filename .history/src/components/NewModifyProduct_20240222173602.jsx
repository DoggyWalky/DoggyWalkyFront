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
          <input type='radio' name='radio-1' className='radio' checked />
          <p>소형견</p>
          <input type='radio' name='radio-1' className='radio' />
          <font>중형견</font>
          <input type='radio' name='radio-1' className='radio' />
          <font>대형견</font>
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
