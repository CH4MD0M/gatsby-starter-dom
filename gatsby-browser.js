import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Provider } from "react-redux";
import { store } from "./src/state/store";

import PrismSetup from "./src/components/Element/PrismSetup";
require("katex/dist/katex.min.css");

const components = {
  pre: PrismSetup,
};

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </Provider>
);
