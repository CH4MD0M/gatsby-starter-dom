import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState();
  const [hidden, setHidden] = useState(false);

  const detectScrollDirection = () => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false);
    } else if (scrollY < window.scrollY && 100 <= window.scrollY) {
      // scroll down
      setHidden(true);
    }

    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection);
    };
  }, [scrollY]);

  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  return hidden;
};

export default useScroll;
