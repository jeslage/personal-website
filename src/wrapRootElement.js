import React from "react";
import ThemeProvider from "./contexts/themeProvider";
import GlobalStyle from "./stylesheets/global";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
