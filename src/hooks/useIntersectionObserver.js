import { useRef, useEffect } from 'react';

const defaultOptions = {
  rootMargin: '-60px 0px -80% 0px',
};

const useIntersectionObserver = (setActiveId, options = defaultOptions) => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const handleIntersect = headings => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = id =>
        headingElements.findIndex(heading => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const headingElements = [
      ...document.querySelectorAll(
        '#post-contents > h1, #post-contents > h2, #post-contents > h3',
      ),
    ];

    headingElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [setActiveId]);
};

export default useIntersectionObserver;
