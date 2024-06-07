import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full '>
        <div className=' w-1/2'>
          <MemberProfile />
        </div>
        <div className=' w-1/2'>
          <Review />
        </div>
      </div>
    </>
  );
}
