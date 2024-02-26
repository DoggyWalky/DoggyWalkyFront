import React from 'react';
import MemberProfile from '../components/MemberProfile';
import Review from '../components/Review';

const ScrollablePetCards = () => {
  const horizontalScrollRef = useRef(null);

  const handleNextButtonClick = (nextType) => {
    if (!horizontalScrollRef.current) return;

    const scrollAmount =
      nextType === 'prev'
        ? -horizontalScrollRef.current.offsetWidth
        : horizontalScrollRef.current.offsetWidth;

    horizontalScrollRef.current.scrollTo({
      left: horizontalScrollRef.current.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  function ReviewInputButton() {
    const openNewWindow = () => {
      window.open('/ReviewInput', '_blank', 'width=400,height=600');
    };

    return (
      <>
        <div className='mt-28 w-3/4 m-auto'>
        <div ref={horizontalScrollRef} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>

      <PetCard />
      <PetCard />
      <PetCard />
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

            <div class='snap-x ... flex mb-10 overflow-x-auto'>
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
};

export default ReviewInputButton;
export default ScrollablePetCards;
