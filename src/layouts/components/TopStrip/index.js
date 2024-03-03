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
    <Spa className="stripIcon" />,
    <FilterVintage className="stripIcon" />,
    <Grass className="stripIcon" />,
    <Forest className="stripIcon" />,
    <EmojiNature className="stripIcon" />,
    <LocalFlorist className="stripIcon" />,
    <WaterDrop className="stripIcon" />,
  ];
  return (
    <Box
      p={"1rem"}
      bgcolor={"customColors.main"}
      display={"flex"}
      flexWrap={"nowrap"}
    >
      <Box columnGap={"5rem"} display={"flex"}>
        {Icons.map((icon, index) => {
          return <div key={index}>{icon}</div>;
        })}
      </Box>
      <Divider
        sx={{ flexGrow: 1 }}
        textAlign="center"
        children={"Nature's Cart"}
        variant="middle"
      />
      <Box columnGap={"5rem"} display={"flex"}>
        {Icons.reverse().map((icon, index) => {
          return <div key={index}>{icon}</div>;
        })}
      </Box>
    </Box>
  );
};
