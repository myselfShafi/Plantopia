const Palette = () => {
  const whiteColor = "#fff";
  const darkColor = "34, 34, 34";
  const mainColor = darkColor;
  return {
    // mode: whiteColor,
    customColors: {
      light: whiteColor,
      main: mainColor,
      dark: darkColor,
    },
    // primary: {
    //   main: "#ff4",
    // },
    error: {
      light: "#FF625F",
      main: "#FF4D49",
      dark: "#E04440",
      contrastText: whiteColor,
    },
    warning: {
      light: "#FDBE42",
      main: "#FDB528",
      dark: "#DF9F23",
      contrastText: whiteColor,
    },
    info: {
      light: "#40CDFA",
      main: "#26C6F9",
      dark: "#21AEDB",
      contrastText: whiteColor,
    },
    success: {
      light: "#83E542",
      main: "#72E128",
      dark: "#64C623",
      contrastText: whiteColor,
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#F5F5F5",
      A200: "#EEEEEE",
      A400: "#BDBDBD",
      A700: "#616161",
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
  };
};

export default Palette;
