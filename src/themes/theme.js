import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import BreakPoints from "./breakpoints";
import overrides from "./overrides";
import Palette from "./palette";
import Typography from "./typography";

const themeOption = (mode) => {
  return deepmerge({
    palette: Palette(mode),
    breakpoints: BreakPoints(),
    typography: Typography,
    components: {
      ...overrides,
    },
  });
};

export const ThemeComponent = ({ children, mode }) => {
  const theme = createTheme(themeOption(mode));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// ----------------------------------------testing purpose --------------------------------//

export const theme = createTheme({
  palette: Palette(),
  breakpoints: BreakPoints(),
  typography: Typography,
  components: {
    ...overrides,
  },
});
