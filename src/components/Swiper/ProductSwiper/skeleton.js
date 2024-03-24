import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Skeleton } from "@mui/material";

const SwiperComponent = ({ imgs, ...other }) => {
  const { tabmobView } = useMediaQueries();

  return (
    <Swiper
      spaceBetween={!tabmobView && 10}
      direction={tabmobView ? "horizontal" : "vertical"}
      {...other}
    >
      {[1, 2, 3, 4].map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Skeleton
              variant="rectangular"
              height={"100%"}
              animation={"wave"}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const ProductSkeletonSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { tabmobView } = useMediaQueries();

  return (
    <>
      {tabmobView ? (
        <>
          <SwiperComponent
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          />
          <SwiperComponent
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper1"
          />
        </>
      ) : (
        <>
          <SwiperComponent
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper1"
          />
          <SwiperComponent
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          />
        </>
      )}
    </>
  );
};
