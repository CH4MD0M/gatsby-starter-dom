import qs from "query-string";
import { useCallback, useEffect, useState } from "react";

export default function useCategory() {
  const [category, setCategory] = useState("all");

  const selectCategory = useCallback((category) => {
    setCategory(category);
    window.history.pushState(
      { category },
      "",
      `${window.location.pathname}?${qs.stringify({ category })}`
    );
  }, []);

  const changeCategory = useCallback(() => {
    const { category } = qs.parse(window.location.search);
    const target = category == null ? "all" : category;
    setCategory(target);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", changeCategory);
    return () => {
      window.addEventListener("popstate", changeCategory);
    };
  }, []);

  useEffect(() => {
    changeCategory();
  }, []);

  return [category, selectCategory];
}