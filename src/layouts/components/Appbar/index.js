import { useContextTheme } from "@/hooks/useContextTheme";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Sidebar } from "../Sidebar";
import { TopStrip } from "../TopStrip";

export const Appbar = () => {
  const { lightMode, toggleTheme } = useContextTheme();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  const navbtns = [
    { id: 1, btn: <Login /> },
    { id: 2, btn: <FmdGood /> },
    {
      id: 3,
      btn: <Badge badgeContent={4} children={<ShoppingCartCheckout />} />,
    },
    {
      id: 4,
      btn: lightMode ? <NightsStay /> : <LightMode />,
      onclick: () => toggleTheme(!lightMode),
    },
  ];

  const cartbtn = [
    {
      id: 1,
      btn: <ShoppingCartCheckout />,
    },
  ];

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
        sx={{
          backgroundColor: "inherit",
          padding: "2.5rem",
        }}
        color="default"
      >
        <Toolbar
          disableGutters
          sx={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}
        >
          {mobileView ? (
            <Sidebar />
          ) : (
            <OutlinedInput
              placeholder={"Looking for something green?"}
              sx={{
                width: "100%",
                maxWidth: "30rem",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton children={<SearchOutlined />} />
                </InputAdornment>
              }
            />
          )}
          <Typography
            variant="h3"
            mx={"1rem"}
            children={"Plantopia"}
            color={"customColors.main"}
          />
          <Box
            display={"flex"}
            justifyContent={mobileView ? "flex-end" : "space-between"}
            justifySelf={"flex-end"}
            sx={{ width: "100%", maxWidth: "30rem" }}
          >
            {(mobileView ? cartbtn : navbtns).map((btn) => {
              return (
                <IconButton
                  children={btn.btn}
                  onClick={btn?.onclick}
                  key={btn.id}
                />
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <TopStrip />
    </Box>
  );
};
