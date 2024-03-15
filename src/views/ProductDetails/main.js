import { CustomRating } from "@/components/CustomRating";
import { QuantitySelect } from "@/components/QuantityBlock";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Favorite } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { DeliveryInfo } from "./deliveryInfo";
import { OfferInfo } from "./offerInfo";

export const ProductDetail = () => {
  const { tabmobView, laptabmobView } = useMediaQueries();
  return (
    <Box
      mx={tabmobView ? "1rem" : "5rem"}
      my={tabmobView && "2.5rem"}
      position={"absolute"}
      sx={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <Typography variant="h4" children={"Indoor Plant 1"} gutterBottom />
      <Typography
        variant="body1"
        color="text.secondary"
        children={"Scientific Plant Name"}
      />
      <CustomRating readOnly={true} my={"1rem"} />
      <Stack
        flexDirection={laptabmobView ? "column" : "row"}
        alignItems={!laptabmobView && "center"}
        gap={"1rem"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={"1rem"}>
          <Paper
            children={"20% off"}
            elevation={0}
            square
            sx={{ p: ".5rem" }}
          />
          <Typography
            children={`INR120`}
            variant="h6"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          />
          <Typography variant="h5" children={"INR100"} />
        </Stack>
        <Typography
          children={`(MRP inclusive of all taxes)`}
          color="text.secondary"
        />
      </Stack>
      <Divider sx={{ my: "2rem" }} />
      <QuantitySelect />
      <Stack flexDirection={"row"} gap={2} my={"2rem"}>
        <Button children={"Add to Cart"} variant="contained" fullWidth />
        <Button children={<Favorite />} variant="contained" />
      </Stack>
      <Button children={"Buy It Now"} variant="outlined" fullWidth />
      <DeliveryInfo />
      <Divider sx={{ my: "2rem" }} />
      <OfferInfo />
    </Box>
  );
};
