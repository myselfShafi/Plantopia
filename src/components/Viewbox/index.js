import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Viewbox = ({ children, ...other }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    maxWidth: "75%",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
  }));
  return (
    <Box py={"3rem"} {...other}>
      <StyledBox>{children}</StyledBox>
    </Box>
  );
};
