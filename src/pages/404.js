import Link from "next/link";

import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Paper, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Error404 = () => {
  const { tabmobView } = useMediaQueries();
  const BoxWrapper = styled(Box)({
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: tabmobView ? "90%" : "50%",
    width: "100%",
    gap: "2rem",
    textAlign: "center",
  });
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <BoxWrapper alignSelf={"center"}>
        <Stack
          flexDirection={"row"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Typography variant="h1" fontSize={"10rem !important"}>
            4
          </Typography>
          <Image
            src={"/assets/404img.png"}
            alt="404_image"
            width={100}
            height={100}
            style={{ width: "auto", height: "90%" }}
          />
          <Typography variant="h1" fontSize={"10rem !important"}>
            4
          </Typography>
        </Stack>
        <Typography variant="h4">Oh, no!</Typography>
        <Typography variant="h5">
          Nothing dwells here except this{" "}
          <Box
            component={"span"}
            color={"customColors.monoBg"}
            fontStyle={"italic"}
          >
            Matcha Tea Plant...
          </Box>
        </Typography>
        <Typography variant="h6">
          Growing our collection, nurturing your world – more blooms, more
          green, coming soon!!
        </Typography>
      </BoxWrapper>
      <Paper elevation={0} sx={{ display: "flex", flexDirection: "column" }}>
        <BoxWrapper alignSelf={"center"}>
          <Typography variant="h4">
            Lost in the vast expanse? No worries!
          </Typography>
          <Typography variant="h5">
            Discover sanctuary in our flourishing Botanical Garden, featuring
            indoor, outdoor, floral and many more, especially curated for you.
          </Typography>
          <Button
            href="/category"
            component={Link}
            variant="contained"
            color="secondary"
          >
            Lets Explore
          </Button>
        </BoxWrapper>
      </Paper>
    </Box>
  );
};

export default Error404;
