import { LightMode, NightsStay, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";

export const Appbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "2rem",
        position: "relative",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
        }}
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
          <Typography variant="h1" children={"Plantopia"} />
          <Box display={"flex"} justifyContent={"flex-end"}>
            <IconButton children={<NightsStay />} />
            <IconButton children={<LightMode />} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
