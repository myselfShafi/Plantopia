import { useContextTheme } from "@/hooks/useContextTheme";
import { LightMode, Login, NightsStay, SortRounded } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Menulist } from "../Menubar";

export const Sidebar = () => {
  const { lightMode, toggleTheme } = useContextTheme();

  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ width: "fit-content" }}>
        <SortRounded className="dual" />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        disableScrollLock
      >
        <Box
          bgcolor={"customColors.main"}
          height={"100%"}
          width={"70vw"}
          p={"2rem"}
        >
          <Menulist onClick={() => setOpen(false)} className={"toggleColor"} />
          <Stack color={"background.paper"} rowGap={"2rem"}>
            <IconButton>
              <Login className="stripIcon" />
            </IconButton>
            <IconButton onClick={() => toggleTheme(!lightMode)}>
              {lightMode ? (
                <NightsStay className="stripIcon" />
              ) : (
                <LightMode className="stripIcon" />
              )}
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
