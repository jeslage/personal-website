import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => setColorScheme(), []);

  useEffect(() => window.localStorage.setItem("darkMode", darkMode), [
    darkMode
  ]);

  const colors = darkMode
    ? { color: "#f4f4f4", background: "#222" }
    : { color: "#222", background: "#f4f4f4" };

  const setColorScheme = () => {
    const { matchMedia, localStorage } = window;

    const scheme = mode => `(prefers-color-scheme: ${mode})`;

    const isSet = localStorage.getItem("darkMode");
    const isDark = matchMedia(scheme("dark")).matches;
    const isLight = matchMedia(scheme("light")).matches;
    const isUnknown = matchMedia(scheme("no-reference")).matches;
    const noSupport = !isDark && !isLight && !isUnknown;

    if (isSet) {
      setDarkMode(isSet === "true");
      return;
    }

    if (isDark) setDarkMode(true);
    if (isLight) setDarkMode(false);

    if (isUnknown || noSupport) {
      const now = new Date();
      const hour = now.getHours();

      if (hour < 4 || hour >= 16) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}
    >
      <StyledComponentsThemeProvider
        theme={{
          adaptiveModularScale: {
            ratio: [1.2, 1.67],
            base: [14, 16],
            width: [375, 1440],
            breakpoints: 10
          },
          ...colors
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
