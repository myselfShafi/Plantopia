import { Grass } from "@mui/icons-material";
import { Box, Rating, styled } from "@mui/material";

export const CustomRating = () => {
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconFilled": {
      color: theme.palette.success.dark,
    },
    "& .MuiRating-iconHover": {
      color: theme.palette.success.light,
    },
    "& .MuiRating-iconEmpty": {
      color: theme.palette.text.disabled,
    },
  }));
  return (
    <Box display={"flex"} gap={1} alignItems={"center"} mb={".5rem"}>
      <StyledRating
        name="plant-rating"
        defaultValue={4}
        readOnly
        icon={<Grass fontSize="small" />}
        emptyIcon={<Grass fontSize="small" />}
      />
      <Box children={"45 Ratings"} />
    </Box>
  );
};
