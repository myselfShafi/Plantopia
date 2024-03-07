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
        children={
          <Badge
            badgeContent={4}
            children={<ShoppingCartCheckout className="dual" />}
          />
        }
        onMouseEnter={(e) => setIsOpen(e.currentTarget)}
        onMouseLeave={handleClose}
      />
      <PopoverWrapper open={isOpen} close={handleClose} id={"cart-popover"}>
        <Box textAlign={"center"}>
          <Typography
            children={"Missing your fav plants?"}
            fontWeight={800}
            mb={"1rem"}
          />
          <Typography>
            <span children={"Log in"} style={{ fontWeight: 800 }} /> and
            discover any treasures you've added from another device to your
            shopping cart!
          </Typography>
        </Box>
      </PopoverWrapper>
    </Fragment>
  );
};
