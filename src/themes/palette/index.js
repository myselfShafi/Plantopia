const Palette = (mode) => {
  const whiteColor = "#fff";
  const lightColor = "255, 255, 255";
  const darkColor = "26, 41, 2";

  const mainColor = mode ? lightColor : darkColor;
  const bgColor = mode ? darkColor : lightColor;

  const defaultBgColor = () => {
    if (mode) {
      return `rgba(${darkColor}, 1.0)`;
    } else {
      return `rgba(${lightColor}, 1.0)`;
    }
  };

  return {
    customColors: {
      light: `rgba(${lightColor}, 1.0)`,
      main: `rgba(${mainColor}, 1.0)`,
      dark: `rgba(${darkColor}, 1.0)`,
      cardBg: mode ? "#EEF0E5" : "#E3F4F4",
      footerBg: "#013220",
    },
    primary: {
      light: "#81ba00",
      main: mode ? whiteColor : "#145333",
      dark: "#81ba00",
      contrastText: mode ? "#145333" : whiteColor,
    },
    secondary: {
      light: "#D5F0C1",
      main: "#AAD9BB",
      dark: "#80BCBD",
      contrastText: whiteColor,
    },
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
      light: `rgba(${bgColor}, .5)`,
      main: `rgba(${bgColor}, .75)`,
      dark: `rgba(${bgColor}, 1.0)`,
      contrastText: `rgba(${mainColor}, 1.0)`,
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
    divider: defaultBgColor(),
    background: {
      paper: mode ? "#18392B" : "#F5F7F8",
      default: defaultBgColor(),
    },
  };
};

export default Palette;
