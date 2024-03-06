import styled from "@emotion/styled";
import { Button, Hidden, Stack } from "@mui/material";
import { useRouter } from "next/router";

export const Menulist = ({ onClick, ...other }) => {
  const router = useRouter();
  const menuItems = [
    { id: 1, title: "Indoor", href: "/category/indoor" },
    { id: 2, title: "Outdoor", href: "/category/outdoor" },
    { id: 3, title: "Potted", href: "/category/potted" },
    { id: 4, title: "Plant Care", href: "/category/plant_care" },
    {
      id: 5,
      title: "Seeds & Bulbs",
      href: "/category/seeds_&_bulbs",
    },
    {
      id: 6,
      title: "Accessories",
      href: "/category/plant_accessories",
    },
    {
      id: 7,
      title: "Gifts & Sets",
      href: "/category/gifts_&_sets",
    },
    {
      id: 8,
      title: "Seasonal Plants",
      href: "/category/seasonal_plants",
    },
    {
      id: 9,
      title: "Rare/Exotic",
      href: "/category/rare_exotic_plants",
    },
  ];
  return (
    <>
      {menuItems.map((item) => {
        return (
          <div key={item.id}>
            <Button
              children={item.title}
              variant="text"
              {...other}
              size="small"
              onClick={() => {
                router.push(item.href);
                onClick && onClick();
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export const Menubar = () => {
  const StyledStack = styled(Stack)(({ theme }) => ({
    padding: "1rem",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
      display: "flex",
    },
  }));

  return (
    <Hidden mdDown>
      <StyledStack bgcolor={"secondary.dark"}>
        <Menulist className={"hover"} />
      </StyledStack>
    </Hidden>
  );
};
