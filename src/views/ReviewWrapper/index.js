import { CommentPanel } from "@/components/CustomPanels/commentPanel";
import { CustomRating } from "@/components/CustomRating";
import { CommentFilter } from "@/components/CustomSelect/commentFilter";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

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

  {
    rating: "4.6",
    subject: "Delighted!",
    comment:
      "Received my plant in pristine condition. It's thriving in its new home and brings such joy to my space. Thank you for the excellent service!",
    user: "NatureLover99",
    comment_date: "7 Mar 2024",
  },

  {
    rating: "4.4",
    subject: "Impressive packaging",
    comment:
      "The packaging was top-notch, ensuring the plant arrived safely. It's been a few weeks, and it's already growing beautifully. Very pleased with my purchase!",
    user: "PlantObsessed22",
    comment_date: "19 Jan 2024",
  },

  {
    rating: "4.9",
    subject: "Exceeded expectations",
    comment:
      "I'm amazed by the quality of the plant and the care taken in packaging it. It's flourishing in my garden and has become a centerpiece. Highly recommend!",
    user: "FloralFanatic123",
    comment_date: "2 Feb 2024",
  },

  {
    rating: "4.7",
    subject: "Happy customer",
    comment:
      "Couldn't be happier with my purchase! The plant arrived quickly and in perfect condition. It's thriving in its new environment. Thank you for the wonderful addition to my home!",
    user: "BotanicalBeauty",
    comment_date: "14 Dec 2023",
  },
];

export const ReviewWrapper = () => {
  const { tabmobView } = useMediaQueries();
  const [dataArray, setDataArray] = useState(samples.slice(0, 4));
  const [dataIndex, setDataIndex] = useState(4);

  const showPrev = () => {
    setDataIndex(dataIndex - 4);
    setDataArray(samples.slice(dataIndex - 4, dataIndex));
  };
  const showNext = () => {
    setDataIndex(dataIndex + 4);
    setDataArray(samples.slice(dataIndex, dataIndex + 4));
  };

  return (
    <Viewbox sx={{ maxWidth: "85% !important" }}>
      <Typography variant="h5" my={"2rem"}>
        Customer Reviews
      </Typography>
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
            {dataArray.map((comment, idx) => {
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
              onClick={showPrev}
              disabled={dataIndex === 4}
            >
              <ChevronLeftRounded />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={showNext}
              disabled={dataIndex >= samples.length}
            >
              <ChevronRightRounded />
            </Button>
          </Stack>
        </Box>
      </Box>
    </Viewbox>
  );
};
