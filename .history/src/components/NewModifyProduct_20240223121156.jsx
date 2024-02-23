import React, { useState } from 'react';

export default function NewModifyProduct() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <section className='flex w-full h-screen  items-center justify-center'>
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <font>소형견</font>
            <input
              type='radio'
              name='radio-2'
              className='radio radio-primary'
            />
            <font>소형견</font>
            <input
              type='radio'
              name='radio-2'
              className='radio radio-primary'
            />
            <font>소형견</font>
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
      </div>
    </section>
  );
}
