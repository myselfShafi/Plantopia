import styled from "@emotion/styled";
import { Button, Hidden, Stack } from "@mui/material";

export const Menulist = ({ ...other }) => {
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
    <>
      {menuItems.map((item) => {
        return (
          <div key={item.id}>
            <Button
              children={item.title}
              variant="text"
              {...other}
              size="small"
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
