import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styled from "styled-components";

const Article = styled.article`
  margin: 10rem auto 0 auto;
  color: var(--textColor);
  font-size: 17.6px;
  line-height: 1.7;
`;

Article.Header = Header;
Article.Body = Body;
Article.Footer = Footer;

export default Article;
