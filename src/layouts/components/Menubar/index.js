import { Button, Stack } from "@mui/material";

export const Menubar = () => {
  const menuItems = [
    { id: 1, title: "Indoor" },
    { id: 2, title: "Outdoor" },
    { id: 3, title: "Potted" },
    { id: 4, title: "Plant Care" },
    { id: 5, title: "Seeds & Bulbs" },
    { id: 6, title: "Accessories" },
    { id: 7, title: "Gifts & Sets" },
    { id: 8, title: "Seasonal Plants" },
    { id: 9, title: "Rare/Exotic" },
  ];
  return (
    <Stack
      p={"1.5rem 15rem"}
      bgcolor={"secondary.dark"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      {menuItems.map((item) => {
        return (
          <div key={item.id}>
            <Button children={item.title} variant="text" />
          </div>
        );
      })}
    </Stack>
  );
};
