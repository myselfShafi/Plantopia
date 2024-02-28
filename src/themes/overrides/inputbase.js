const InputBase = () => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice(" ").includes("basic_input") && {
            paddingLeft: "2rem",
            paddingRight: "1rem",
            flex: 1,
            fontSize: "1.7rem",
            fontWeight: 700,
            color: theme.palette.grey.darkBold,
            "& input::placeholder": {
              fontSize: "1.7rem",
              color: theme.palette.grey.dark,
              fontWeight: 500,
            },
          }),
          ...(ownerState.className?.slice(" ").includes("shade") && {
            background: theme.palette.grey.light,
            height: "5rem",
            borderTopLeftRadius: "2rem",
            borderBottomLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }),
        }),
      },
    },
  };
};

export default InputBase;
