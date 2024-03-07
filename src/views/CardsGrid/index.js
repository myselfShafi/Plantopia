import { CustomCard } from "@/components/Cards";
import { Grid } from "@mui/material";

export const CardGrid = () => {
  return (
    <>
      <div>CardGrid</div>
      <Grid container spacing={2}>
        {[...Array(12)].map((list, idx) => {
          return (
            <Grid key={idx} item xs={4}>
              <CustomCard />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
