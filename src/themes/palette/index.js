const Palette = (mode) => {
  const whiteColor = "#fff";
  const lightColor = "255, 255, 255";
  const darkColor = "34, 34, 34";
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
    // mode: mode && "light",
    customColors: {
      light: `rgba(${lightColor}, 1.0)`,
      main: `rgba(${mainColor}, 1.0)`,
      dark: `rgba(${darkColor}, 1.0)`,
    },
    primary: {
      light: "#787EFF",
      main: "#666CFF",
      dark: "#5A5FE0",
      contrastText: whiteColor,
    },
    secondary: {
      light: "#7F889B",
      main: "#4a5161",
      dark: "#333333",
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
      paper: mode ? "#30334E" : whiteColor,
      default: defaultBgColor(),
    },
  };
};

export default Palette;
