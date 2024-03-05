import { Gridlist } from "@/components/GridList";
import { Box, Button, Paper, Typography } from "@mui/material";
import img1 from "../../../public/assests/01.jpg";
import img2 from "../../../public/assests/02.jpg";

import img3 from "../../../public/assests/03.jpg";

import { ExpandCircleDownOutlined } from "@mui/icons-material";
import { useState } from "react";
import img4 from "../../../public/assests/04.jpg";
import img5 from "../../../public/assests/05.jpg";
import img6 from "../../../public/assests/06.jpg";
import img7 from "../../../public/assests/07.jpg";
import img8 from "../../../public/assests/08.jpg";
import img9 from "../../../public/assests/09.jpg";
import img10 from "../../../public/assests/10.jpg";
import img11 from "../../../public/assests/11.jpg";

const images = [
  { id: 1, src: img1, title: "Indoor" },
  { id: 2, src: img2, title: "Outdoor" },
  { id: 3, src: img5, title: "Floral" },

  { id: 4, src: img4, title: "Hangers" },
  { id: 5, src: img3, title: "Potted" },

  { id: 6, src: img9, title: "Herbs" },

  { id: 7, src: img8, title: "Seasonal" },
  { id: 8, src: img6, title: "Seeds & Bulbs" },
  { id: 9, src: img7, title: "Accesories" },
  { id: 10, src: img10, title: "Soil & Fertilizers" },
  { id: 11, src: img11, title: "Edibles" },
];

const title = {
  main: "Discover your #plantstyle",
  text: "Transform your space with our curated collection of botanical wonders. From lush foliage to elegant blooms, find the perfect plant to complement your unique style. Explore nature-inspired decor and unleash your creativity with our diverse range of greenery. Find your unique #PlantStyle amidst a lush oasis of natural beauty.",
};

export const ContentGrid = () => {
  const [dataArr, setDataArr] = useState(9);

  const imgSliced = images.slice(0, dataArr);
  return (
    <Box
      sx={{
        maxWidth: "75%",
        width: "100%",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Typography variant="h2" children={title.main} mb={"3rem"} />
      <Typography variant="h5" children={title.text} mb={"3rem"} />
      <Gridlist itemData={imgSliced} />
      {imgSliced.length !== images.length && (
        <Paper elevation={0} className={"more-div"}>
          <Button
            children={"More"}
            variant="text"
            endIcon={<ExpandCircleDownOutlined />}
            sx={{
              fontSize: "3rem",
              textTransform: "capitalize",
              color: "customColors.main",
            }}
            onClick={() => setDataArr(dataArr + dataArr)}
          />
        </Paper>
      )}
    </Box>
  );
};
