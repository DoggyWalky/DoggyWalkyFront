import React from 'react';
import Button from '../components/ui/Button';

export default function ModifyProfile() {
  return (
    <div className=''>
      <div className='flex w-full h-4/6 overflow-hidden items-center justify-center '>
        <div className='flex w-3/6  overflow-hidden justify-center bg-ExPost opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
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
    </div>
  );
}
