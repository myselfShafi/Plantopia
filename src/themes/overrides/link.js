const Link = () => {
  return {
    MuiLink: {
      styleOverrides: {
        underlineNone: ({ ownerState, theme }) => ({
          color: theme.palette.fontBlue.main,
          fontSize: "2rem",
          margin: ".3rem 1rem 0",
          ...(ownerState.variant === "subtitle1" && {
            color: theme.palette.dark.main,
            fontSize: "1.7rem",
          }),
          ...(ownerState.variant === "subtitle2" && {
            fontSize: "1.5rem",
            fontWeight: 900,
          }),
        }),
      },
    },
  };
};

export default Link;
