import React, { ChangeEvent, useRef, useCallback, useEffect } from 'react';

// CSS
import * as S from './style';

interface SearchBarProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChangeHandler }: SearchBarProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    if (key === '/') {
      event.preventDefault();
      searchInput.current?.focus();
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    searchInput.current?.focus();
  }, []);

  return (
    <div>
      <S.Input
        ref={searchInput}
        onChange={onChangeHandler}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
