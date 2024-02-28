const Form = () => {
  return {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: ({ theme }) => ({ color: theme.palette.secondary.main }),
        root: ({ ownerState, theme }) => ({
          fontSize: "1.5rem",
          color: theme.palette.fontBlue.main,
          fontWeight: 700,
          marginBottom: "1.2rem",
          "&.Mui-focused": { color: theme.palette.fontBlue.main },
          ...(ownerState.className?.slice(" ").includes("cartAsk") && {
            fontSize: "2rem",
            width: "40rem",
            textAlign: "center",
          }),
          ...(ownerState.className?.slice(" ").includes("checkout") && {
            fontSize: "1.8rem",
            margin: "2rem 0",
            fontWeight: 500,
            color: theme.palette.dark.main,
          }),
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice(" ").includes("genderLabel") && {
            border: `.3rem solid ${theme.palette.light.dark}`,
            "&:hover": {
              border: `.3rem solid ${theme.palette.secondary.light}`,
            },
            background: theme.palette.light.main,
            height: "4.7rem",
            borderRadius: "1rem",
            paddingRight: "5rem",
            margin: 0,
          }),
          ...(ownerState.className?.slice(" ").includes("terms") && {
            alignItems: "flex-start",
            gap: ".5rem",
            margin: ".5rem 0",
          }),
        }),
        label: ({ ownerState, theme }) => ({
          fontSize: "1.8rem",
          color: theme.palette.fontBlue.main,
          ...(ownerState.className?.slice(" ").includes("labelFont") && {
            fontSize: "1.6rem",
            fontWeight: 900,
          }),
          ...(ownerState.className?.slice(" ").includes("terms") && {
            color: theme.palette.dark.main,
          }),
        }),
      },
    },
  };
};

export default Form;
