import { useState, useEffect } from "react";
import { throttle } from "../utils/throttle";

const useScroll = (callbackFn) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", callbackFn);
    return () => {
      window.removeEventListener("scroll", callbackFn);
    };
  }, [scrollY]);

  return { scrollY, setScrollY };
};

export default useScroll;
