import { Gridlist } from "@/components/GridList";
import { Viewbox } from "@/components/Viewbox";
import { ExpandCircleDownOutlined } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import img1 from "../../../public/assets/01.jpg";
import img2 from "../../../public/assets/02.jpg";
import img3 from "../../../public/assets/03.jpg";
import img4 from "../../../public/assets/04.jpg";
import img5 from "../../../public/assets/05.jpg";
import img6 from "../../../public/assets/06.jpg";
import img7 from "../../../public/assets/07.jpg";
import img8 from "../../../public/assets/08.jpg";
import img9 from "../../../public/assets/09.jpg";
import img10 from "../../../public/assets/10.jpg";
import img11 from "../../../public/assets/11.jpg";

const images = [
  { id: 1, src: img1, title: "Indoor", href: "/category/indoor" },
  { id: 2, src: img2, title: "Outdoor", href: "/category/outdoor" },
  { id: 3, src: img5, title: "Floral", href: "/category/floral_plants" },
  { id: 4, src: img4, title: "Hangers", href: "/category/hangers" },
  { id: 5, src: img3, title: "Potted", href: "/category/potted" },
  { id: 6, src: img9, title: "Herbs", href: "/category/herbs" },
  { id: 7, src: img8, title: "Seasonal", href: "/category/seasonal_plants" },
  { id: 8, src: img6, title: "Seeds & Bulbs", href: "/category/seeds_&_bulbs" },
];

const images2 = [
  {
    id: 9,
    src: img7,
    title: "Accessories",
    href: "/category/plant_accessories",
  },
  {
    id: 10,
    src: img10,
    title: "Soil & Fertilizers",
    href: "/category/soil_&_fertilizers",
  },
  { id: 11, src: img11, title: "Edibles", href: "/category/edible_plants" },
];

const title = {
  main: "Discover your #plantstyle",
  text: "Transform your space with our curated collection of botanical wonders. From lush foliage to elegant blooms, find the perfect plant to complement your unique style. Explore nature-inspired decor and unleash your creativity with our diverse range of greenery. Find your unique #PlantStyle amidst a lush oasis of natural beauty.",
};

export const ContentGrid = () => {
  const [dataArr, setDataArr] = useState(images);

  const loadMore = () => {
    setDataArr((prevArr) => [...prevArr, ...images2]);
  };

  return (
    <Viewbox>
      <Typography variant="h3" children={title.main} mb={"3rem"} />
      <Typography variant="subtitle1" children={title.text} mb={"3rem"} />
      <Gridlist itemData={dataArr} />
      {dataArr.length !== images.length + images2.length && (
        <Paper elevation={0} className={"more-div"}>
          <Button
            children={"More"}
            variant="text"
            endIcon={<ExpandCircleDownOutlined />}
            size="large"
            sx={{
              textTransform: "capitalize",
              color: "customColors.main",
            }}
            onClick={loadMore}
          />
        </Paper>
      )}
    </Viewbox>
  );
};
