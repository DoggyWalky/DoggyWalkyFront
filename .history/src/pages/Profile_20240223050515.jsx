import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';
import PopUp from '../components/PopUp';

export default function Profile() {
  return (
    <PopUp />
    // <>
    //   <div className='flex  max-w-full my-28  '>
    //     <div className=' w-1/2 mr-12'>
    //       <MemberProfile />
    //     </div>
    //     <div className=' w-1/2 px-12 border-r-3 border-l-2 border-gray-300'>
    //       <p className='font-bold text-2xl text-center mb-3'>후기</p>
    //       <Review />
    //       <Review />
    //       <Review />
    //     </div>
    //   </div>
    // </>
  );
}
