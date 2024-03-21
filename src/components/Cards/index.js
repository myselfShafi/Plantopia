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
      <Image
        src={icon}
        alt={text}
        height={25}
        width={25}
        className="req-icon"
      />
      <Typography variant="subtitle2" color="text.primary" className="req-text">
        {text}
      </Typography>
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
    <Card className="main-card">
      <CardContent className="content-card">
        <Box className={"card-overlay"}>
          <Card className="img-card">
            <Image
              src={data.imgURL}
              alt={data.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              style={{ objectFit: "contain", padding: "10%" }}
              priority
            />
          </Card>
          <Typography variant="h6" fontWeight={800}>
            {data.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {data.scientific}
          </Typography>
        </Box>
        <Box sx={{ float: "right" }}>
          {data.discount && (
            <Typography
              sx={{ textDecoration: "line-through" }}
            >{`INR ${data.price}`}</Typography>
          )}
          <Typography color="customColors.main" fontWeight={800}>{`INR ${
            data.discount ?? data.price
          }`}</Typography>
        </Box>
        <CustomRating size={"small"} isCard readOnly={true} mb={".5rem"} />
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
          {data.usage ? (
            <ReqComp icon={icon3} text={data?.usage} />
          ) : (
            requirements.map((list, idx) => {
              return (
                list?.text && (
                  <div key={idx}>
                    <ReqComp icon={list.icon} text={list?.text} />
                  </div>
                )
              );
            })
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          disableElevation
          variant="contained"
          LinkComponent={Link}
          href={`/category/${category}/${data.uuid}`}
        >
          {"View Product"}
        </Button>
      </CardActions>
    </Card>
  );
};
