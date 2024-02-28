const Breadcrumb = () => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }) => ({
          margin: "3rem 0",
          fontSize: "2rem",
          color: theme.palette.grey.darkBold,
        }),
        li: {
          "& > .MuiLink-root": {
            textDecoration: "none",
            color: "inherit",
            fontWeight: 900,
          },
          "& .MuiTypography-root": {
            color: "inherit",
            fontSize: "2rem",
          },
        },
      },
    },
  };
};

export default Breadcrumb;
