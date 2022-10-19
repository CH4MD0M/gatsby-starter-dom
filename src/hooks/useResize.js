import { useState, useEffect } from "react";
import _ from "lodash";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const debouncedResize = _.debounce(onResize, 400);

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return width;
};

export default useResize;
