const Imagelist = () => {
  return {
    MuiImageListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          overflow: "hidden",
          position: "relative",
          ":hover > .MuiImageListItemBar-root": {
            display: "flex !important",
          },
          ":hover > .category-img": {
            transform: "scale(1.1)",
          },
        }),
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          display: "none",
          height: "100%",
        },
        titleWrap: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "2rem",
        },
        title: {
          fontSize: "4rem",
          overflow: "visible",
        },
      },
    },
  };
};

export default Imagelist;
