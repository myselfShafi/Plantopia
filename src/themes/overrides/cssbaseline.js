const Cssbaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          background: theme.palette.background.default,
          color: theme.palette.customColors.main,
        },
        ".swiper": {
          width: "100%",
          height: "100vh",
          [theme.breakpoints.between("md", "lg")]: {
            height: "60vh",
          },
          [theme.breakpoints.between("sm", "md")]: {
            height: "50vh",
          },
          [theme.breakpoints.down("sm")]: {
            height: "30vh",
          },
        },
        ".swiper-pagination-bullet": {
          height: ".8rem !important",
          width: "2rem !important",
          borderRadius: "2rem !important",
        },
        ".swiper-pagination-bullet-active": {
          width: "5rem !important",
          borderRadius: "5rem !important",
          background: `${theme.palette.customColors.light} !important`,
          [theme.breakpoints.down("md")]: {
            height: ".5rem !important",
            width: "3rem !important",
            borderRadius: "3rem !important",
          },
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

        ".category-img": {
          transition: "transform .3s linear",
        },
        ".card-overlay": {
          position: "relative",
          paddingTop: "2rem",
        },
        ".req-text": {
          width: 0,
          transition: "width .5s",
          overflow: "hidden",
        },
        ".req-icon:hover + .req-text": {
          width: "100%",
        },
      }),
    },
  };
};

export default Cssbaseline;
