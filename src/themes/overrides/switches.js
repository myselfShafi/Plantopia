const Switch = () => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: "4.5rem",
          height: "2.5rem",
          padding: 0,
          margin: "1rem",
          "& .MuiSwitch-switchBase": { padding: 0 },
          "& .Mui-checked": {
            color: `${theme.palette.secondary.main} !important`,
          },
          "& .MuiSwitch-track": {
            borderRadius: "1.2rem",
          },
          "& .Mui-checked + .MuiSwitch-track": {
            background: `${theme.palette.grey.light} !important`,
            opacity: 1,
          },
        }),
      },
    },
  };
};

export default Switch;
