import {
  useState,
  useCallback,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

type SetTarget = Dispatch<SetStateAction<Element | null>>;

const defaultOptions: Options = {
  root: null,
  rootMargin: '1px',
  threshold: 0.1,
};

const useInfiniteScroll = (
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
  options = defaultOptions,
): [SetTarget] => {
  const [target, setTarget] = useState<Element | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
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
