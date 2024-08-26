import { useState, useEffect } from 'react';
import qs from 'query-string';
import { isBrowser } from '@utils/isBrowser';

export const useQuery = <T extends string | null>(): [T] => {
  const [selectedQuery, setSelectedQuery] = useState<T>(null as T);

  let query: string | null = null;
  if (isBrowser) {
    query = window.location.search;
  }

  useEffect(() => {
    const { q } = qs.parse(query || '');
    const target = q || 'all';
    setSelectedQuery(target as T);
  }, [query]);

  return [selectedQuery];
};
