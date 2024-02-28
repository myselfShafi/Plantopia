const Dialog = () => {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(0.3rem)",
        },
        paper: {
          borderRadius: "2.5rem",
        },
      },
    },
  };
};

export default Dialog;
