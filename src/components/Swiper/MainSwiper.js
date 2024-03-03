import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const MainSwiper = ({ data }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Image src={item.src} alt={item.alt ?? `image-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
