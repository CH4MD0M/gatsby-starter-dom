import { useState, useEffect } from 'react';
import qs from 'query-string';

const useQuery = <T extends string | null>(): [T] => {
  const [selectedQuery, setSelectedQuery] = useState<T>(null as T);

  let query: string | null = null;
  if (typeof window !== 'undefined') {
    query = window.location.search;
  }

  useEffect(() => {
    const { q } = qs.parse(query || '');
    const target = q || 'all';
    setSelectedQuery(target as T);
  }, [query]);

  return [selectedQuery];
};

export default useQuery;
