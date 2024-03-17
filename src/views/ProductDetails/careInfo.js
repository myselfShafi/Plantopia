import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";

export const CareInfo = ({ info }) => {
  const data = [
    { icon: icon1, value: info?.water },
    { icon: icon2, value: info?.sunlight },
    { icon: icon3, value: info?.usage },
  ];
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gap={2}>
      {data?.map((each, idx) => {
        return (
          each?.value && (
            <Stack
              key={idx}
              flexDirection={"row"}
              alignItems={"center"}
              gap={2}
            >
              <Image
                src={each?.icon}
                alt={each?.value}
                height={30}
                className="req-icon"
              />
              <Typography variant="subtitle1" children={each?.value} />
            </Stack>
          )
        );
      })}
    </Box>
  );
};
