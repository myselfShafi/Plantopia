const Badge = () => {
  return {
    MuiBadge: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiBadge-badge": {
            color: theme.palette.customColors.main,
            fontSize: "1rem",
            fontWeight: 800,
            right: -10,
            top: "50%",
          },
        }),
      },
    },
  };
};

export default Badge;
