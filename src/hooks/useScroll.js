import { useState, useEffect, useMemo } from "react";
import { throttle } from "../utils/throttle";

const useScroll = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const detectScrollDirection = () => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false);
    } else {
      // scroll down
      setHidden(true);
    }

    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(detectScrollDirection));

    return () => {
      window.removeEventListener("scroll", throttle(detectScrollDirection));
    };
  }, [scrollY]);

  return hidden;
};

export default useScroll;
