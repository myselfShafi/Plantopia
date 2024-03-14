import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const OfferCard = () => {
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography children={"No Cost EMI"} fontWeight={800} gutterBottom />
          <Typography
            children={
              "Upto ₹1,340.00 EMI interest savings on select Credit Cards, Amazon Pay LaterUpto ₹1,340.00 EMI interest savings on select Credit Cards"
            }
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
