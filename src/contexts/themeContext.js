import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, toggleLightMode] = useState(false);

  const toggleTheme = (theme) => {
    toggleLightMode(theme);
  };

  const contextValue = { lightMode, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
