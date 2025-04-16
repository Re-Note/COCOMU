import { useEffect, useRef, useState } from 'react';

const useDebounce = <T>(value: T, delay: number) => {
  const [debounced, setDebounced] = useState<T>(value);
  const valueRef = useRef<T>(value);

  useEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;

      const timer = setTimeout(() => {
        setDebounced(value);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
