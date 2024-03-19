import { useRef, useEffect, useCallback } from 'react';

// 스크롤 방향에 따라 clip-path를 조절하여 요소가 부드럽게 나타나도록 하는 커스텀 훅
const useScrollClipPath = (direction = 'left', duration = 1, delay = 0) => {
  const element = useRef();

  // 주어진 방향에 따라 값 설정
  const handleClipPath = (name) => {
    switch (name) {
      case 'up':
        return 'inset(100% 0 0 0)';
      case 'down':
        return 'inset(0 0 100% 0)';
      case 'left':
        return 'inset(0 100% 0 0)';
      case 'right':
        return 'inset(0 0 0 100%)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        // 요소가 화면에 나타날 때 애니메이션 효과를 적용
        current.style.transitionProperty = 'transform, clip-path';
        current.style.transitionDuration = `${duration * 1.5}s, ${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.transform = 'scale(1)';
        current.style.clipPath = 'inset(0 0 0 0)';
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;

    // 요소가 존재하는 경우
    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current.parentNode); // 부모 요소를 관찰하여 요소가 화면에 나타날 때까지 기다림
    }

    return () => observer && observer.disconnect(); // 컴포넌트가 unmount 될 때 이전 Observer를 해제
  }, [onScroll]);

  return {
    ref: element,
    style: {
      transform: 'scale(1.2)',
      clipPath: handleClipPath(direction),
    },
  };
};

export default useScrollClipPath;
