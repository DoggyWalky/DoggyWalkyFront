import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex justify-between'>
        <MemberProfile />
        <Review />
      </div>
    </>
  );
}
