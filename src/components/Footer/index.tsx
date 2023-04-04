import React from 'react';

// CSS
import * as S from './style';

const Footer = ({ author }: { author: string }) => {
  return (
    <S.FooterWrapper>
      &copy; {new Date().getFullYear()}, {author}. Built with &nbsp;
      <a href="https://github.com/ch4md0m/gatsby-starter-dom" target="blank">
        gatsby-starter-dom
      </a>
    </S.FooterWrapper>
  );
};

export default Footer;
