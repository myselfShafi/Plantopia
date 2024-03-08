import { FilterAccrd } from "@/components/Accordians/FilterAccrd";
import { CustomCard } from "@/components/Cards";
import { useContextSetting } from "@/hooks/useContextTheme";
import styled from "@emotion/styled";
import { Collapse, Grid, Paper, Stack } from "@mui/material";

export const CardGrid = () => {
  const { filterOn, toggleFilter } = useContextSetting();
  const FilterBox = styled(Paper)(({ theme }) => ({
    marginTop: "3rem",
    width: "100%",
    background: "transparent",
  }));
  return (
    <Stack flexDirection={"row"} columnGap={2} position={"relative"}>
      <Collapse orientation="horizontal" in={filterOn}>
        <FilterBox>
          <FilterAccrd />
        </FilterBox>
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
