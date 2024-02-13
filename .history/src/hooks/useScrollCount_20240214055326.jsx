import { useRef, useEffect, useCallback, useState } from 'react';

const useScrollCount = (end, start = 0, duration = 3000, delay = 0) => {
  const element = useRef();
  const [observer, setObserver] = useState(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(counter);
            observer.disconnect(); // observer.disconnect()를 호출할 때 observer가 null이 아닌지 확인
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element, observer]
  );

  useEffect(() => {
    if (element.current) {
      const newObserver = new IntersectionObserver(onScroll, {
        threshold: 0.7,
      });
      setObserver(newObserver);
      newObserver.observe(element.current);
    }

    // useEffect 내부에서 정리(clean-up)를 처리
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
