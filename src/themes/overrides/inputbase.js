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
            borderColor: theme.palette.customColors.main,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.disabled,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `solid 1px ${theme.palette.customColors.main}`,
            borderRadius: 8,
          },
        }),
      },
    },
  };
};

export default InputBase;
