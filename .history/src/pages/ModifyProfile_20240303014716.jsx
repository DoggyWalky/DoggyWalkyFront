import React from 'react';
import Button from '../components/ui/Button';

export default function ModifyProfile() {
  return (
    <div className='flex w-full h-screen overflow-hidden items-center justify-center shadow-xl'>
      <div className='flex w-3/6 h-4/6  bg-ExPost opacity-80 '>
        <img src='' alt='' className='' />
      </div>
      <div className='h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-16 px-8 rounded-md'>
        <form className='grid px-12 justify-center gap-8'>
          <input
            type='text'
            placeholder='제목을 입력해주세요.'
            className='input input-bordered w-full max-w-xs'
          />

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
          <Button text={'등록하기'} />
        </form>
      </div>
    </div>
  );
}
