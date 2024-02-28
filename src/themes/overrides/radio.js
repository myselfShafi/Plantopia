const Radio = () => {
  return {
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: 0,
          color: theme.palette.grey.outline,

          "& .MuiSvgIcon-root": {
            fontSize: "2rem",
            margin: "0 1rem",
          },
          "&.Mui-checked": {
            "& .MuiSvgIcon-root": {
              color: theme.palette.green.main,
              ...(ownerState.value === "Closed" && {
                color: theme.palette.fontRed.main,
              }),
            },
          },
        }),
      },
    },
  };
};

export default Radio;
