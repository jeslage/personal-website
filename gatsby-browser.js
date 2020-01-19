import React from "react";
import ThemeProvider from "./src/contexts/themeProvider";
import GlobalStyle from "./src/stylesheets/global";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
