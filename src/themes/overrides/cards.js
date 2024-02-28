const Cards = () => {
  return {
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "2.5rem",
          ...(ownerState.className?.slice(" ").includes("mainCard") && {
            margin: "0 auto",
            position: "relative",
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            maxWidth: "32rem",
            minWidth: "32rem",
            width: "100%",
            maxHeight: "44rem",
            minHeight: "44rem",
            height: "100%",
            outline:
              ownerState.bgcolor == "white" &&
              `.3rem solid ${theme.palette.grey.light}`,
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: `0 .1rem 1.5rem ${theme.palette.light.shadow}`,
            },
          }),
          ...(ownerState.className?.slice(" ").includes("imgCard") && {
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            padding: "1rem",
            width: "26rem",
            height: "24rem",
            background:
              ownerState.bgcolor == "white" && theme.palette.grey.light,
            outline:
              ownerState.bgcolor != "white" &&
              `.3rem solid ${theme.palette.grey.light}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
        }),
      },
    },
  };
};

export default Cards;
