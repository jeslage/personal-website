import React from "react";
import ThemeProvider from "./contexts/themeProvider";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
