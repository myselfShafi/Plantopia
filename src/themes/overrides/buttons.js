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
          transition: "scale .5s ease",
        }),
        text: ({ ownerState, theme }) => ({
          color: theme.palette.grey[200],
          ...(ownerState.className?.slice("").includes("toggleColor") && {
            color: theme.palette.background.paper,
          }),
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
