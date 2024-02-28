const List = () => {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": { background: "none" },
          padding: 0,
          "& .MuiSvgIcon-root": {
            fontSize: "4rem",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTypography-root": {
            fontSize: "2.5rem",
            fontWeight: 900,
            color: theme.palette.grey.darkBold,
          },
        }),
      },
    },
  };
};
export default List;
