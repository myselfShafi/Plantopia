import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import {
  Inventory2Outlined,
  LocalShippingOutlined,
  PaymentOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const features = [
  {
    icon: <LocalShippingOutlined fontSize="large" />,
    text: "Free Delivery",
  },
  {
    icon: <PaymentOutlined fontSize="large" />,
    text: "Secure Payments",
  },
  {
    icon: <SupportAgentOutlined fontSize="large" />,
    text: "Top-notch Support",
  },
  {
    icon: <Inventory2Outlined fontSize="large" />,
    text: "Easier Returns",
  },
];

export const FeatureDiv = () => {
  const { tabmobView } = useMediaQueries();
  return (
    <Viewbox
      bgcolor={"background.paper"}
      sx={{
        py: "1.5rem",
        display: "grid",
        gridTemplateColumns: !tabmobView && "repeat(4, 1fr)",
        rowGap: "2rem",
      }}
    >
      {features.map((each, idx) => {
        return (
          <Stack
            key={idx}
            display={"inline-flex"}
            alignItems={"center"}
            gap={"1.5rem"}
          >
            {each.icon}
            <Typography variant="h6" children={each.text} />
          </Stack>
        );
      })}
    </Viewbox>
  );
};
