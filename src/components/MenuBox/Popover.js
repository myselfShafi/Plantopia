import { Popover } from "@mui/material";

export const PopoverWrapper = ({ id, open, close, children }) => {
  return (
    <Popover
      id={id}
      disableScrollLock
      sx={{
        pointerEvents: "none",
      }}
      open={Boolean(open)}
      anchorEl={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={close}
      disableRestoreFocus
    >
      {children}
    </Popover>
  );
};
