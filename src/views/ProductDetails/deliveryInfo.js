import { Inventory2Rounded, LocalShipping, Wallet } from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";

const delivery = [
  {
    icon: <LocalShipping />,
    text: "Free shipping above ₹500",
  },
  {
    icon: <Wallet />,
    text: "COD Available",
  },
  {
    icon: <Inventory2Rounded />,
    text: "Replacement Guarantee(T&C apply)",
  },
];

export const DeliveryInfo = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"center"} gap={2} mt={"2rem"}>
      {delivery.map((each, idx) => {
        return (
          <Stack
            key={idx}
            alignItems={"center"}
            textAlign={"center"}
            width={"30%"}
          >
            <Paper elevation={0} sx={{ p: "1rem", borderRadius: "50%" }}>
              {each.icon}
            </Paper>
            <Typography variant="subtitle1" mt={"1rem"}>
              {each.text}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
