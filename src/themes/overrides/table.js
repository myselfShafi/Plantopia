const Table = () => {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 650,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "2rem",
          marginTop: "4rem",
          maxHeight: "55rem",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "1rem",
            height: "2rem",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.light.main,
            borderRadius: "2rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.grey.scroll,
            borderRadius: "2rem",
            height: "1rem",
          },
          ...(ownerState.className?.slice(" ").includes("noscroll") && {
            maxHeight: "auto",
          }),
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.light.dark,
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: ({ theme }) => ({
          background: theme.palette.light.dark,
        }),
        root: ({ theme }) => ({
          "&:last-child td, &:last-child th": { border: 0 },
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.light.bg,
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontSize: "2rem",
          fontWeight: 800,
          color: theme.palette.grey.darkBold,
          background: theme.palette.light.dark,
        }),
        body: ({ theme }) => ({
          fontSize: "1.8rem",
          color: theme.palette.grey.darkBold,
        }),
      },
    },
  };
};

export default Table;
