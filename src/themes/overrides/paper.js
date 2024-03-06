const Paper = () => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice("").includes("more-div") && {
            position: "absolute",
            paddingTop: "8rem",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
          }),
        }),
      },
    },
  };
};

export default Paper;
