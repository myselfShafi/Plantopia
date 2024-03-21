import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const OfferCard = ({ eachData }) => {
  const { title, detail } = eachData;
  return (
    <Card variant="outlined" sx={{ p: 0 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            fontWeight={800}
            gutterBottom
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
          >
            {title}
          </Typography>
          <Typography
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
            gutterBottom
          >
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
