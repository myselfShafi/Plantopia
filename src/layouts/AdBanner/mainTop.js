import { ArrowRightAltRounded, CloseRounded } from "@mui/icons-material";
import { Collapse, IconButton, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const AdBanner = () => {
  const [isClosed, setIsClosed] = useState(true);

  const Textwrapper = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.customColors.light,
    ".MuiSvgIcon-root": {
      transition: "transform .3s",
    },
    "&:hover": {
      ".MuiSvgIcon-root": {
        transform: "translateX(50%)",
      },
    },
  }));

  return (
    <Collapse in={isClosed}>
      <Stack
        bgcolor={"customColors.monoBg"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"3rem"}
      >
        <Textwrapper component={Link} href={"/category"}>
          <Typography
            variant="body2"
            sx={{
              "& span:last-of-type:hover": {
                opacity: 0.6,
              },
            }}
          >
            Today Deal sale of <span style={{ fontWeight: 800 }}>60%</span>.
            Ends soon. <span>Hurry Up</span>
          </Typography>
          <ArrowRightAltRounded fontSize="small" />
        </Textwrapper>
        <IconButton
          onClick={() => setIsClosed(false)}
          sx={{
            position: "absolute",
            right: ".5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <CloseRounded className="mono" fontSize="small" />
        </IconButton>
      </Stack>
    </Collapse>
  );
};
