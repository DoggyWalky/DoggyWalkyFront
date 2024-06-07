import React, { useState } from 'react';
import Button from './ui/Button';
import * as api from '../api/api';

export default function ModifyPet() {
  /*
  강아지 수정
  api.modifyPet

  {
    "Kind" : string,
    "Weight" : number,
    "Description" : string,
    "Name" : string
  }
  */

  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='flex w-full h-screen justify-center -mb-40'>
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
            placeholder='새로운 이름을 입력하세요.'
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
          <textarea
            type='text'
            placeholder='새로운 소개를 작성하세요.'
            className='input input-bordered w-full max-w-xs min-h-9'
          />
          <Button text={'수정하기'} />
        </form>
      </div>
    </div>
  );
}
