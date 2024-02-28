const Pagination = () => {
  return {
    MuiPagination: {
      styleOverrides: {
        rounded: {},
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1.7rem",
          fontWeight: 900,
          outline: `.2rem solid ${theme.palette.grey.light}`,
        }),
        previousNext: ({ theme }) => ({
          background: `linear-gradient(269.73deg,${theme.palette.secondary.main} 1.64%, ${theme.palette.secondary.light} 97.66%)`,
        }),
        icon: ({ theme }) => ({
          color: theme.palette.light.main,
          fontSize: "3rem",
        }),
      },
    },
  };
};

export default Pagination;
