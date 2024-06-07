import { useRef } from 'react';

// 가로 스크롤이 가능한 컨테이너에 PetCard를 렌더링하는 함수형 컴포넌트
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

  return (
    <div
      ref={horizontalScrollRef}
      style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
    >
      {<PetCard />},
      <PetCard />
      <PetCard />
    </div>
  );
};

export default ScrollablePetCards;
