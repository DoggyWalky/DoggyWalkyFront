import { useRef, useEffect, useCallback } from 'react';

// 화면 스크롤에 따라 특정 범위의 숫자를 카운트하여 표시하는 커스텀 훅
const useScrollCount = (end, start = 0, duration = 2000, delay = 0) => {
  const element = useRef(); // 요소의 ref를 추적
  const observer = useRef(null); // IntersectionObserver를 추적하기 위한 ref
  const stepTime = Math.abs(Math.floor(duration / (end - start))); // 각 단계의 시간 간격을 계산

  // 스크롤 이벤트를 처리하는 콜백 함수
  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        // 시작값부터 시작하여 일정 간격으로 카운트 증가
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          // 요소에 현재 숫자 표시
          current.innerHTML = currentNumber;
          // 종료값에 도달하면 카운터 중지
          if (currentNumber === end) {
            clearInterval(counter);
            // IntersectionObserver 해제
            observer.current.disconnect(); // Disconnect directly from the ref
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element]
  );

  useEffect(() => {
    if (element.current) {
      // 요소가 존재하는 경우
      // IntersectionObserver를 초기화하고 관찰
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    // 컴포넌트가 unmount 될 때 IntersectionObserver 해제
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
