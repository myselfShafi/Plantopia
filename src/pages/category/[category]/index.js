import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
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

export default function Category() {
  const router = useRouter();
  const { mobView } = useMediaQueries();
  const { category } = router.query;
  let currentLabel = category?.replaceAll("_", " ");

  const newTitle = [
    ...titles,
    ...[{ label: currentLabel, href: router.asPath }],
  ];

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox>
        {mobView ? (
          <Accordion
            sx={{ mb: "5rem", background: "background.paper" }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMore className="dual" />}
              children={
                <Typography
                  variant="h4"
                  textTransform={"capitalize"}
                  children={currentLabel}
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
              children={currentLabel}
              mb={"1rem"}
            />
            <Typography variant="subtitle1" children={lorem} />
          </Box>
        )}
        <FilterBox />
        <CardGrid />
      </Viewbox>
    </Fragment>
  );
}
