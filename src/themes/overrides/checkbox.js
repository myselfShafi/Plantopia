const Checkbox = () => {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: ownerState.className ?? 0,
          color: theme.palette.grey.outline,
          "&.Mui-checked": {
            color: theme.palette.green.main,
          },
          "& .MuiSvgIcon-root": {
            fontSize: ownerState.className === "radioCheck" ? "2rem" : "2.5rem",
          },
        }),
      },
    },
  };
};

export default Checkbox;
