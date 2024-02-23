import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full mt-28 '>
        <div className='mr-7 w-1/2 border-r-3 border-r-1 border-black'>
          <MemberProfile />
        </div>
        <div className='ml-7 w-1/2'>
          <Review />
        </div>
      </div>
    </>
  );
}
