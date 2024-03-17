import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMediaQueries } from "@/hooks/useMediaQueries";
import Image from "next/image";
import png2 from "../../../public/assets/png2.png";
import png3 from "../../../public/assets/png3.png";
import png4 from "../../../public/assets/png4.png";

const SwiperComponent = ({ imgs, ...other }) => {
  const { tabmobView } = useMediaQueries();

  return (
    <Swiper
      spaceBetween={!tabmobView && 10}
      direction={tabmobView ? "horizontal" : "vertical"}
      {...other}
    >
      {[imgs, png2, png3, png4].map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image
              src={img}
              alt={`img-${img}`}
              width={500}
              height={500}
              style={{ objectFit: "contain", padding: "10%" }}
              priority
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const ProductSwiper = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { tabmobView } = useMediaQueries();

  return (
    <>
      {tabmobView ? (
        <>
          <SwiperComponent
            imgs={data?.imgURL}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          />
          <SwiperComponent
            imgs={data?.imgURL}
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
            imgs={data?.imgURL}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper1"
          />
          <SwiperComponent
            imgs={data?.imgURL}
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
