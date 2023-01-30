import { useCallback, useEffect, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '1px',
  threshold: '0.1',
};

const useInfiniteScroll = (onIntersect, options = defaultOptions) => {
  const [target, setTarget] = useState(null);

  const handleIntersect = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) onIntersect(entry, observer);
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [handleIntersect, target, options]);

  return [setTarget];
};

export default useInfiniteScroll;
