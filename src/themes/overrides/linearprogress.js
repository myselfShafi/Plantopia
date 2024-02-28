const LinearProgress = () => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice(" ").includes("document") && {
            background: theme.palette.light.main,
            outline: `.2rem solid ${theme.palette.fontBlue.progress}`,
          }),
        }),
        determinate: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice(" ").includes("document") && {
            height: "1.5rem",
            width: "100%",
          }),
        }),
        bar: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice(" ").includes("document") && {
            background: theme.palette.fontBlue.progress,
          }),
        }),
      },
    },
  };
};

export default LinearProgress;
