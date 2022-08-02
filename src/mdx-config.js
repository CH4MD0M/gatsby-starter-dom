import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Headings,
  Blockquote,
  Codeblock,
  PrismSetup,
} from "./components/element";

const components = {
  h1: Headings.myH1,
  h2: Headings.myH2,
  h3: Headings.myH3,
  inlineCode: Codeblock,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
