import styled from "styled-components";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Article = styled.article`
  color: var(--textColor);
  font-size: 17.6px;
  line-height: 1.7;
`;

Article.Header = Header;
Article.Body = Body;
Article.Footer = Footer;

export default Article;
