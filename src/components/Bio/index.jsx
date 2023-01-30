import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// CSS
import * as S from './style';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Link = ({ link, children }) => {
  if (!link) return null;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const { siteUrl, description, author, socials } = data.site.siteMetadata;
  const { email, github, instagram, linkedIn } = socials;

  const profileImageRoot =
    typeof window !== 'undefined' && window.location.host === 'localhost:8000'
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
          <Link link={linkedIn}>
            <FaLinkedin />
          </Link>
          <Link link={email}>
            <FaEnvelope />
          </Link>
        </S.LinksWrapper>
      </div>
    </S.BioWrapper>
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        siteUrl
        author
        description
        socials {
          email
          github
          instagram
        }
      }
    }
  }
`;

export default Bio;
