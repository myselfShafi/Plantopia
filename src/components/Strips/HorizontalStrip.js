import { Box, Typography } from "@mui/material";

export const HorizontalStrip = () => {
  return (
    <Box my={"8rem"} bgcolor={"customColors.main"} className={"strip-box"}>
      {[1, 2].map((num) => (
        <Box className={"slider"} key={num}>
          <Typography
            variant="h1"
            p={"1.5rem"}
            children={"FLASH SALE  💥 50% off 💥 SHOP NOW! 👜 "}
            color={"background.paper"}
            letterSpacing={"1rem"}
          />
        </Box>
      ))}
    </Box>
  );
};
