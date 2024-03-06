const Icons = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: "2rem",
          color: theme.palette.customColors.main,
          ...(ownerState.className?.slice("").includes("stripIcon") && {
            color: theme.palette.background.default,
            fontSize: "1.8rem",
          }),
        }),
      },
    },
  };
};

export default Icons;
