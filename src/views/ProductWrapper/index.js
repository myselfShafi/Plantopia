import { ProductSwiper } from "@/components/Swiper/ProductSwiper";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Divider, styled } from "@mui/material";
import { ProductDetail } from "../ProductDetails/main";
import { ProductInfo } from "../ProductDetails/productInfo";

export const ProductWrapper = () => {
  const { mobView, tabmobView } = useMediaQueries();

  const ScrollBox = styled(Box)({
    height: tabmobView && "50vh",
    position: "relative",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  });

  return (
    <Viewbox sx={{ maxWidth: mobView ? `100% !important` : `85% !important` }}>
      <Box
        display={"grid"}
        gridTemplateColumns={!tabmobView && ".15fr 1fr 1fr"}
      >
        <ProductSwiper />
        <ScrollBox>
          <ProductDetail />
        </ScrollBox>
      </Box>
      <Divider sx={{ mt: "4rem" }} />
      <ProductInfo />
    </Viewbox>
  );
};
