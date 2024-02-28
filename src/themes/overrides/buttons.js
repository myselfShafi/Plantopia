const Button = () => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        type: "submit",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "1rem",
          color: theme.palette.light.main,
          textTransform: "none",
          fontSize: "1.7rem",
          height: "5.5rem",
          width: ownerState.fullWidth ? null : "max-content",
          // fontWeight: 800,
          "&.Mui-disabled": {
            color: theme.palette.light.main,
            height: "3.5rem",
            padding: "0 2rem",
          },
        }),
        containedPrimary: ({ ownerState, theme }) => ({
          background: `linear-gradient(269.73deg, ${theme.palette.secondary.main} 1.64%, ${theme.palette.secondary.light} 97.66%)`,
          "&:hover": {
            background: `linear-gradient(269.73deg, ${theme.palette.secondary.main} 1.64%, ${theme.palette.secondary.light} 97.66%)`,
          },
        }),
        containedSecondary: ({ ownerState, theme }) => ({
          background: `linear-gradient(180deg,${theme.palette.primary.opaque} 1.64%, ${theme.palette.primary.main} 97.66%)`,
          "&:hover": {
            background: `linear-gradient(180deg,${theme.palette.primary.opaque} 1.64%, ${theme.palette.primary.main} 97.66%)`,
          },
          ...(ownerState.size === "large" && {
            background: `linear-gradient(85deg,${theme.palette.primary.shade} .5%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.main} 90%)`,
            "&:hover": {
              background: `linear-gradient(85deg,${theme.palette.primary.shade} .5%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.main} 80%, ${theme.palette.primary.main} 90%)`,
            },
          }),
        }),
        containedSizeMedium: {
          padding: "0 5rem",
        },
        containedSizeLarge: {
          padding: "0 2rem",
        },
        containedInfo: ({ theme }) => ({
          background: theme.palette.grey.darkBold,
          "&:hover": {
            background: theme.palette.grey.darkBold,
          },
        }),
        containedSuccess: ({ theme }) => ({
          background: theme.palette.green.main,
          "&:hover": {
            background: theme.palette.green.main,
          },
        }),
        containedError: ({ theme }) => ({
          background: theme.palette.fontRed.main,
          "&:hover": {
            background: theme.palette.fontRed.main,
          },
        }),
        containedInherit: ({ theme }) => ({
          background: theme.palette.primary.light,
          "&:hover": {
            background: theme.palette.primary.light,
          },
        }),
        containedWarning: ({ theme }) => ({
          background: theme.palette.light.main,
          "&:hover": {
            background: theme.palette.light.main,
          },
          color: theme.palette.primary.main,
        }),
        outlined: ({ theme }) => ({
          padding: "0 5rem",
          fontSize: "1.8rem",
          border: `.3rem solid ${theme.palette.light.darker}`,
          color: theme.palette.grey.darkBold,
          background: theme.palette.light.main,
          "&:hover": {
            border: `.3rem solid ${theme.palette.light.darker}`,
            color: theme.palette.grey.darkBold,
            background: theme.palette.light.main,
          },
        }),
        outlinedSizeSmall: ({ theme }) => ({
          height: "4.2rem",
          padding: "0 1rem ",
          border: `.22rem solid ${theme.palette.light.darker}`,
          "&:hover": {
            border: `.22rem solid ${theme.palette.light.darker}`,
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          },
        }),
        outlinedInfo: ({ theme }) => ({
          background: "transparent",
          border: `.2rem solid ${theme.palette.light.main}`,
          "&:hover": {
            border: `.2rem solid ${theme.palette.light.main}`,
            background: "transparent",
          },
        }),
      },
    },
  };
};

export default Button;
