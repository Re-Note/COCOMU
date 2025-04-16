import { useEffect, useRef } from 'react';
import { FetchNextPageOptions } from '@tanstack/react-query';

interface UseScrollProps {
  nextPage: boolean;
  fetchingNextPage: boolean;
  fetchNext: (options?: FetchNextPageOptions) => Promise<unknown>;
  thresholdRate?: number;
}

export default function useScroll({ nextPage, fetchingNextPage, fetchNext, thresholdRate = 0.1 }: UseScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerRef.current || !nextPage || fetchingNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNext();
        }
      },
      { rootMargin: `${thresholdRate * 100}%` },
    );

    const currentElement = observerRef.current;
    observer.observe(currentElement);

    return () => observer.unobserve(currentElement);
  }, [nextPage, fetchingNextPage, fetchNext, thresholdRate]);

  return { observerRef };
}
