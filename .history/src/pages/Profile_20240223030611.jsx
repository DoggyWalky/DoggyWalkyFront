import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex  max-w-full mt-28 '>
        <div className=' w-1/4 border-r-3 border-r-2 border-gray-300'>
          <MemberProfile />
        </div>
        <div className=' w-3/4'>
          <Review />
        </div>
      </div>
    </>
  );
}
