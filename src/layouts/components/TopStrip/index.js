import {
  EmojiNature,
  FilterVintage,
  Forest,
  Grass,
  LocalFlorist,
  Spa,
  WaterDrop,
} from "@mui/icons-material";
import { Box, Divider } from "@mui/material";

export const TopStrip = () => {
  const Icons = [
    { id: 1, icon: <Spa className="stripIcon" /> },
    { id: 2, icon: <FilterVintage className="stripIcon" /> },
    { id: 3, icon: <Grass className="stripIcon" /> },
    { id: 4, icon: <Forest className="stripIcon" /> },
    { id: 5, icon: <EmojiNature className="stripIcon" /> },
    { id: 6, icon: <LocalFlorist className="stripIcon" /> },
    { id: 7, icon: <WaterDrop className="stripIcon" /> },
  ];
  return (
    <Box
      p={".5rem"}
      bgcolor={"customColors.main"}
      display={{ xs: "none", md: "flex" }}
      justifyContent={"space-between"}
    >
      <Box columnGap={"3rem"} display={"flex"} alignItems={"center"}>
        {Icons.map((icon) => {
          return <Box key={icon.id}>{icon.icon}</Box>;
        })}
      </Box>
      <Divider
        sx={{ flexGrow: 1, display: { xs: "none", lg: "inherit" } }}
        textAlign="center"
        variant="middle"
      >
        Nature's Cart
      </Divider>
      <Box columnGap={"3rem"} display={"flex"} alignItems={"center"}>
        {Icons.reverse().map((icon) => {
          return <Box key={icon.id}>{icon.icon}</Box>;
        })}
      </Box>
    </Box>
  );
};
