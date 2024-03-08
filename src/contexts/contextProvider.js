import { SettingsProvider } from "./settingsContext";
import { ThemeProvider } from "./themeContext";

export const ContextProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </ThemeProvider>
  );
};
