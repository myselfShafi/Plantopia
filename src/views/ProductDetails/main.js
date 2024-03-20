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
      <Typography variant="h4" children={name} gutterBottom />
      <Typography
        variant="body1"
        color="text.secondary"
        children={scientific}
      />
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
              <Paper
                children={`${percent}% off`}
                elevation={0}
                square
                sx={{ p: ".5rem" }}
              />
              <Typography
                children={`INR ${price}`}
                variant="h6"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              />
            </>
          )}
          <Typography variant="h5" children={`INR ${discount ?? price}`} />
        </Stack>
        <Typography
          children={`(MRP inclusive of all taxes)`}
          color="text.secondary"
        />
      </Stack>
      <CareInfo info={{ water, sunlight, usage }} />
      <Divider sx={{ my: "2rem" }} />
      <QuantitySelect />
      <Stack flexDirection={"row"} gap={2} my={"2rem"}>
        <Button children={"Add to Cart"} variant="contained" fullWidth />
        <Button children={<Favorite />} variant="outlined" />
      </Stack>
      <Button children={"Buy It Now"} variant="outlined" fullWidth />
      <DeliveryInfo />
      <Divider sx={{ my: "2rem" }} />
      <OfferInfo />
    </Box>
  );
};
