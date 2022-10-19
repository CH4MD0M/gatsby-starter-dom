import { useState, useEffect } from "react";
import _ from "lodash";

const useResize = () => {
  const [width, setWidth] = useState();

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    const debouncedResize = _.debounce(onResize, 400);

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return width;
};

export default useResize;
