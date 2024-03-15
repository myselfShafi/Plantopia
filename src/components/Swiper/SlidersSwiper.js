import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { SkipNextRounded, SkipPreviousRounded } from "@mui/icons-material";
import { Button, Stack, styled } from "@mui/material";
import { useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { OfferCard } from "../Cards/OfferCard";

const NavButtons = ({ start, end }) => {
  const swiper = useSwiper();
  const btn = [
    {
      id: 1,
      icon: <SkipPreviousRounded />,
      action: () => swiper.slidePrev(),
      position: start,
    },
    {
      id: 2,
      icon: <SkipNextRounded />,
      action: () => swiper.slideNext(),
      position: end,
    },
  ];

  const CustomStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    zIndex: 50,
    top: "50%",
    transform: "translateY(-50%)",
  }));

  return (
    <CustomStack>
      {btn.map((item) => {
        return (
          <Button
            key={item.id}
            sx={{ visibility: item.position ? "hidden" : "visible" }}
            className={"nav-btn"}
            variant="outlined"
            color="info"
            children={item.icon}
            onClick={item.action}
          />
        );
      })}
    </CustomStack>
  );
};

export const SlidersSwiper = ({ data }) => {
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode, Navigation]}
      onSlideChange={(swiper) => {
        setEnd(swiper.isEnd);
        setStart(swiper.isBeginning);
      }}
      className="sliderSwiper"
    >
      {data?.map((each, index) => {
        return (
          <SwiperSlide key={index} children={<OfferCard eachData={each} />} />
        );
      })}
      <NavButtons start={start} end={end} />
    </Swiper>
  );
};
