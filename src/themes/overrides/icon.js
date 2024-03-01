const Icons = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "3rem",
          color: theme.palette.grey[900],
        }),
      },
    },
  };
};

export default Icons;
