const Cssbaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          background: theme.palette.background.default,
          color: theme.palette.customColors.main,
        },
        ".swiper-pagination-bullet-active": {
          background: `${theme.palette.customColors.light} !important`,
        },
        ".strip-box": {
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        },
        ".strip-box::before, .strip-box::after": {
          content: '""',
          position: "absolute",
          top: 0,
          width: "10%",
          height: "100%",
          zIndex: 5,
        },
        ".strip-box::before": {
          left: 0,
          background: `linear-gradient(to right, ${theme.palette.customColors.main}, transparent)`,
        },
        ".strip-box::after": {
          right: 0,
          background: `linear-gradient(to left, ${theme.palette.customColors.main}, transparent)`,
        },

        ".slider": {
          animation: "slide 10s linear infinite",
        },

        ".strip-box:hover .slider": {
          cursor: "default",
          animationPlayState: "paused",
        },

        "@keyframes slide": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },

        ".slider span": {
          animation: "blink .7s infinite",
        },

        "@keyframes blink": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      }),
    },
  };
};

export default Cssbaseline;
