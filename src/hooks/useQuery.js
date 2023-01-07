import { useEffect, useState } from "react";
import qs from "query-string";

const useQuery = () => {
  const [selectedQuery, setSelectedQuery] = useState();

  let query = null;
  if (typeof window !== "undefined") {
    query = window.location.search;
  }

  useEffect(() => {
    const { q } = qs.parse(query);
    const target = !q ? "all" : q;
    setSelectedQuery(target);
  }, [query]);

  return [selectedQuery];
};

export default useQuery;
