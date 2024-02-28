const Badge = () => {
  return {
    MuiBadge: {
      styleOverrides: {
        badge: ({ ownerState, theme }) => ({
          color: theme.palette.light.main,
          fontSize: "1.4rem",
          right: -10,
          ...(ownerState.className?.slice("").includes("tabHeader") && {
            top: 3,
          }),
        }),
      },
    },
  };
};

export default Badge;
