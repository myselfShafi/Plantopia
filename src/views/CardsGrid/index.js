import { CustomCard } from "@/components/Cards";
import { Grid } from "@mui/material";

export const CardGrid = () => {
  return (
    <Grid container spacing={4} rowSpacing={6}>
      {[...Array(12)].map((list, idx) => {
        return (
          <Grid key={idx} item xs={12} sm={6} lg={4}>
            <CustomCard />
          </Grid>
        );
      })}
    </Grid>
  );
};
