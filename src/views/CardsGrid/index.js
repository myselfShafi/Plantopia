import { FilterAccrd } from "@/components/Accordians/FilterAccrd";
import { CustomCard } from "@/components/Cards";
import { useContextSetting } from "@/hooks/useContextTheme";
import { Collapse, Grid, Stack } from "@mui/material";

export const CardGrid = () => {
  const { filterOn } = useContextSetting();

  return (
    <Stack flexDirection={"row"} columnGap={2} position={"relative"}>
      <Collapse
        orientation="horizontal"
        in={filterOn}
        sx={{
          mt: "5rem",
          width: filterOn && "20% !important",
          "& .MuiCollapse-wrapper": { display: "block" },
        }}
      >
        <FilterAccrd />
      </Collapse>
      <Grid container spacing={4} my={1}>
        {[...Array(12)].map((list, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6} lg={4}>
              <CustomCard />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
