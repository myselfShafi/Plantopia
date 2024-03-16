import { Grass } from "@mui/icons-material";
import { Box, Rating, styled } from "@mui/material";
import { useState } from "react";

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}`;
}

export const CustomRating = ({
  size,
  isCard,
  isRating,
  readOnly,
  ...other
}) => {
  const [value, setValue] = useState(4.3);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
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
    <Box display={"flex"} gap={1} alignItems={"center"} {...other}>
      <StyledRating
        name="plant-rating"
        value={value}
        precision={0.1}
        getLabelText={getLabelText}
        readOnly={readOnly}
        onChange={handleChange}
        icon={<Grass fontSize={size} />}
        emptyIcon={<Grass fontSize={size} />}
      />
      {isRating && <Box children={`(${value})`} />}
      {isCard && <Box children={"45 Ratings"} />}
    </Box>
  );
};
