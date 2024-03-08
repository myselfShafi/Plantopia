import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import icon1 from "../../../public/assests/icon1.png";
import icon2 from "../../../public/assests/icon2.png";
import png1 from "../../../public/assests/png4.png";
import { CustomRating } from "../CustomRating";

export const CustomCard = () => {
  const requirements = [
    {
      icon: icon1,
      text: "Daily",
    },
    {
      icon: icon2,
      text: "Frequently",
    },
  ];
  return (
    <Card>
      <CardContent>
        <Box className={"card-overlay"}>
          <Card className="img-card">
            <Image
              src={png1}
              alt="plants-card"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Card>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={800}
            children={"Indoor Plant 1"}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
            children={"Scientific title of Plant"}
            mb={"1rem"}
          />
        </Box>

        <Typography
          color="customColors.main"
          fontWeight={800}
          children={"INR 399"}
          sx={{ float: "right" }}
        />
        <CustomRating />
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
          {requirements.map((list, idx) => {
            return (
              <Stack
                key={idx}
                flexDirection={"row"}
                alignItems={"center"}
                columnGap={1}
              >
                <Image
                  src={list.icon}
                  alt={list.text}
                  height={25}
                  className="req-icon"
                />
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  children={list.text}
                  className="req-text"
                />
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          children={"View Product"}
          variant="contained"
          color="success"
        />
      </CardActions>
    </Card>
  );
};
