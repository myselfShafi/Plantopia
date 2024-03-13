import { useMediaQuery, useTheme } from "@mui/material";

export const useMediaQueries = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const tabmobView = useMediaQuery(theme.breakpoints.down("md"));
  const mobView = useMediaQuery(theme.breakpoints.down("sm"));
  const laptabmobView = useMediaQuery(theme.breakpoints.down("lg"));

  return { tabView, mobView, tabmobView, laptabmobView };
};
