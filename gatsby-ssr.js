import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/state/store";

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
