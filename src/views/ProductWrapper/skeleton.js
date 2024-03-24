import { ProductSkeletonSwiper } from "@/components/Swiper/ProductSwiper/skeleton";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Divider } from "@mui/material";
import { ProductDetailSkeleton } from "../ProductDetails/skeleton";

export const ProductSkeletonWrapper = () => {
  const { tabmobView } = useMediaQueries();

  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={!tabmobView && ".15fr 1fr 1fr"}
      >
        <ProductSkeletonSwiper />
        <ProductDetailSkeleton />
      </Box>
      <Divider sx={{ mt: "4rem" }} />
    </>
  );
};
