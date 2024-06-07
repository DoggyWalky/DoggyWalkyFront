import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

export default function Profile() {
  return (
    <>
      <div className='mt-28 w-3/4 m-auto'>
        <div className='  '>
          <MemberProfile />
        </div>
        <div className='m-auto border-t-4 border-brand'>
          <div className='flex items-center'>
            <p className='font-bold text-4xl text-center mb-10 mt-10 m-auto'>
              후기
            </p>
            <img src='images/review.png' alt='review' />
          </div>
          <div className='flex mb-10'>
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </>
  );
}
