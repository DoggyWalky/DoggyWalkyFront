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
        <div className='  '>
          <MemberProfile />
        </div>
        <div className='m-auto border-t-4 border-brand'>
          <div className='flex items-center justify-center'>
            <p className='font-bold text-4xl text-center mb-10 mt-10 m-auto'>
              후기
            </p>
            <button>
              <img
                src='images/review.png '
                alt='review'
                className='w-12 '
                onClick={openNewWindow}
              />
            </button>
          </div>
          <div className=''>
            <div class='snap-y ... h-96 mb-10 overflow-y-auto'>
              <div class='snap-center ...'>{<Review />}</div>
              <div class='snap-center ...'>{<Review />}</div>
              <div class='snap-center ...'>{<Review />}</div>
              <div class='snap-center ...'>{<Review />}</div>
              <div class='snap-center ...'>{<Review />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewInputButton;
