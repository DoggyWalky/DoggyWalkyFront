import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full mt-28 '>
        <div className='mr-7 w-1/2 border-r-3 border-r-2 border-gray-200'>
          <MemberProfile />
        </div>
        <div className='ml-7 w-1/2'>
          <Review />
        </div>
      </div>
    </>
  );
}
