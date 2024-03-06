const Dropdowns = () => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }) => ({
          padding: "2rem 1.5rem",
          maxWidth: "15vw",
          background: theme.palette.text.primary,
          color: theme.palette.background.paper,
        }),
      },
    },
  };
};

export default Dropdowns;
