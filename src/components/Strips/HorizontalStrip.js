import { Box, Typography } from "@mui/material";

export const HorizontalStrip = () => {
  return (
    <Box my={"8rem"} bgcolor={"customColors.main"} className={"strip-box"}>
      {[1, 2].map((num) => (
        <Box className={"slider"} key={num}>
          <Typography
            variant="h3"
            p={"1.5rem"}
            color={"background.paper"}
            letterSpacing={"1rem"}
          >
            FLASH SALE <span children={"💥"} /> 50% off <span children={"💥"} />{" "}
            SHOP NOW! 👜
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
