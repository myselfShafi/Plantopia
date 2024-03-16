const Chip = () => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-rounded": {
            borderRadius: 4,
          },
        },
        filled: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice("").includes("rating") && {
            background: theme.palette.customColors.main,
            color: theme.palette.background.paper,
            fontWeight: 800,
            borderRadius: 0,
          }),
        }),
        outlined: ({ ownerState, theme }) => ({
          cursor: "pointer",
          color: theme.palette.text.primary,
          "&.MuiChip-colorDefault": {
            borderColor: theme.palette.text.primary,
          },
          "&.MuiChip-outlined:hover": {
            color: theme.palette.background.default,
            background: theme.palette.text.primary,
          },
          ...(ownerState.className?.slice("").includes("last-chip") && {
            color: theme.palette.background.default,
            background: theme.palette.text.primary,
            pointerEvents: "none",
          }),
        }),
      },
    },
  };
};

export default Chip;
