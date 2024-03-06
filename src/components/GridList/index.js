import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";

export const Gridlist = ({ itemData }) => {
  const router = useRouter();
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const mobView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <ImageList
        variant="masonry"
        cols={mobView ? 1 : tabView ? 2 : 3}
        gap={10}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.id}>
            <img
              loading="lazy"
              alt={item?.title ?? `Plant-category-${index}`}
              src={item?.src.src}
              className="category-img"
            />
            <ImageListItemBar
              title={item?.title}
              subtitle={
                <Button
                  children={"SHOP NOW"}
                  variant="contained"
                  color="info"
                  size="medium"
                  onClick={() => router.push(item?.href)}
                />
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
