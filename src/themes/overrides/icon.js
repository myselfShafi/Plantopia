const Icons = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: "3rem",
          color: theme.palette.customColors.main,
          ...(ownerState.className?.slice("").includes("stripIcon") && {
            color: theme.palette.background.default,
            fontSize: "2.5rem",
          }),
        }),
      },
    },
  };
};

export default Icons;
