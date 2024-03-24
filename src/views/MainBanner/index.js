import { MainSwiper } from "@/components/Swiper/MainSwiper";
import img1 from "../../../public/assets/1.jpg";
import img2 from "../../../public/assets/6.jpg";

import img3 from "../../../public/assets/3.jpg";

import img4 from "../../../public/assets/2.jpg";

export const MainBanner = () => {
  const images = [
    {
      id: 1,
      src: img2,
      alt: "banner-2",
      content: {
        text: {
          h1: "Cactus Decoration",
          h5: "Discount 20% off for Plantopia Members",
        },
        btn: "Discover Now",
        position: {
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        },
      },
    },
    {
      id: 2,
      src: img3,
      alt: "banner-3",
      content: {
        text: {
          h1: ["Buy the", "Best Plants", "in town"],
        },
        btn: "Shop Now",
        position: {
          top: "30%",
          right: "10%",
          color: "customColors.light",
        },
      },
    },
    {
      id: 3,
      src: img4,
      alt: "banner-4",
    },
    {
      id: 4,
      src: img1,
      alt: "banner-1",
      content: {
        text: {
          h2: ["Create a", "tropical interior", "in your house"],
        },
        btn: "Explore More",
        position: {
          bottom: "10%",
          right: "10%",
          textAlign: "end",
          color: "customColors.light",
          justifyContent: "revert-layer",
        },
      },
    },
  ];
  return <MainSwiper data={images} />;
};
