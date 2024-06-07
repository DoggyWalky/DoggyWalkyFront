import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

function ReviewInputButton() {
  const openNewWindow = () => {
    window.open('/ReviewInput', '_blank', 'width=400,height=600');
  };

  return (
    <>
      <div className='mt-28 w-3/4 m-auto'>
        <div className=' '>
          <MemberProfile />
        </div>
        <div id='section2'>
          {/* className='m-auto border-t-4 border-brand ' */}
          <div className='flex items-center justify-center pt-28 mb-12'>
            <p className='font-bold text-4xl text-center  m-auto'>후기</p>
            <button>
              <img
                src='images/review.png '
                alt='review'
                className='w-12 mr-5'
                onClick={openNewWindow}
              />
            </button>
          </div>
          <div class='snap-x ... flex mb-48 overflow-x-auto p-4 shadow-2xl rounded-2xl'>
            <div class='snap-center ...'>{<Review />}</div>
            <div class='snap-center ...'>{<Review />}</div>
            <div class='snap-center ...'>{<Review />}</div>
            <div class='snap-center ...'>{<Review />}</div>
            <div class='snap-center ...'>{<Review />}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewInputButton;
