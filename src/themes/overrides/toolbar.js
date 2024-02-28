const Toolbar = () => {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.primary.light})`,
          height: "12rem",
          direction: "flex",
          justifyContent: "space-between",
        }),
      },
    },
  };
};

export default Toolbar;
