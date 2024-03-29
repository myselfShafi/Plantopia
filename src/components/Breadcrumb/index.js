import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Chip, Skeleton } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

export const titles = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/category",
  },
];

export default function CustomBreadcrumb({ currentPath }) {
  const arrayTags = currentPath ? currentPath : titles;
  const { mobView } = useMediaQueries();
  return (
    <Box p={mobView ? "0 2rem" : "2rem"}>
      <Breadcrumbs
        aria-label="custom-breadcrumb"
        separator={"|"}
        maxItems={mobView ? 2 : undefined}
      >
        {arrayTags?.map((list, idx) => {
          return list.label ? (
            <Chip
              key={idx}
              label={list.label}
              sx={{ textTransform: "capitalize" }}
              variant="outlined"
              size="small"
              className={arrayTags.length - 1 == idx ? "last-chip" : ""}
              component={Link}
              href={list.href}
            />
          ) : (
            <Skeleton
              key={idx}
              variant="rounded"
              width={"6vw"}
              height={"1.5rem"}
              animation={"wave"}
            />
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
