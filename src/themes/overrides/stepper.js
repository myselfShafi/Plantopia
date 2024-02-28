const Stepper = () => {
  return {
    MuiStep: {
      styleOverrides: {
        horizontal: {
          margin: "4rem 0",
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          maxWidth: "90rem",
          minWidth: "50rem",
          width: "100%",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "3.2rem",
          "&.Mui-active": {
            borderRadius: "50%",
            boxShadow: `0 0 .3em ${theme.palette.primary.light}`,
          },
        }),
        text: {
          fontSize: "1.5rem",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        alternativeLabel: {
          left: "calc(-50% + 16px)",
          right: "calc(50% + 16px)",
        },
        line: {
          borderTopWidth: ".3rem",
        },
        horizontal: ({ theme }) => ({
          "&.Mui-completed": {
            "& .MuiStepConnector-line": {
              borderColor: theme.palette.primary.light,
            },
          },
          "&.Mui-active": {
            "& .MuiStepConnector-line": {
              borderColor: theme.palette.primary.light,
            },
          },
        }),
        vertical: ({ theme }) => ({
          marginLeft: ".6rem",
          "& .MuiStepConnector-line": {
            borderColor: theme.palette.grey.light,
            borderLeftWidth: ".4rem",
          },
        }),
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        horizontal: {
          "& .Mui-completed": {
            fontWeight: `${900} !important`,
          },
          "& .Mui-active": {
            fontWeight: `${900} !important`,
          },
        },
        vertical: { padding: 0 },
        label: ({ ownerState, theme }) => ({
          fontSize: "1.9rem",
          fontWeight: ownerState.orientation === "horizontal" && 900,
          color: theme.palette.grey.darkBold,
          "&.Mui-completed": {
            color: theme.palette.grey.darkBold,
          },
          "&.Mui-active": {
            color: theme.palette.grey.darkBold,
          },
        }),
      },
    },
  };
};

export default Stepper;
