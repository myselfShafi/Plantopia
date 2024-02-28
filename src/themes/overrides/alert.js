const Alert = () => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          display: "inline-block",
          fontSize: "1.4rem",
          fontWeight: 600,
          paddingTop: 0,
          paddingBottom: 0,
        },
        standardError: ({ theme }) => ({ color: theme.palette.fontRed.main }),
        standardSuccess: ({ theme }) => ({
          color: theme.palette.fontBlue.main,
          background: theme.palette.green.bg,
        }),
        message: { paddingTop: 0, paddingBottom: 0 },
      },
    },
  };
};

export default Alert;
