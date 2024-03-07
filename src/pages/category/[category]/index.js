import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import { CardGrid } from "@/views/CardsGrid";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  let currentLabel = category?.replaceAll("_", " ");

  const newTitle = [
    ...titles,
    ...[{ label: currentLabel, href: router.asPath }],
  ];

  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox>
        <Typography
          variant="h4"
          textTransform={"capitalize"}
          children={currentLabel}
          mb={"3rem"}
        />
        <CardGrid />
      </Viewbox>
    </Fragment>
  );
}
