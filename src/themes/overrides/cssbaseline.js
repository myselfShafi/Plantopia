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
          textWrap: "nowrap",
        },
        ".req-icon:hover + .req-text": {
          width: "100%",
          textWrap: "nowrap",
        },

        ".mySwiper2": {
          height: "45rem",
          width: "98%",
          [theme.breakpoints.down("lg")]: {
            height: "28rem",
          },
          [theme.breakpoints.down("md")]: {
            height: "32rem",
            width: "100%",
          },
          [theme.breakpoints.down("sm")]: {
            height: "20rem",
          },
        },

        ".mySwiper1": {
          height: "30rem",
          width: "100%",
          [theme.breakpoints.down("lg")]: {
            height: "18rem",
          },
          [theme.breakpoints.down("md")]: {
            height: "12rem",
          },
          [theme.breakpoints.down("sm")]: {
            height: "6rem",
          },
        },

        ".mySwiper1 .swiper-slide": {
          height: "100%",
          opacity: 0.75,
        },

        ".mySwiper1 .swiper-slide-thumb-active": {
          opacity: 1,
        },

        ".swiper.sliderSwiper": {
          position: "absolute",
          height: "fit-content",
          width: "100%",
        },

        ".sliderSwiper .swiper-slide": {
          height: "100%",
          width: "12rem",
          textAlign: "center",
        },

        ".navSwiper": {
          width: "100%",
          height: "35rem",
        },

        ".navSwiper .swiper-button-prev, .navSwiper .swiper-button-next": {
          color: theme.palette.customColors.monoBg,
          ":hover": {
            color: theme.palette.customColors.main,
          },
        },

        ".animate-content": {
          animation: "fadeIn 1.5s forwards",
        },

        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }),
    },
  };
};

export default Cssbaseline;
