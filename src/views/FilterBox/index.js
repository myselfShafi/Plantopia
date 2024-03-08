import { useContextSetting } from "@/hooks/useContextTheme";
import { Tune } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";

export const FilterBox = () => {
  const { toggleFilter } = useContextSetting();
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
      {["View All", "In Stock", "Fast Delivered"].map((list, idx) => {
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
    </Stack>
  );
};
