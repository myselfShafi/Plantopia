import { Viewbox } from "@/components/Viewbox";
import { Link, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Viewbox bgcolor={"secondary.dark"}>
      <Stack>
        <Typography
          children={"Our Company"}
          variant="body1"
          fontWeight={"bold"}
        />
        <Link href="#" underline="hover" children={"About Us"} />
        <Link href="#" underline="hover" children={"Careers"} />
        <Link href="#" underline="hover" children={"Nearby Store locations"} />
      </Stack>
    </Viewbox>
  );
};
