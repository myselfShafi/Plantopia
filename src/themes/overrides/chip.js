const Chip = () => {
  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: "3.8rem",
          borderRadius: "20rem",
          background: theme.palette.grey.light,
          color: theme.palette.fontBlue.main,
          fontSize: "2rem",
          fontWeight: 600,
          paddingLeft: "1rem",
          paddingRight: "1rem",
          ...(ownerState.className?.slice(" ").includes("orderStatus") && {
            height: "max-content",
            fontSize: "1.8rem",
            fontWeight: 500,
            border: `.3rem solid ${theme.palette.grey.light}`,
            background: theme.palette.light.main,
          }),
          ...(ownerState.className?.slice(" ").includes("more") && {
            background: theme.palette.light.main,
            boxShadow: `0rem .5rem 1.5rem .01rem ${theme.palette.grey.main}`,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }),
        }),
        filled: ({ ownerState, theme }) => ({
          ...(ownerState.color === "info" && {
            color: theme.palette.grey.darkBold,
            background: theme.palette.grey.shade,
          }),
        }),
        filledSecondary: ({ theme }) => ({
          fontWeight: 400,
          color: theme.palette.light.main,
          background: `linear-gradient(269.73deg, ${theme.palette.secondary.light} 1.64%, ${theme.palette.secondary.main} 97.66%)`,
        }),
        outlinedSecondary: ({ theme }) => ({
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          background: theme.palette.secondary.opaque,
        }),
      },
    },
  };
};

export default Chip;
