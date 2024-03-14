import { SlidersSwiper } from "@/components/Swiper/SlidersSwiper";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import icon4 from "../../../public/assets/icon4.png";

export const DeliveryInfo = () => {
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
      <Box position={"relative"}>
        <SlidersSwiper />
      </Box>
    </Box>
  );
};
