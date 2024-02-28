const OutlinedInput = () => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { border: "none" },
        root: ({ ownerState, theme }) => ({
          height: "5rem",
          fontSize: "1.5rem",
          color: theme.palette.grey.darkBold,
          fontWeight: 600,
          borderRadius: "1rem",
          paddingRight: 0,
          background: theme.palette.light.main,
          border: `.3rem solid ${theme.palette.light.light}`,
          "&:hover": {
            border: `.3rem solid ${theme.palette.secondary.light}`,
          },
          ...(ownerState.className?.slice(" ").includes("user-detail") && {
            borderColor: theme.palette.light.dark,
          }),
          ...(ownerState.className?.slice(" ").includes("ask-input") && {
            background: theme.palette.light.bgshade,
            borderColor: theme.palette.light.main,
          }),
          ...(ownerState.className?.slice(" ").includes("checkout") && {
            borderColor: theme.palette.grey.main,
          }),
        }),
        multiline: ({ ownerState, theme }) => ({
          height: "auto",
          padding: "2rem 4rem",
          fontSize: "1.8rem",
          ...(ownerState.className?.slice(" ").includes("multiline") && {
            borderColor: theme.palette.grey.main,
          }),
        }),
      },
    },
  };
};

export default OutlinedInput;
