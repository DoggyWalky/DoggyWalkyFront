import { useRef, useEffect, useCallback } from 'react';

// IntersectionObserver 콜백 함수 타입 정의
type IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

const useScrollFadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', duration: number = 1, delay: number = 0) => {
  // 요소의 ref를 추적
  const element = useRef<HTMLDivElement>(null);

  // 주어진 방향에 따라 요소 이동 방향을 결정하는 함수
  const handleDirection = useCallback((name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return '';
    }
  }, []);

  // 스크롤 이벤트를 처리하는 콜백 함수
  const onScroll: IntersectionObserverCallback = useCallback(([entry]) => {
    const { current } = element;
    if (current && entry.isIntersecting) {
      // 요소가 화면에 나타날 때 애니메이션 효과 적용
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = '1';
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, [delay, duration]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // 요소가 존재하는 경우
    if (element.current) {
      // IntersectionObserver를 초기화하고 관찰
      observer = new IntersectionObserver(onScroll, { threshold: 0.6 });
      observer.observe(element.current);
    }

    // 컴포넌트가 unmount 될 때 IntersectionObserver 해제
    return () => {
      if (observer && element.current) {
        observer.unobserve(element.current);
        observer.disconnect();
      }
    };
  }, [onScroll]);

  // 요소의 ref와 스타일을 반환
  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction)
    },
  };
};

export default useScrollFadeIn;

