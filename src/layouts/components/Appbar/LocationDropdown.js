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
        children={<FmdGood className="dual" />}
        onMouseEnter={(e) => setIsOpen(e.currentTarget)}
        onMouseLeave={handleClose}
      />
      <PopoverWrapper
        open={isOpen}
        close={(e) => setIsOpen(e.currentTarget)}
        id={"location-popover"}
      >
        <Box textAlign={"center"}>
          <Typography>
            Discover nearby local stores! <br />
            <span children={"Log in"} style={{ fontWeight: 800 }} /> now
          </Typography>
        </Box>
      </PopoverWrapper>
    </Fragment>
  );
};
