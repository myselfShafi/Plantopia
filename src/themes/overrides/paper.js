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
        outlined: ({ ownerState, theme }) => ({
          background: theme.palette.background.default,
          padding: "1rem",
          border: `2px dashed ${theme.palette.background.paper}`,
          "&:hover": {
            background: theme.palette.background.paper,
          },
        }),
      },
    },
  };
};

export default Paper;
