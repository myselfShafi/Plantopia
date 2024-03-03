import { ThemeProvider } from "./themeContext";

export const ContextProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
