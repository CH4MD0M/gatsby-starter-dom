import { useEffect, useRef, useState } from 'react';

export function useHeadObserver() {
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        '#post-contents > :is(h1, h2, h3)',
      ),
    );
    const headingIds = headingElements.map(heading => heading.id);

    setHeadings(headingElements);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setActiveHeadingId(id);
          scrollPositionRef.current = window.scrollY;
        } else {
          const diff = scrollPositionRef.current - window.scrollY;
          const isScrollingUp = diff > 0;
          const currentIndex = headingIds.indexOf(id);
          const prevEntry = headingIds[currentIndex - 1];

          if (isScrollingUp && prevEntry) setActiveHeadingId(prevEntry);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-60px 0px -80% 0px',
    });

    headingElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (headings[0]) setActiveHeadingId(headings[0].id);
  }, [headings]);

  return { headings, activeHeadingId };
}
