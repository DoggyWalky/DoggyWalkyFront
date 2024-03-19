import React from 'react';
import * as api from '../api/api';
/*
후기 등록
api.writeReview

{
  "Description" : string,
  "Score" : number,
  "DogKind" : string
}
*/

export default function ReviewInput() {
  return (
    <div className=''>
      <div className='flex m-3 border-b-2 border-gray-300 pb-3'>
        <p className='font-bold text-4xl  '>Review</p>
        <img src='images/logo.png' alt='logo ' className='w-56 ml-auto mr-3' />
      </div>

      <div className='rating flex justify-center mt-8 mb-5 ' /*별점 */>
        <input
          type='radio'
          name='rating-4'
          className='mask mask-star-2 bg-brand p-6 '
        />
        <input
          type='radio'
          name='rating-4'
          className='mask mask-star-2 bg-brand p-6'
          checked
        />
        <input
          type='radio'
          name='rating-4'
          className='mask mask-star-2 bg-brand p-6'
        />
        <input
          type='radio'
          name='rating-4'
          className='mask mask-star-2 bg-brand p-6'
        />
        <input
          type='radio'
          name='rating-4'
          className='mask mask-star-2 bg-brand p-6'
        />
      </div>
      <div className='justify-center items-center mx-auto'>
        <input
          type='text'
          placeholder='리뷰 제목을 입력해주세요.'
          className='input input-bordered my-3  w-4/6 ml-20'
        />
        <textarea
          type='text'
          placeholder='내용을 입력해주세요.'
          className='input input-bordered w-11/12 ml-6 min-h-96'
        />
        <button className='border bg-lightYellow p-2 rounded-xl  w-5/12 ml-36 mt-5'>
          완료
        </button>
      </div>
    </div>
  );
}
