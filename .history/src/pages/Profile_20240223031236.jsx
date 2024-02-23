import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex  max-w-full mt-28  '>
        <div className=' w-1/2 '>
          <MemberProfile />
        </div>
        <div className=' w-1/2 ml-12 border-r-3 border-l-2 border-gray-300'>
          <Review />
        </div>
      </div>
    </>
  );
}
