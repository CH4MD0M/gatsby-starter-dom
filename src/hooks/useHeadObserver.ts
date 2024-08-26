import { useEffect, useRef, useState } from 'react';

interface Heading {
  id: string;
  element: HTMLElement;
}

export const useHeadObserver = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        '#post-contents > :is(h1, h2, h3)',
      ),
    );

    const newHeadings = headingElements.map(element => ({
      id: element.id,
      element: element,
    }));

    setHeadings(newHeadings);

    if (newHeadings.length > 0) setActiveHeadingId(newHeadings[0].id);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setActiveHeadingId(id);
          scrollPositionRef.current = window.scrollY;
        } else {
          const diff = scrollPositionRef.current - window.scrollY;
          const isScrollingUp = diff > 0;
          const currentIndex = newHeadings.findIndex(h => h.id === id);
          const prevEntry = newHeadings[currentIndex - 1];

          if (isScrollingUp && prevEntry) setActiveHeadingId(prevEntry.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-60px 0px -80% 0px',
    });

    newHeadings.forEach(heading => observer.observe(heading.element));

    return () => observer.disconnect();
  }, []);

  return { headings, activeHeadingId };
};
