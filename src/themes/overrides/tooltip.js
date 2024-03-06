const Tooltip = () => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          fontSize: ".8rem",
          borderRadius: 6,
          lineHeight: 1.455,
          color: theme.palette.background.paper,
          background: theme.palette.text.primary,
        }),
        arrow: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
  };
};

export default Tooltip;
