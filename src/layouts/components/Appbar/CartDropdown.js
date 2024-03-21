import { PopoverWrapper } from "@/components/MenuBox/Popover";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClose = () => setIsOpen(null);

  return (
    <Fragment>
      <IconButton
        aria-describedby="cart-popover"
        onMouseEnter={(e) => setIsOpen(e.currentTarget)}
        onMouseLeave={handleClose}
      >
        <Badge badgeContent={4}>
          <ShoppingCartCheckout className="dual" />
        </Badge>
      </IconButton>
      <PopoverWrapper open={isOpen} close={handleClose} id={"cart-popover"}>
        <Box textAlign={"center"}>
          <Typography fontWeight={800} mb={"1rem"}>
            Missing your fav plants?
          </Typography>
          <Typography>
            <span style={{ fontWeight: 800 }}>Log in</span> and discover any
            treasures you've added from another device to your shopping cart!
          </Typography>
        </Box>
      </PopoverWrapper>
    </Fragment>
  );
};
