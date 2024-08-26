import { useCallback, useEffect, useRef } from 'react';

const defaultOptions = {
  rootMargin: '1px',
  threshold: 0.1,
};

export const useInfiniteScroll = (onIntersect: () => void) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect],
  );

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(handleObserver, defaultOptions);

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [handleObserver]);

  return targetRef;
};
