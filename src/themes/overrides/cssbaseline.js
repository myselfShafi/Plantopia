const Cssbaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: ({ theme }) => ({
          background: theme.palette.background.default,
          color: theme.palette.customColors.main,
        }),
        // ":root": ({ theme }) => ({
        //   "--global-dark": theme.palette.customColors.dark,
        //   "--global-light": theme.palette.customColors.light,
        // }),
      },
    },
  };
};

export default Cssbaseline;
