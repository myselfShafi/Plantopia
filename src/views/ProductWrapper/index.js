import { ProductSwiper } from "@/components/Swiper/ProductSwiper";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box } from "@mui/material";
import { ProductDetail } from "../ProductDetails/main";

export const ProductWrapper = () => {
  const { mobView, tabmobView } = useMediaQueries();
  return (
    <Viewbox sx={{ maxWidth: mobView ? `100% !important` : `85% !important` }}>
      <Box
        display={"grid"}
        gridTemplateColumns={!tabmobView && ".15fr 1fr 1fr"}
      >
        <ProductSwiper />
        <ProductDetail />
      </Box>
    </Viewbox>
  );
};
