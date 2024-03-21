import { PopoverWrapper } from "@/components/MenuBox/Popover";
import { FmdGood } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClose = () => setIsOpen(null);

  return (
    <Fragment>
      <IconButton
        aria-describedby="location-popover"
        onMouseEnter={(e) => setIsOpen(e.currentTarget)}
        onMouseLeave={handleClose}
      >
        <FmdGood className="dual" />
      </IconButton>
      <PopoverWrapper
        open={isOpen}
        close={(e) => setIsOpen(e.currentTarget)}
        id={"location-popover"}
      >
        <Box textAlign={"center"}>
          <Typography>
            Discover nearby local stores! <br />
            <span style={{ fontWeight: 800 }}>Log in</span> now
          </Typography>
        </Box>
      </PopoverWrapper>
    </Fragment>
  );
};
