const Menu = () => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.grey.darkBold,
          fontSize: "1.5rem",
          fontWeight: 600,
          padding: ".2rem 2rem ",
          ...(ownerState.className?.split(" ").includes("profile") && {
            padding: ".1rem 2rem",
            fontSize: "1.7rem",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: theme.palette.secondary.opaque,
            },
          }),
          ...(ownerState.className?.split(" ").includes("translate") && {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ".5rem 0",
          }),
        }),
      },
    },
  };
};

export default Menu;
