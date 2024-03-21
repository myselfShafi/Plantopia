import CustomBreadcrumb from "@/components/Breadcrumb";
import { Gridlist } from "@/components/GridList";
import { Viewbox } from "@/components/Viewbox";
import { images } from "@/content/categoryImgs";
import { Typography } from "@mui/material";
import { Fragment } from "react";

export default function Categories() {
  return (
    <Fragment>
      <CustomBreadcrumb />
      <Viewbox>
        <Typography textAlign={"center"} variant="h4" mb={"3rem"}>
          Pick a category to explore
        </Typography>
        <Typography
          textAlign={"center"}
          margin={"0 auto"}
          variant="body1"
          maxWidth={"60%"}
          mb={"3rem"}
        >
          Explore our diverse range of lush greenery for your indoor or outdoor
          spaces. From vibrant flowers to elegant succulents, we have something
          for every plant lover. Select the category you wish to browse and add
          a touch of nature to your surroundings.
        </Typography>

        <Gridlist itemData={images} />
      </Viewbox>
    </Fragment>
  );
}
