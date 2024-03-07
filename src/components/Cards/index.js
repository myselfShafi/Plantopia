import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import png1 from "../../../public/assests/png4.png";
import { CustomRating } from "../CustomRating";

export const CustomCard = () => {
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
