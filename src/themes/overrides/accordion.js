const Accordion = () => {
  return {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.className?.slice("").includes("filter-div") && {
            background: theme.palette.background.default,
          }),
        }),
      },
    },
  };
};

export default Accordion;
