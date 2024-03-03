const Divider = () => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1.5rem",
          fontWeight: 800,
          alignSelf: "center",
          color: theme.palette.background.default,
        }),
      },
    },
  };
};

export default Divider;
