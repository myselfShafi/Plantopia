import { useContextTheme } from "@/hooks/useContextTheme";
import { DragHandle, LightMode, Login, NightsStay } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Menulist } from "../Menubar";

export const Sidebar = () => {
  const { lightMode, toggleTheme } = useContextTheme();

  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        children={<DragHandle />}
        onClick={() => setOpen(true)}
        sx={{ width: "fit-content" }}
      />
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
            <IconButton children={<Login className="stripIcon" />} />
            <IconButton
              children={
                lightMode ? (
                  <NightsStay className="stripIcon" />
                ) : (
                  <LightMode className="stripIcon" />
                )
              }
              onClick={() => toggleTheme(!lightMode)}
            />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
