import React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  Headings,
  Codeblock,
  Blockquote,
  PrismSetup,
} from "./src/components/Element";

require("katex/dist/katex.min.css");

const components = {
  // h1: Headings.myH1,
  // h2: Headings.myH2,
  // h3: Headings.myH3,
  inlineCode: Codeblock,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
