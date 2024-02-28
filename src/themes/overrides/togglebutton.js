const ToggleButtons = () => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.split(" ").includes("text") && {
            borderBottom: `.22rem solid ${theme.palette.light.dark}`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            gap: "3rem",
            "& .Mui-selected": {
              background: "none !important",
              "&:hover": {
                background: "none",
              },
            },
          }),
          ...(ownerState.className?.split(" ").includes("button") && {
            background: theme.palette.grey.light,
            "& .Mui-selected": { background: theme.palette.grey.main },
          }),
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.split(" ").includes("text") && {
            padding: 0,
            border: "none",
            "&:hover": {
              background: "none",
            },
          }),
          ...(ownerState.className?.split(" ").includes("button") && {
            border: `.3rem solid ${theme.palette.light.main}`,
            padding: ".5rem 1rem",
            "& .MuiToggleButton-root.Mui-disabled": {
              opacity: 1,
              color: theme.palette.light.main,
            },
          }),
          ...(ownerState.value === "left" && {
            borderTopLeftRadius: "1.5rem",
            borderBottomLeftRadius: "1.5rem",
          }),
          ...(ownerState.value === "right" && {
            borderTopRightRadius: "1.5rem",
            borderBottomRightRadius: "1.5rem",
          }),
        }),
      },
    },
  };
};

export default ToggleButtons;
