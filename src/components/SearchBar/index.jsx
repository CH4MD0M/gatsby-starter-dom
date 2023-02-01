import React, { useCallback, useEffect, useRef } from 'react';

// CSS
import * as S from './style';

const SearchBar = ({ onChangeHandler }) => {
  const searchInput = useRef(null);

  const handleKeyDown = useCallback(event => {
    const { keyCode } = event;
    if (keyCode === 191) {
      event.preventDefault();
      searchInput.current.focus();
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
    searchInput.current.focus();
  }, []);

  return (
    <S.SearchContainer>
      <S.Input
        ref={searchInput}
        onChange={onChangeHandler}
        placeholder="Search..."
      />
    </S.SearchContainer>
  );
};

export default SearchBar;
