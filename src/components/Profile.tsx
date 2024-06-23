/* 프로필 */
import React from 'react';
import * as api from '../api/api';
import MemberProfile from './MemberProfile';
import Review from './Review';

const ReviewInputButton: React.FC = () => {
  
  const openNewWindow = () => {
    window.open('/ReviewInput', '_blank', 'width=400,height=600'); // /ReviewInput 경로로 가로400 세로600인 새윈도우창으로 띄움
  };

  return (
    <>
      <div className='w-full shadow-xl mb-24'>
        <div>
          <MemberProfile />
        </div>
        <div id='section2' className='py-24 px-4 flex flex-wrap'>
          {/* className='m-auto border-t-4 border-brand ' */}
          <p className='w-full font-bold text-3xl text-center m-auto'>후기</p>
          <button className='ml-auto mr-6'>
            <img
              src='images/review.png '
              alt='review'
              className='w-10'
              onClick={openNewWindow} //버튼 클릭시 새 윈도우창 열림
            />
          </button>
          <div className='snap-x ... flex overflow-x-auto p-10'>
            <div className='snap-center ...'>{<Review />}</div>
            <div className='snap-center ...'>{<Review />}</div>
            <div className='snap-center ...'>{<Review />}</div>
            <div className='snap-center ...'>{<Review />}</div>
            <div className='snap-center ...'>{<Review />}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewInputButton;
