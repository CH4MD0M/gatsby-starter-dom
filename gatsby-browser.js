import React from "react";
import { MDXProvider } from "@mdx-js/react";

import PrismSetup from "./src/components/Element/PrismSetup";
require("katex/dist/katex.min.css");

const components = {
  pre: PrismSetup,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
