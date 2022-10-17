import React from "react";

import { siteUrl, description, author, socials } from "../../../blog-config";

// CSS
import * as S from "./style";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const profileImageRoot =
  typeof window !== "undefined" && window.location.host === "localhost:8000"
    ? "http://localhost:8000"
    : siteUrl;

const Link = ({ link, children }) => {
  if (!link) return null;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Bio = ({ path }) => {
  const { email, github, instagram, linkedIn } = socials;
  return (
    <S.Wrapper>
      <S.Profile className={path} profileImageRoot={profileImageRoot} />
      <div className={path + "-info"}>
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
    </S.Wrapper>
  );
};

export default Bio;
