import { CommentPanel } from "@/components/CustomPanels/commentPanel";
import { CustomRating } from "@/components/CustomRating";
import { CommentFilter } from "@/components/CustomSelect/commentFilter";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const samples = [
  {
    rating: "4.8",
    subject: "Fantastic!",
    comment:
      "Received my plant in perfect condition, thanks to the excellent packaging. It's thriving beautifully in my garden. Couldn't be happier!",
    user: "HappyGardener22",
    comment_date: "25 Feb 2024",
  },

  {
    rating: "4.5",
    subject: "Impressed",
    comment:
      "The plant arrived promptly and was packed with care. It's been a few weeks, and it's already showing signs of healthy growth. Very satisfied with my purchase!",
    user: "GreenThumb83",
    comment_date: "12 Jan 2024",
  },

  {
    rating: "4.2",
    subject: "Great experience",
    comment:
      "I was skeptical about ordering plants online, but this experience changed my mind. The plant arrived quickly and in excellent condition. It's flourishing in my home now. Thank you!",
    user: "PlantLover123",
    comment_date: "5 Nov 2023",
  },

  {
    rating: "4.7",
    subject: "Thrilled!",
    comment:
      "Couldn't be happier with my purchase! The plant arrived well-packaged and healthy. It's already adding so much life to my space. Will definitely order again.",
    user: "GardenEnthusiast55",
    comment_date: "18 Dec 2023",
  },
  {
    rating: "4.3",
    subject: "Simply awesome",
    comment:
      "The packing was amazing, the plant was received in good consition. Happy to share that it is growing healthy. Very happy with the purchase.",
    user: "Customer 1",
    comment_date: "10 Dec 2023",
  },
];

export const ReviewWrapper = () => {
  const { tabmobView } = useMediaQueries();
  return (
    <Viewbox sx={{ maxWidth: "85% !important" }}>
      <Typography variant="h5" children={"Customer Reviews"} my={"2rem"} />
      <Box display={"grid"} gridTemplateColumns={!tabmobView && ".4fr 1fr"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          rowGap={"1rem"}
          pb={"1rem"}
        >
          <CustomRating isCard isRating />
          <Paper
            sx={{
              width: "70%",
              m: "auto",
              textAlign: "center",
            }}
            variant="outlined"
          >
            Login to post a review
          </Paper>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          {!tabmobView && <CommentFilter />}
          <Box py={"1rem"}>
            {samples.map((comment, idx) => {
              return (
                <div key={idx}>
                  <CommentPanel data={comment} />
                </div>
              );
            })}
          </Box>
          <Stack
            flexDirection={"row"}
            columnGap={"1rem"}
            alignSelf={"flex-end"}
          >
            <Button
              variant="contained"
              color="secondary"
              children={<ChevronLeftRounded />}
            />
            <Button
              variant="contained"
              color="secondary"
              children={<ChevronRightRounded />}
            />
          </Stack>
        </Box>
      </Box>
    </Viewbox>
  );
};
