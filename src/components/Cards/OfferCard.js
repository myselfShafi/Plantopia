import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const OfferCard = ({ eachData }) => {
  const { title, detail } = eachData;
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography
            children={title}
            fontWeight={800}
            gutterBottom
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
          />
          <Typography
            children={detail}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
            gutterBottom
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
