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
import Link from "next/link";
import { useRouter } from "next/router";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import { CustomRating } from "../CustomRating";

const ReqComp = ({ icon, text }) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
      <Image src={icon} alt={text} height={25} className="req-icon" />
      <Typography
        variant="subtitle2"
        color="text.primary"
        children={text}
        className="req-text"
      />
    </Stack>
  );
};

export const CustomCard = ({ data }) => {
  const {
    query: { category },
  } = useRouter();

  const requirements = [
    {
      icon: icon1,
      text: data.water,
    },
    {
      icon: icon2,
      text: data.sunlight,
    },
  ];
  return (
    <Card>
      <CardContent>
        <Box className={"card-overlay"}>
          <Card className="img-card">
            <Image
              src={data.imgURL}
              alt={data.name}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </Card>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={800}
            children={data.name}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
            children={data.scientific}
            mb={"1rem"}
          />
        </Box>

        <Typography
          color="customColors.main"
          fontWeight={800}
          children={`INR ${data.price}`}
          sx={{ float: "right" }}
        />
        <CustomRating />
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
          {data.usage ? (
            <ReqComp icon={icon3} text={data?.usage} />
          ) : (
            requirements.map((list, idx) => {
              return (
                <div key={idx}>
                  <ReqComp icon={list.icon} text={list?.text} />
                </div>
              );
            })
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          children={"View Product"}
          variant="contained"
          color="success"
          LinkComponent={Link}
          href={`/category/${category}/${data.uuid}`}
        />
      </CardActions>
    </Card>
  );
};
