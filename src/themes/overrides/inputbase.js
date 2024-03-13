const InputBase = () => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 0,
          color: theme.palette.customColors.main,
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.disabled,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `solid 1px ${theme.palette.customColors.main}`,
            borderRadius: 0,
          },
          ...(ownerState.className?.slice("").includes("quantity-input") && {
            maxWidth: "5rem",
            width: "100%",
            textAlign: "center",
            "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
              {
                display: "none",
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& .MuiOutlinedInput-input": {
              textAlign: "center",
              fontSize: "1.2rem",
              padding: ".5rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.default,
            },
          }),
        }),
      },
    },
  };
};

export default InputBase;
