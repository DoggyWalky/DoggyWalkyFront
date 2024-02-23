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
        <div class='flex w-full relative'>
          <input
            type='radio'
            id='option0'
            name='tabs'
            class='appearance-none'
          />
          <label
            for='option0'
            class='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
          >
            OPTION 0
          </label>

          <input
            type='radio'
            id='option1'
            name='tabs'
            class='appearance-none'
          />
          <label
            for='option1'
            class='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
          >
            OPTION 1
          </label>

          <input
            type='radio'
            id='option2'
            name='tabs'
            class='appearance-none'
          />
          <label
            for='option2'
            class='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
          >
            OPTION 2
          </label>

          <input
            type='radio'
            id='option3'
            name='tabs'
            class='appearance-none'
          />
          <label
            for='option3'
            class='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
          >
            OPTION 3
          </label>

          <input
            type='radio'
            id='option4'
            name='tabs'
            class='appearance-none'
          />
          <label
            for='option4'
            class='cursor-pointer w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2'
          >
            OPTION 4
          </label>

          <div class='w-1/6 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-indigo-600 absolute transform transition-transform tabAnim'></div>
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
