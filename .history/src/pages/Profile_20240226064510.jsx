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
        <div className=' border-gray-300 m-auto  <div className="divider">Default</div'>
          <p className='font-bold text-4xl text-center mb-5 mt-16 m-auto'>
            후기
          </p>
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
