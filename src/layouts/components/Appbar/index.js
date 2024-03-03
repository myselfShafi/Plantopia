import { useTheme } from "@/hooks/useTheme";
import {
  FmdGood,
  LightMode,
  Login,
  NightsStay,
  SearchOutlined,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { TopStrip } from "../TopStrip";

export const Appbar = () => {
  const { lightMode, toggleTheme } = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "background.default", padding: "2rem" }}
        color="default"
      >
        <Toolbar
          disableGutters
          sx={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}
        >
          <OutlinedInput
            placeholder={"Search plants..."}
            sx={{ width: "40rem" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton children={<SearchOutlined />} />
              </InputAdornment>
            }
          />
          <Typography
            variant="h1"
            children={"Plantopia"}
            color={"customColors.main"}
          />
          <Box display={"flex"} justifyContent={"flex-end"} columnGap={"5rem"}>
            <IconButton children={<Login />} />
            <IconButton children={<FmdGood />} />
            <IconButton aria-label="cart">
              <Badge badgeContent={4} children={<ShoppingCartCheckout />} />
            </IconButton>
            <IconButton
              children={lightMode ? <NightsStay /> : <LightMode />}
              onClick={() => toggleTheme(!lightMode)}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <TopStrip />
    </Box>
  );
};
