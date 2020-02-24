import PropTypes from "prop-types";
import React, { useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(0);

  const colors = [
    { color: "#f4f4f4", background: "#222" },
    { color: "#fbe9a0", background: "#00135c" },
    { color: "#4f313f", background: "#b3d1c3" },
    { color: "#222", background: "#f4f4f4" },
    { color: "#edc5b5", background: "#153d4d" },
    { color: "#203f7b", background: "#e3c387" }
  ];

  const toggleColorTheme = () => {
    if (colorTheme + 1 <= colors.length - 1) {
      setColorTheme(prev => prev + 1);
    } else {
      setColorTheme(0);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleColorTheme
      }}
    >
      <StyledComponentsThemeProvider
        theme={{
          adaptiveModularScale: {
            ratio: [1.2, 1.67],
            base: [16, 16],
            width: [375, 1440],
            breakpoints: 10
          },
          ...colors[colorTheme]
        }}
      >
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export const PatternConsumer = ThemeContext.Consumer;

ThemeProvider.propTypes = {
  children: PropTypes.node
};

ThemeProvider.defaultProps = {
  children: ""
};

export default ThemeProvider;
