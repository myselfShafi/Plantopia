const Cssbaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: ({ theme }) => ({
          background: theme.palette.background.default,
          color: theme.palette.customColors.main,
        }),
      },
    },
  };
};

export default Cssbaseline;
