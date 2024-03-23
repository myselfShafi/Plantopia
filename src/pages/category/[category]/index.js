import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { getAllCategories, getProductsByCategory } from "@/utils/getMockData";
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

  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox>
        {mobView ? (
          <Accordion sx={{ mb: "5rem" }}>
            <AccordionSummary expandIcon={<ExpandMore className="dual" />}>
              <Typography
                variant="h4"
                textTransform={"capitalize"}
                fontWeight={600}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">{info}</Typography>
            </AccordionDetails>
          </Accordion>
        ) : (
          <Box bgcolor={"background.paper"} p={"2rem"} mb={"5rem"}>
            <Typography
              variant="h4"
              textTransform={"capitalize"}
              mb={"1rem"}
              fontWeight={600}
            >
              {title}
            </Typography>
            <Typography variant="subtitle1">{info}</Typography>
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

  const dataList = await getProductsByCategory(category);
  return {
    props: {
      params: dataList,
    },
  };
}

export async function getStaticPaths() {
  const categories = getAllCategories();
  const paths = categories.map((menu) => ({
    params: { category: menu },
  }));
  return { paths, fallback: false };
}
