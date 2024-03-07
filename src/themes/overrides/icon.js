const Icons = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: "2rem",
          ...(ownerState.className?.slice("").includes("dual") && {
            color: theme.palette.customColors.main,
          }),
          ...(ownerState.className?.slice("").includes("stripIcon") && {
            color: theme.palette.background.default,
            fontSize: "1.8rem",
          }),
          ...(ownerState.className?.slice("").includes("mono") && {
            color: theme.palette.grey[300],
          }),
        }),
        fontSizeSmall: {
          fontSize: "1.5rem",
        },
      },
    },
  };
};

export default Icons;
