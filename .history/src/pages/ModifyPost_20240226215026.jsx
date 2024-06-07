import React, { useState } from 'react';
import Button from '../components/ui/Button';

export default function ModifyPost() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className='text-text flex justify-center'>
        <h2 className='relative top-28 font-bold text-xl  text-center '>
          강아지 산책 도우미를 찾고 계신가요?
          <br />
          함께 즐거운 시간을 보낼 도우미를 기다리고 있어요!
        </h2>
      </div>
      <section className='flex w-full h-screen  items-center justify-center'>
        <div className='flex w-3/6 h-4/6  justify-center bg-ExPost opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <h2 className='relative top-40 font-bold text-4xl text-gray-50 '>
            이미지 미리보기
          </h2>
        </div>
        <div className=' h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-8 px-8 rounded-md'>
          <form className='grid px-12 justify-center gap-8'>
            <input
              type='text'
              placeholder='제목을 입력해주세요.'
              className='input input-bordered w-full max-w-xs'
            />
            <div className='flex items-center justify-center'>
              <input
                type='radio'
                name='radio-2'
                className='radio radio-primary'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className='mr-3 ml-1'>소형견</label>
              <input
                type='radio'
                name='radio-2'
                className='radio radio-primary'
              />
              <label className='mr-3 ml-1'>중형견</label>
              <input
                type='radio'
                name='radio-2'
                className='radio radio-primary'
              />
              <label className='mr-3 ml-1'>대형견</label>
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
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                구인 중 🐾
              </option>
              <option>구인 완료 🍀</option>
            </select>
            <Button text={'수정하기'} />
          </form>
        </div>
      </section>
    </>
  );
}
