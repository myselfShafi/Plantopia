import { FilterAccrd } from "@/components/Accordians/FilterAccrd";
import { CustomCard } from "@/components/Cards";
import { useContextSetting } from "@/hooks/useContextTheme";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Collapse, Grid, Stack } from "@mui/material";

export const CardGrid = ({ data }) => {
  const { filterOn } = useContextSetting();
  const { tabmobView } = useMediaQueries();

  return (
    <Stack
      flexDirection={"row"}
      columnGap={filterOn && 2}
      position={"relative"}
    >
      {!tabmobView && (
        <Collapse
          orientation="horizontal"
          in={filterOn}
          sx={{
            mt: "5rem",
            width: filterOn && "15% !important",
            "& .MuiCollapse-wrapper": { display: "block" },
          }}
        >
          <FilterAccrd />
        </Collapse>
      )}
      <Grid container spacing={4} my={1}>
        {data?.map((eachdata, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6} lg={4}>
              <CustomCard data={eachdata} />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
