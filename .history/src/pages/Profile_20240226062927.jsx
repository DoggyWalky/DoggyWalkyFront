import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='mt-28 w-3/4'>
        <div className='  '>
          <MemberProfile />
        </div>
        <div className=' border-gray-300'>
          <p className='font-bold text-2xl text-center mb-3 mt-16'>후기</p>
          <div className='flex'>
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
