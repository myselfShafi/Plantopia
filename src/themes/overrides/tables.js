const Table = () => {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottomColor: theme.palette.background.default,
        }),
      },
    },
  };
};

export default Table;
