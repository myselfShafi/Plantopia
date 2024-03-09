import { FilterAccrd } from "@/components/Accordians/FilterAccrd";
import { useContextSetting } from "@/hooks/useContextTheme";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Tune } from "@mui/icons-material";
import { Button, Stack, SwipeableDrawer, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FilterBox = () => {
  const { filterOn, toggleFilter } = useContextSetting();
  const { mobView } = useMediaQueries();
  return (
    <Stack flexDirection={"row"} columnGap={3}>
      <Box
        flexGrow={1}
        children={
          <Button
            variant="text"
            startIcon={<Tune className={"dual"} />}
            children={"filter"}
            size="small"
            sx={{ color: "customColors.main" }}
            onClick={toggleFilter}
          />
        }
      />
      {!mobView &&
        ["View All", "In Stock", "Fast Delivered"].map((list, idx) => {
          return (
            <Button
              key={idx}
              variant="outlined"
              children={list}
              size="small"
              sx={{ color: "text.secondary" }}
            />
          );
        })}

      {mobView && (
        <SwipeableDrawer
          anchor="bottom"
          open={filterOn}
          onClose={() => toggleFilter()}
          onOpen={() => toggleFilter()}
          swipeAreaWidth={100}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              height: "50%",
              borderRadius: "1rem 1rem 0 0",
            },
          }}
        >
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            m={"2rem"}
          >
            <Typography children={"Filter By"} variant="h4" />
            <Button variant="outlined" children={"Apply"} />
          </Stack>
          <FilterAccrd />
        </SwipeableDrawer>
      )}
    </Stack>
  );
};
