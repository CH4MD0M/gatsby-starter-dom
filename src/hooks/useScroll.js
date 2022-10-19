import { useState, useEffect } from "react";
import _ from "lodash";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const throttledScroll = _.throttle(onScroll, 100);

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
