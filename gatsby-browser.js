import React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  Blockquote,
  Codeblock,
  Headings,
  PrismSetup,
} from "./src/components/element";

const components = {
  h1: Headings.myH1,
  h2: Headings.myH2,
  h3: Headings.myH3,
  inlineCode: Codeblock,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
