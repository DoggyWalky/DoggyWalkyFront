import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='mt-28 justify-center '>
        <div className=' w-1/2 mr-12'>
          <MemberProfile />
        </div>
        <div className=' w-1/2 px-12 border-r-3 border-l-2 border-gray-300'>
          <p className='font-bold text-2xl text-center mb-3'>후기</p>
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
}
