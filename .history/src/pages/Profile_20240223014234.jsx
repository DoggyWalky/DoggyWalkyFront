import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full '>
        <div className='mr-5 w-1/2'>
          <MemberProfile />
        </div>
        <div className='ml-5 w-1/2'>
          <Review />
        </div>
      </div>
    </>
  );
}
