import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Blockquote, Code, PrismSetup } from "./constants/Element";

const components = {
  h1: Headings.myH1,
  h2: Headings.myH2,
  h3: Headings.myH3,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
