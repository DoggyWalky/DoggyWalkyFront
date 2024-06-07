import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full mt-28 '>
        <div className='mr-7 w-1/2 p-1.5 border-r-3 border-r-2 border-gray-300'>
          <MemberProfile />
        </div>
        <div className='ml-7 w-1/2 p-1.5'>
          <Review />
        </div>
      </div>
    </>
  );
}
