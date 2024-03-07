const Cards = () => {
  return {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "transparent",
          height: "30rem",
          overflow: "visible",
          ...(ownerState.className?.slice("").includes("img-card") && {
            position: "absolute",
            top: "0",
            left: "40%",
            margin: "0 5%",
            transition: "transform 0.3s",
            transform: "translateX(-45%) translateY(-100%)",
            background: theme.palette.customColors.cardBg,
            height: "19rem",
            width: "90%",
          }),
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.paper,
          paddingTop: "10rem",
          transition: "transform 0.3s, padding-top 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
            paddingTop: "15rem",
            ".img-card": {
              transform: "translateX(-45%) translateY(-100%) scale(1.02)",
            },
          },
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
        }),
      },
    },
  };
};

export default Cards;
