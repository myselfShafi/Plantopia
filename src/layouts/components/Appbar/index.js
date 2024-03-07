import { useContextTheme } from "@/hooks/useContextTheme";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import {
  LightMode,
  Login,
  NightsStay,
  SearchOutlined,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { Sidebar } from "../Sidebar";
import { TopStrip } from "../TopStrip";
import { CartDropdown } from "./CartDropdown";
import { LocationDropdown } from "./LocationDropdown";

export const Appbar = () => {
  const { lightMode, toggleTheme } = useContextTheme();
  const { tabmobView } = useMediaQueries();

  const navbtns = [
    {
      id: 1,
      btn: (
        <Tooltip title={"Sign Up/Log In"} arrow placement="left">
          <IconButton children={<Login className="dual" />} />
        </Tooltip>
      ),
    },
    { id: 2, btn: <LocationDropdown /> },
    { id: 3, btn: <CartDropdown /> },
    {
      id: 4,
      btn: (
        <IconButton
          children={
            lightMode ? (
              <NightsStay className="dual" />
            ) : (
              <LightMode className="dual" />
            )
          }
          onClick={() => toggleTheme(!lightMode)}
        />
      ),
    },
  ];

  const cartbtn = [
    {
      id: 1,
      btn: <ShoppingCartCheckout className="dual" />,
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
          {tabmobView ? (
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
                  <IconButton children={<SearchOutlined className="dual" />} />
                </InputAdornment>
              }
            />
          )}
          <Typography
            component={Link}
            variant="h3"
            mx={"1rem"}
            children={"Plantopia"}
            color={"customColors.main"}
            href={"/"}
          />
          <Box
            display={"flex"}
            justifyContent={tabmobView ? "flex-end" : "space-between"}
            justifySelf={"flex-end"}
            sx={{ width: "100%", maxWidth: "30rem" }}
          >
            {(tabmobView ? cartbtn : navbtns).map((btn) => {
              return <div key={btn.id}>{btn.btn}</div>;
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <TopStrip />
    </Box>
  );
};
