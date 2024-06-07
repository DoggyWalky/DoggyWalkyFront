import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='flex'>
        <MemberProfile className='mr-20' />
        <Review />
      </div>
    </>
  );
}
