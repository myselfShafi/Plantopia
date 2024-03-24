import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const MainSwiper = ({ data }) => {
  const { tabmobView } = useMediaQueries();
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
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <Image src={item.src} alt={item.alt ?? `image-${index}`} priority />
          {item?.content && (
            <Box
              position={"absolute"}
              sx={{
                ...item?.content.position,
                "& .MuiTypography-root": {
                  fontSize: tabmobView && "150%",
                },
              }}
            >
              {Object.entries(item.content.text).map(([key, value], idx) => (
                <Typography
                  key={idx}
                  variant={key.startsWith("h") ? key : "body1"}
                  gutterBottom
                  className="animate-content"
                >
                  {Array.isArray(value)
                    ? value.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))
                    : value}
                </Typography>
              ))}

              {item?.content.btn && (
                <Button
                  className="animate-content"
                  LinkComponent={Link}
                  variant="outlined"
                  sx={{ px: "1.5rem" }}
                  href="/category"
                >
                  {item?.content.btn}
                </Button>
              )}
            </Box>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
