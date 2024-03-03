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
        root: ({ theme }) => ({
          fontSize: "1.2rem",
          fontWeight: 700,
          "&.MuiButton-root:hover": {
            scale: "1.1",
          },
          whiteSpace: "nowrap",
          transition: "scale .5s ease",
        }),
        text: ({ theme }) => ({
          color: theme.palette.grey[200],
        }),
      },
    },
  };
};

export default Buttons;