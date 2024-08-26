import React from 'react';

import { useSiteMetaData } from '@hooks/useSiteMetaData';
import { isBrowser } from '@utils/isBrowser';

// CSS
import * as S from './style';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

interface LinkProps {
  link?: string;
  children: React.ReactNode;
}

const Link = ({ link, children }: LinkProps) => {
  if (!link) return null;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Bio = () => {
  const data = useSiteMetaData();
  const { siteUrl, description, author, socials } = data.site.siteMetadata;
  const { email, github, instagram } = socials;

  const profileImageRoot: string =
    isBrowser && window.location.host === 'localhost:8000'
      ? 'http://localhost:8000'
      : siteUrl;

  return (
    <S.BioWrapper>
      <S.Profile profileImageRoot={profileImageRoot} />
      <div>
        <S.Author>{author}</S.Author>
        <S.Description>{description}</S.Description>
        <S.LinksWrapper>
          <Link link={github}>
            <FaGithub />
          </Link>
          <Link link={instagram}>
            <FaInstagram />
          </Link>
          <Link link={email}>
            <FaEnvelope />
          </Link>
        </S.LinksWrapper>
      </div>
    </S.BioWrapper>
  );
};

export default Bio;
