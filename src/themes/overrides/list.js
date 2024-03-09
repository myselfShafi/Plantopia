const List = () => {
  return {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "2rem",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: ".7rem",
        },
      },
    },
  };
};

export default List;
