import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex  max-w-full my-28 justify-items-center '>
        <div className=' w-1/2 '>
          <MemberProfile />
        </div>
        <div className=' w-1/2  border-r-3 border-l-2 border-gray-300'>
          <p className='font-bold text-2xl text-center mb-3'>후기</p>
          <Review />
        </div>
      </div>
    </>
  );
}
