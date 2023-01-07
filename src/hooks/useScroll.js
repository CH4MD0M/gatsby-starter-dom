import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
