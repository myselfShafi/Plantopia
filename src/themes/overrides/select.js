const Select = () => {
  return {
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiNativeSelect-icon": {
            color: theme.palette.customColors.main,
          },
        }),
      },
    },
  };
};

export default Select;
