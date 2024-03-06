import { Menu, MenuItem } from "@mui/material";

export const MenuWrapper = ({ open, close, children }) => {
  return (
    <Menu
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem
        disableRipple
        disableTouchRipple
        sx={{
          userSelect: "auto",
          padding: "5rem",
        }}
      >
        {children}
      </MenuItem>
    </Menu>
  );
};
