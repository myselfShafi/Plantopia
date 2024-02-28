const Tooltip = () => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          fontSize: "1.8rem",
          background: theme.palette.secondary.light,
          color: theme.palette.light.main,
          borderTopLeftRadius: ".9rem",
          borderBottomLeftRadius: ".9rem",
          borderTopRightRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }),
        arrow: ({ theme }) => ({
          color: theme.palette.secondary.light,
        }),
      },
    },
  };
};

export default Tooltip;
