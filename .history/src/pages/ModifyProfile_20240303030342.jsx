import React from 'react';
import Button from '../components/ui/Button';

export default function ModifyProfile() {
  return (
    <div className='grid mt-28 items-center '>
      <section>
        <p className='font-bold text-4xl justify-center'>프로필 수정하기</p>
        <div className='flex w-full h-screen  justify-center '>
          <div className='flex w-3/6 h-4/6  bg-ExPost bg-no-repeat opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
            <img src='' alt='' className='' />
          </div>
          <div className='h-4/6 py-16 px-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <form className='grid px-12 justify-center gap-8'>
              <input
                type='file'
                placeholder='새로운 프로필 사진을 업로드하세요.'
                className='file-input file-input-bordered w-full max-w-xs'
              />
              <input
                type='text'
                placeholder='새로운 닉네임을 입력하세요.'
                className='input input-bordered w-full max-w-xs'
              />
              <textarea
                type='text'
                placeholder='새로운 소개글을 작성하세요.'
                className='input input-bordered w-full max-w-xs min-h-9'
              />
              <Button text={'수정하기'} />
            </form>
          </div>
        </div>
      </section>
      <div className='flex w-full h-screen justify-center  '>
        <div className='flex w-3/6 h-4/6  bg-ExPost bg-no-repeat opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <img src='' alt='' className='' />
        </div>
        <div className='h-4/6 py-16 px-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <form className='grid px-12 justify-center gap-8'>
            <input
              type='file'
              placeholder='새로운 프로필 사진을 업로드하세요.'
              className='file-input file-input-bordered w-full max-w-xs'
            />
            <input
              type='text'
              placeholder='새로운 닉네임을 입력하세요.'
              className='input input-bordered w-full max-w-xs'
            />
            <textarea
              type='text'
              placeholder='새로운 소개글을 작성하세요.'
              className='input input-bordered w-full max-w-xs min-h-9'
            />
            <Button text={'수정하기'} />
          </form>
        </div>
      </div>
    </div>
  );
}
