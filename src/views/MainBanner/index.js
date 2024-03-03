import { MainSwiper } from "@/components/Swiper/MainSwiper";
import img1 from "../../../public/assests/1.jpg";
import img2 from "../../../public/assests/2.jpg";

import img3 from "../../../public/assests/3.jpg";

import img4 from "../../../public/assests/4.jpg";

export const MainBanner = () => {
  const images = [
    { id: 1, src: img1, alt: "banner-1" },
    { id: 2, src: img2, alt: "banner-2" },
    { id: 3, src: img3, alt: "banner-3" },
    { id: 4, src: img4, alt: "banner-4" },
  ];
  return <MainSwiper data={images} />;
};
