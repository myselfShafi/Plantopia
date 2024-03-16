import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";

export const CareInfo = () => {
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gap={2}>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Image src={icon1} alt={"water"} height={30} className="req-icon" />
        <Typography variant="subtitle1" children={"2-3 times a day"} />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Image src={icon2} alt={"water"} height={30} className="req-icon" />
        <Typography variant="subtitle1" children={"2-3 times a day"} />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Image src={icon3} alt={"water"} height={30} className="req-icon" />
        <Typography variant="subtitle1" children={"2-3 times a day"} />
      </Stack>
    </Box>
  );
};
