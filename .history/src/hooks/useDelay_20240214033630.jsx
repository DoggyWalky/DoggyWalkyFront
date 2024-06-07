import { useState, useEffect } from 'react';

function useDelay(initialValue, delay) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return value;
}

export default useDelay;
