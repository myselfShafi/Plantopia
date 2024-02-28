const ButtonGroup = () => {
  return {
    MuiButtonGroup: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          background: `linear-gradient(to right,${theme.palette.secondary.light},${theme.palette.secondary.main})`,
          borderRadius: ".8rem",
          gap: ".5rem",
        }),
      },
    },
  };
};

export default ButtonGroup;
