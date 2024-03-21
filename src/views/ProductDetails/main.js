import { CustomRating } from "@/components/CustomRating";
import { QuantitySelect } from "@/components/QuantityBlock";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { getDiscountPercent } from "@/utils/getDiscountPercent";
import { Favorite } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { CareInfo } from "./careInfo";
import { DeliveryInfo } from "./deliveryInfo";
import { OfferInfo } from "./offerInfo";

export const ProductDetail = ({ data }) => {
  const { name, scientific, water, sunlight, usage, price, discount } = data;
  const { tabmobView, laptabmobView } = useMediaQueries();
  const percent = getDiscountPercent(price, discount);
  return (
    <Box
      mx={tabmobView ? "1rem" : "5rem"}
      my={tabmobView && "2.5rem"}
      position={"absolute"}
      sx={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <Typography variant="h4" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {scientific}
      </Typography>
      <CustomRating readOnly my={"1rem"} isRating />
      <Stack
        flexDirection={laptabmobView ? "column" : "row"}
        alignItems={!laptabmobView && "center"}
        gap={"1rem"}
        mb={"1rem"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={"1rem"}>
          {discount && (
            <>
              <Paper elevation={0} square sx={{ p: ".5rem" }}>
                {percent}% off
              </Paper>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                INR ${price}
              </Typography>
            </>
          )}
          <Typography variant="h5">INR ${discount ?? price}</Typography>
        </Stack>
        <Typography color="text.secondary">
          (MRP inclusive of all taxes)
        </Typography>
      </Stack>
      <CareInfo info={{ water, sunlight, usage }} />
      <Divider sx={{ my: "2rem" }} />
      <QuantitySelect />
      <Stack flexDirection={"row"} gap={2} my={"2rem"}>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
        <Button variant="outlined">
          <Favorite />
        </Button>
      </Stack>
      <Button variant="outlined" fullWidth>
        Buy It Now
      </Button>
      <DeliveryInfo />
      <Divider sx={{ my: "2rem" }} />
      <OfferInfo />
    </Box>
  );
};
