import { ProductSwiper } from "@/components/Swiper/ProductSwiper";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Divider, styled } from "@mui/material";
import { ProductDetail } from "../ProductDetails/main";
import { ProductInfo } from "../ProductDetails/productInfo";

export const ProductWrapper = ({ data }) => {
  const { tabmobView } = useMediaQueries();

  const ScrollBox = styled(Box)({
    height: tabmobView && "50vh",
    position: "relative",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  });

  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={!tabmobView && ".15fr 1fr 1fr"}
      >
        <ProductSwiper data={data} />
        <ScrollBox>
          <ProductDetail data={data} />
        </ScrollBox>
      </Box>
      <Divider sx={{ mt: "4rem" }} />
      <ProductInfo data={data} />
      <Divider />
    </>
  );
};
