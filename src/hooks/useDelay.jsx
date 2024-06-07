import { useState, useEffect } from 'react';

function useDelay(initialValue, delay) {
  const [value, setValue] = useState(initialValue); // 초기값과 지연 시간을 받아 상태 및 상태를 변경하는 함수를 선언

  // useEffect 훅을 사용하여 일정 시간이 지난 후에 상태를 변경하는 효과를 구현
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setTimeout 함수를 사용하여 일정 시간이 지난 후에 상태를 변경하는 작업을 예약
      setValue(true);
    }, delay);

    // clean-up 함수를 사용하여 setTimeout 예약을 정리
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return value;
}

export default useDelay;
