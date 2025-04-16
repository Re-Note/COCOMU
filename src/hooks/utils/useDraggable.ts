import { useState, useRef, useEffect, RefObject } from 'react';

interface UseDraggableOptions {
  direction?: 'x' | 'y';
  initialValue?: number;
  min?: number;
  max?: number;
  threshold?: number;
}

interface UseDraggableReturn {
  value: number;
  containerRef: RefObject<HTMLDivElement>;
  handleMouseDown: (e: React.MouseEvent) => void;
}

export function useDraggable(options: UseDraggableOptions = {}): UseDraggableReturn {
  const { direction = 'x', initialValue = 40, min = 10, max = 90, threshold = 5 } = options;

  const [value, setValue] = useState<number>(initialValue);
  const isDraggingRef = useRef(false);
  const startCoordRef = useRef(0);
  const startValueRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;

    startCoordRef.current = direction === 'x' ? e.clientX : e.clientY;
    startValueRef.current = value;
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDraggingRef.current) return;

      const currentCoord = direction === 'x' ? e.clientX : e.clientY;
      const delta = currentCoord - startCoordRef.current;

      if (Math.abs(delta) < threshold) return;

      const containerSize =
        direction === 'x' ? containerRef.current?.offsetWidth || 1 : containerRef.current?.offsetHeight || 1;

      const deltaPercentage = (delta / containerSize) * 100;
      const newValue = Math.max(min, Math.min(startValueRef.current + deltaPercentage, max));
      setValue(newValue);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [direction, threshold, min, max]);

  return { value, containerRef, handleMouseDown };
}
