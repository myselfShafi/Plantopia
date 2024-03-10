import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { menuItems } from "@/layouts/components/Menubar";
import { CardGrid } from "@/views/CardsGrid";
import { FilterBox } from "@/views/FilterBox";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Category({ params }) {
  const { asPath } = useRouter();
  const { title, data, info } = params;
  const { mobView } = useMediaQueries();

  const newTitle = [...titles, ...[{ label: title, href: asPath }]];

  const lorem = info
    ? info
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox>
        {mobView ? (
          <Accordion sx={{ mb: "5rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMore className="dual" />}
              children={
                <Typography
                  variant="h4"
                  textTransform={"capitalize"}
                  children={title}
                />
              }
            />
            <AccordionDetails
              children={<Typography variant="subtitle1" children={lorem} />}
            />
          </Accordion>
        ) : (
          <Box bgcolor={"background.paper"} p={"2rem"} mb={"5rem"}>
            <Typography
              variant="h4"
              textTransform={"capitalize"}
              children={title}
              mb={"1rem"}
            />
            <Typography variant="subtitle1" children={lorem} />
          </Box>
        )}
        <FilterBox />
        <CardGrid data={data} />
      </Viewbox>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { category },
  } = context;

  const dataList = await fetch(
    `http://localhost:3000/api/category/${category}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await dataList?.json();
  return {
    props: {
      params: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = menuItems.map((menu) => ({
    params: { category: menu.href.split("/").pop() },
  }));

  return { paths, fallback: false };
}
