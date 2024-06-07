import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='mt-28 '>
        <div className='  '>
          <MemberProfile />
        </div>
        <div className=' border-r-3 border-l-2 border-gray-300'>
          <p className='font-bold text-2xl text-center mb-3'>후기</p>
          <div className='flex mx-7'>
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </>
  );
}
