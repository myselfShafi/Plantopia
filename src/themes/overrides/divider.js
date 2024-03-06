const Divider = () => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 800,
          alignSelf: "center",
          color: theme.palette.background.default,
          borderColor: theme.palette.grey[700],
        }),
      },
    },
  };
};

export default Divider;
