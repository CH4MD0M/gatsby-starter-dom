import { useCallback, useEffect, useState } from "react";

const defaultOptions = {
  root: null,
  rootMargin: "1px",
  threshold: "0.1",
};

export default function useInfiniteScroll(
  onIntersect,
  options = defaultOptions
) {
  const [target, setTarget] = useState(null);

  const handleIntersect = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) onIntersect(entry, observer);
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(target);
    }
    return () => observer?.disconnect();
  }, [handleIntersect, target, options]);

  return [setTarget];
}
