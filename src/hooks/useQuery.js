import { useEffect, useState } from 'react';
import qs from 'query-string';

const useQuery = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);

  let query = null;
  if (typeof window !== 'undefined') {
    query = window.location.search;
  }

  useEffect(() => {
    const { q } = qs.parse(query);
    const target = q || 'all';
    setSelectedQuery(target);
  }, [query]);

  return [selectedQuery];
};

export default useQuery;
