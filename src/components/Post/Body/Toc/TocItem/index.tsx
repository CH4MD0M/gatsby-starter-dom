import React, { useMemo } from 'react';

// CSS
import * as S from './style';

interface TocItemProps {
  id: string;
  tagName: string;
  isActive: boolean;
  onClick: (id: string) => void;
  children: React.ReactNode;
}

const TocItem = React.memo(
  ({ id, tagName, isActive, onClick, children }: TocItemProps) => {
    const margin = useMemo(() => {
      switch (tagName) {
        case 'H1':
          return '0.5rem';
        case 'H2':
          return '1.7rem';
        case 'H3':
          return '3rem';
        default:
          return '0.5rem';
      }
    }, [tagName]);

    return (
      <S.TocItem active={isActive} ml={margin} onClick={() => onClick(id)}>
        {children}
      </S.TocItem>
    );
  },
);
export default TocItem;
