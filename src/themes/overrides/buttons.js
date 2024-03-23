const Buttons = () => {
  return {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 0,
          ...(ownerState.className?.slice("").includes("hover") && {
            "&.MuiButton-root:hover": {
              scale: "1.1",
            },
          }),
          whiteSpace: "nowrap",
          transition: "scale .5s ease, background .5s",
        }),
        text: ({ ownerState, theme }) => ({
          color: theme.palette.grey[200],
          ...(ownerState.className?.slice("").includes("toggleColor") && {
            color: theme.palette.background.paper,
          }),
        }),
        outlined: ({ theme }) => ({
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }),
        outlinedInfo: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice("").includes("nav-btn") && {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary,
            background: theme.palette.info.light,
          }),
        }),
        endIcon: {
          "& *:nth-of-type(1)": {
            fontSize: "unset",
          },
        },
        sizeLarge: {
          fontSize: "2.5rem",
        },
        sizeMedium: {
          fontSize: "1rem",
        },
      },
    },
  };
};

export default Buttons;
