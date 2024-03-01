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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 0,
          color: theme.palette.customColors.main,
          fontSize: "1.5rem",
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.disabled,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `solid 1px ${theme.palette.grey[900]}`,
            borderRadius: 8,
          },
        }),
      },
    },
  };
};

export default InputBase;
