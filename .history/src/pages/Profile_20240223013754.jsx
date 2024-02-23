import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex'>
        <div className='mr-6'>
          <MemberProfile />
        </div>
        <Review />
      </div>
    </>
  );
}
