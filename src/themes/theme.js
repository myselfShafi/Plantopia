import { createTheme } from "@mui/material";
import BreakPoints from "./breakpoints";
import overrides from "./overrides";
import Palette from "./palette";
import Typography from "./typography";

export const theme = createTheme({
  palette: Palette(),
  breakpoints: BreakPoints(),
  typography: Typography,
  components: {
    ...overrides,
  },
});
