import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex justify-center max-w-full '>
        <div className='mr-7 w-1/2 border-r-8'>
          <MemberProfile />
        </div>
        <div className='ml-7 w-1/2'>
          <Review />
        </div>
      </div>
    </>
  );
}
