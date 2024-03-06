const Links = () => {
  return {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: ".8rem",
          letterSpacing: "1px",
          color: theme.palette.grey[300],
          fontWeight: 200,
        }),
      },
    },
  };
};

export default Links;
