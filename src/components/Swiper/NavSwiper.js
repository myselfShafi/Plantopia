import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import icon from "../../../public/assets/icon00.png";

const ReviewComp = ({ data }) => {
  const { tabmobView } = useMediaQueries();
  const StyledBox = styled(Stack)({
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <StyledBox height={"100%"} gap={"2rem"}>
      <Box>
        <Image
          src={icon}
          height={200}
          width={200}
          alt="quotes"
          style={{ width: "unset", height: "unset", position: "relative" }}
        />
      </Box>
      <Typography
        variant="h5"
        fontWeight={300}
        letterSpacing={".15rem"}
        maxWidth={tabmobView ? "100%" : "60%"}
        fontStyle={"italic"}
        textAlign={"center"}
        children={`“ ${data.comment} ”`}
        gutterBottom
      />
      <StyledBox gap={"1rem"}>
        <Avatar
          alt="random_person_1"
          src={data.img}
          sx={{ width: "150px", height: "150px" }}
        />
        <Typography
          variant="subtitle1"
          textTransform={"uppercase"}
          children={`${data.user} | ${data.profession}`}
        />
      </StyledBox>
    </StyledBox>
  );
};

export const NavSwiper = ({ reviewData }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="navSwiper" loop>
      {reviewData.map((data, idx) => {
        return (
          <SwiperSlide key={idx}>
            <ReviewComp data={data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
