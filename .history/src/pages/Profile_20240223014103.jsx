import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex max-w-full '>
        <div className='mr-6 max-w-'>
          <MemberProfile />
        </div>
        <Review />
      </div>
    </>
  );
}
