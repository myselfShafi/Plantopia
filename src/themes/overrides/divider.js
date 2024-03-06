const Divider = () => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 800,
          alignSelf: "center",
          color: theme.palette.background.default,
        }),
      },
    },
  };
};

export default Divider;
