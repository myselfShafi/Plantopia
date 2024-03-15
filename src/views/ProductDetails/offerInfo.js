import { SlidersSwiper } from "@/components/Swiper/SlidersSwiper";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import icon4 from "../../../public/assets/icon4.png";

const offers = [
  {
    title: "Combo Deals",
    detail:
      "Buy any two plants and get 10% off on your total purchase. Limited time deal.",
  },
  {
    title: "Bank Offer",
    detail:
      "Upto ₹800.00 discount on select Credit Cards, select Debit Cards for transactions done above ₹2000.00",
  },
  {
    title: "Loyalty points",
    detail:
      "Earn 1 point for every ₹10 spent. Redeem 100 points for a ₹50 discount on your next purchase.",
  },
  {
    title: "No Cost EMI",
    detail:
      "Upto ₹1,340.00 EMI interest savings on select Credit Cards, Amazon Pay LaterUpto ₹1,340.00 EMI interest savings on select Credit Cards",
  },
  {
    title: "Subscribe & Save",
    detail:
      "Subscribe to our monthly plant delivery service and get 15% off your first month",
  },
];

export const OfferInfo = () => {
  return (
    <Box>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={1.5}
        mb={"1.5rem"}
      >
        <Image src={icon4} alt="discount" height={30} />
        <Typography children={"Offers"} variant="subtitle1" fontWeight={800} />
      </Stack>
      <Box position={"relative"} height={"12rem"}>
        <SlidersSwiper data={offers} />
      </Box>
    </Box>
  );
};
