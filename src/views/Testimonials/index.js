import { NavSwiper } from "@/components/Swiper/NavSwiper";
import { Viewbox } from "@/components/Viewbox";
import { Divider, Stack, Typography } from "@mui/material";

const sample = [
  {
    comment:
      "When a beautiful design is combined with powerful technology, it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the awesome product.",
    user: "Natalie",
    profession: "CEO",
    img: "/assets/dp2.jpg",
  },
  {
    comment:
      "As a plant enthusiast, I was thrilled to stumble upon this website. Not only does it offer a wide variety of plants, but the user experience is seamless. Shopping here has become a delightful habit for me!",
    user: "Michael",
    profession: "Botanist",
    img: "/assets/dp1.jpg",
  },

  {
    comment:
      "I've been searching for a reliable online store to purchase plants for my home garden, and I'm so glad I found this one. The selection is fantastic, the prices are reasonable, and the website is easy to navigate. Highly recommended!",
    user: "Sophia",
    profession: "Home Gardener",
    img: "/assets/dp3.jpg",
  },

  {
    comment:
      "This website has made my plant shopping experience so much better. The interface is intuitive, the checkout process is smooth, and the plants I received were healthy and well-packaged. Will definitely be coming back for more!",
    user: "David",
    profession: "Plant Enthusiast",
    img: "/assets/dp4.jpg",
  },
];

export const Testimonials = () => {
  return (
    <Viewbox sx={{ py: "2rem" }}>
      <Stack flexDirection={"column"} alignItems={"center"}>
        <Typography
          variant="h3"
          fontWeight={400}
          textAlign={"center"}
          gutterBottom
        >
          What our Customers Says?
        </Typography>
        <Divider
          sx={{
            width: "10rem",
            borderBottomWidth: "2px",
            borderColor: "customColors.main",
          }}
        />
        <NavSwiper reviewData={sample} />
      </Stack>
    </Viewbox>
  );
};
